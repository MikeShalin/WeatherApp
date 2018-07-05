import {observable, action} from 'mobx'
import BasicStore from './BasicStore'
import {battuta} from '../utils/tokens'
import {callApi, routes} from '../utils/callApi'

export default class Location extends BasicStore {
  @observable error = null
  @observable isFetching = false
  @observable result = false
  @observable cityName = ''
  @observable cityLocation = {latitude: null, longitude: null}

  @action
  changeCityName = location => {
    this.cityName = location
    this.getLocation(location)
  }

  @action
  getLocation = ({city, country}) => {
    let url = `${routes.battuta}/city/${country}/search/`
    let config = {
      params: {
        key: battuta,
        city: city
      }
    }

    callApi({
      url,
      config,
      onRequest: this.getStore('request')._onRequest.bind(this),
      onSuccess: this._onSuccess.bind(this),
      onError: this.getStore('request')._onError.bind(this)
    })
  }

  _onSuccess(json) {
    this.cityLocation = {
      latitude: json.data[0].latitude,
      longitude: json.data[0].longitude
    }
    if (!Array.isArray(json)) this.getStore('weather').weatherFetch(this.cityLocation)
    else this.error = 'Введите корректный город'
    this.isFetching = false
  }

}

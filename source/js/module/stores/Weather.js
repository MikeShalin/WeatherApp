import {observable, action} from 'mobx'
import BasicStore from './BasicStore'
import {callApi, routes} from 'js/module/utils/callApi'
import {darksky as key} from 'js/module/utils/tokens'

export default class Weather extends BasicStore {
  @observable error = null
  @observable isFetching = false
  @observable result = false

  currentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.weatherFetch(pos)
      }, () => {
        console.log('location error')
      })
    } else {
      console.log('Browser doesn\'t support Geolocation')
    }
  }

  @action
  weatherFetch = ({latitude, longitude}) => {
    let url = `${routes.darksky}/${key}/${latitude},${longitude}`
    let config = null

    callApi({
      url,
      config,
      onRequest: this._onRequest.bind(this),
      onSuccess: this._onSuccess.bind(this),
      onError: this.getStore('request')._onError.bind(this)
    })
  }

  _onRequest() {
    this.error = false
    this.isFetching = true
  }

  _onSuccess(json) {
    this.result = json.data.currently
    this.isFetching = false
  }
}

import {observable, action} from 'mobx'
import BasicStore from './BasicStore'
import {callApi, routes} from 'js/module/utils/callApi'
import {battuta} from 'js/module/utils/tokens'

export default class Country extends BasicStore {
  @observable error = null
  @observable isFetching = false
  @observable result = false

  @action
  countryListFetch = () => {
    let url = `${routes.battuta}/country/all`
    let config = {
      params: {
        key: battuta
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
    this.result = json.data
    this.isFetching = false
  }
}

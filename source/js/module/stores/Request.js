import {observable} from 'mobx'
import BasicStore from './BasicStore'

const Errors = ['TypeError: Cannot read property \'latitude\' of undefined',
  'TypeError: Cannot read property \'longitude\' of undefined',
  'Error: Request failed with status code 404',
  'Error: Request failed with status code 403'
]

export default class Request extends BasicStore {
  @observable error = null
  @observable isFetching = false
  @observable result = false

  _onRequest() {
    this.error = false
    this.isFetching = true
  }

  _onError(error) {
    const index = Errors.indexOf(error.toString())
    this.error = index !== -1 && index !== 3 ? 'Введите корректный город' : error
    this.isFetching = false
  }
}

import {observable, action} from 'mobx'
import BasicStore from './BasicStore'
import {addToStorage} from 'js/module/utils/helpers'

export default class Location extends BasicStore {
  @observable cityList = localStorage.getItem('city') ? JSON.parse(localStorage.getItem('city')) : []
  @observable currCity = ''

  @action
  addToStore = city => {
    const title = city.toLowerCase().replace(/\s+/g, ''),
      newCity = {id: this.cityList.length, title}
    if (!localStorage.getItem('city')) this.cityList = [newCity]
    else if (this.cityList.slice().map(c => c.title).indexOf(title) !== -1) return false
    else this.cityList[this.cityList.length] = newCity
    addToStorage('city', this.cityList)
  }

  @action
  removeInStore = id => {
    let cityStorage = JSON.parse(localStorage.getItem('city'))
    this.cityList = cityStorage.filter(city => city.id !== id)
    addToStorage('city', this.cityList)
  }

  @action
  addToInput = id => {
    this.currCity = this.cityList.filter(city => city.id === id)
  }
}

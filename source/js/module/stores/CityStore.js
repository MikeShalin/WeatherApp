import {observable, action} from 'mobx'
import BasicStore from './BasicStore'

export default class Location extends BasicStore {
  @observable cityList = localStorage.getItem('city') ? JSON.parse(localStorage.getItem('city')) : []
  @observable currCity = ''

  @action
  addToStore = city => {
    if (!localStorage.getItem('city')) {
      localStorage.setItem('city', JSON.stringify([...this.cityList, {
        id: this.cityList.length + 1,
        title: city.toLowerCase().replace(/\\s+/g, '')
      }]))
      this.cityList = [{id: this.cityList.length + 1, title: city.toLowerCase().replace(/\\s+/g, '')}]
    }
    else if (this.cityList.map(city => city.title).indexOf(city.toLowerCase().replace(/\s+/g, '')) !== -1) return false
    else {
      let cityStorage = JSON.parse(localStorage.getItem('city')),
        newCity = {id: this.cityList.length, title: city.toLowerCase().replace(/\s+/g, '')}
      localStorage.setItem('city', JSON.stringify([...cityStorage, newCity]))
      this.cityList = [...this.cityList, newCity]
    }
  }

  @action
  removeInStore = id => {
    let cityStorage = JSON.parse(localStorage.getItem('city'))
    this.cityList = cityStorage.filter(city => city.id !== id)
    localStorage.setItem('city', JSON.stringify(this.cityList))
  }

  @action
  addToInput = id => {
    this.currCity = this.cityList.filter(city => city.id === id)
  }
}

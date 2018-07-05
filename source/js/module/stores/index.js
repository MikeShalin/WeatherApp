import Location from './Location'
import Country from './Country'
import Weather from './Weather'
import Form from './Form'
import Request from './Request'
import CityList from './CityList'
import CityStore from './CityStore'

const stores = {}

Object.assign(stores, {
  location: new Location(stores),
  country: new Country(stores),
  weather: new Weather(stores),
  request: new Request(stores),
  form: new Form(),
  cityList: new CityList(),
  cityStore: new CityStore(stores),
})

export default stores

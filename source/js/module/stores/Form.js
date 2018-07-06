import React, {Component} from 'react'
import {observable, action} from 'mobx'
import {inject, observer} from 'mobx-react'
import FormComponent from 'js/features/components/Form/Form'

const fakeOption = {
  isFetching: '...загрузка городов',
  error: '...упс не получилось',
}

@inject('location')
@inject('country')
@inject('cityStore')
@inject('weather')
@observer
class Form extends Component {
  @observable city = ''
  @observable country = 'af'

  @action
  onChange = e => {
    this[e.target.name] = e.target.value
  }

  @action
  onSubmit = e => {
    e.preventDefault()
    this.props.location.getLocation({
      city: this.city || this.props.cityStore.currCity[0].title,
      country: this.country
    })
    this.props.cityStore.addToStore(this.city || this.props.cityStore.currCity[0].title)
  }

  initOption = (test) => test ? fakeOption.isFetching : fakeOption.error

  componentWillMount() {
    this.props.country.countryListFetch()
  }

  render() {
    const {location, country} = this.props
    return <FormComponent
      onSubmit={this.onSubmit}
      cityValue={this.city || (this.props.cityStore.currCity && this.props.cityStore.currCity[0].title)}
      countryValue={this.country}
      onChange={this.onChange}
      optionList={
        (country.result && country.result.slice()) || [{name: this.initOption(country.isFetching) , code: ''}]
      }
      error={location.error || country.error}
      isFetching={location.isFetching || country.isFetching}
      result={location.result || country.result}
    />
  }
}

export default Form

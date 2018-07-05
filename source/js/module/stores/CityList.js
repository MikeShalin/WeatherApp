import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import CityListComponent from 'js/features/components/CityList/CityList'

@inject('location')
@inject('country')
@inject('cityStore')
@observer
class CityList extends Component {
  render() {
    return <CityListComponent
      list={this.props.cityStore.cityList}
      onClick={this.props.cityStore.addToInput}
      onDelete={this.props.cityStore.removeInStore}
    />
  }
}

export default CityList
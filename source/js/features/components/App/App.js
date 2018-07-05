import React, {Component} from 'react'
import styled from 'styled-components'
import Form from 'js/module/stores/Form'
import CityList from 'js/module/stores/CityList'
import WeatherList from 'js/features/components/WeatherList/WeatherList'
import {observer} from 'mobx-react'

const ContainerApp = styled.div`
  width: 100vw;
  height: 100vh;
  background: grey;
  padding: 30px;
  display: flex;
`

@observer
export class App extends Component {
  render() {
    return (
      <ContainerApp>
        <Form/>
        <CityList/>
        <WeatherList/>
      </ContainerApp>
    )
  }
}

export default App

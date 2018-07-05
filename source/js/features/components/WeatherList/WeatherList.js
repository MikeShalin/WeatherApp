import React from 'react'
import {unixToTime} from 'js/module/utils/helpers'
import styled from 'styled-components'
import {inject, observer} from 'mobx-react'
import PropTypes from 'prop-types'
import Popup from 'js/features/components/Popup/Popup'

const Img = styled.img`
  margin-left: 10px;
  width: 30px
`

const Container = styled.div`
  display: flex
  flex-direction: column
`

const Wrapper = styled.div`
  display: flex
  flex-direction: row
  align-items: center
`

const convert = far => Math.round(((far - 32) / 1.8) * 100) / 100

const Weather = ({
                   time,
                   summary,
                   precipProbability,
                   precipType,
                   temperature,
                   apparentTemperature,
                   humidity,
                   pressure
                 }) =>
  <Container>
    <span className='time'>{unixToTime(time)}</span>
    <Wrapper>
      <span className='summary'>{summary}</span>
      <Img src={`icon/${summary.toLowerCase().replace(' ', '-')}.png`} className='icon' alt={summary.toLowerCase()}/>
    </Wrapper>
    <span className='precipProbability'>облачность: {precipProbability}</span>
    <span className='precipType'>тип осадков: {precipType}</span>
    <span className='temperature'>температура: {convert(Number(temperature))} </span>
    <span className='apparentTemperature'>ощущаемая температура: {convert(Number(apparentTemperature))} </span>
    <span className='humidity'>влажность: {humidity} </span>
    <span className='pressure'>давление: {pressure}  </span>
  </Container>

const WeatherList = observer((props) =>
  <Container>
    {props.weather.result && <Weather
      time={props.weather.result.time}
      summary={props.weather.result.summary}
      precipProbability={props.weather.result.precipProbability}
      precipType={props.weather.result.precipType}
      temperature={props.weather.result.temperature}
      apparentTemperature={props.weather.result.apparentTemperature}
      humidity={props.weather.result.humidity}
      pressure={props.weather.result.pressure}
    />}
    {props.weather.error && <Popup>Ошибка {props.weather.error.toString()}</Popup>}
    {props.weather.isFetching && <Popup>Идет загрузка...</Popup>}
  </Container>)

WeatherList.propTypes = {
  'props.weather.result.time': PropTypes.number,
  'props.weather.result.summary': PropTypes.string,
  'props.weather.result.precipProbability': PropTypes.string,
  'props.weather.result.precipType': PropTypes.string,
  'props.weather.result.temperature': PropTypes.string,
  'props.weather.result.apparentTemperature': PropTypes.string,
  'props.weather.result.humidity': PropTypes.string,
  'props.weather.result.pressure': PropTypes.string,
}

export default inject('weather')(WeatherList)

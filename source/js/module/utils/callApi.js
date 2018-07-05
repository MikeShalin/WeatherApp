import axios from 'axios'

export const callApi = ({url, config, onRequest, onSuccess, onError}) => {
  onRequest()
  const Headers = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET'
    }
  }
  return getResult(url, config)
    .then(json => onSuccess(json))
    .catch(error => onError(error.toString()))
}

export const getResult = (url, config) =>
  axios.get(url, Object.assign({}, {crossDomain: true}, Headers, config))

export const routes = {
  battuta: 'https://battuta.medunes.net/api',
  darksky: 'https://api.darksky.net/forecast'
}

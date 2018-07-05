import React from 'react'
import ReactDOM from 'react-dom'
import App from 'js/features/components/App/App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'
import stores from './module/stores'

ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

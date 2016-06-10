import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppReducer from './reducers'

import Layout from './components/Layout'

let store = createStore(AppReducer)

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
)

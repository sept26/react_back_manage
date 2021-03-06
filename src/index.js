import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/router'
import {Provider} from 'react-redux'
import store from '@/store/store';
import '@/style/index.less'

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component/>
    </Provider>,
    document.getElementById('root')
  )
}
render(Router)
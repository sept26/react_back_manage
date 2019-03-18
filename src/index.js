import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/router'
import '@/style/index.less'

const render = Component => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('root')
  )
}
render(Router)
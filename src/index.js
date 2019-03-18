import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/router'
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// )

const render = Component => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('root')
  )
}
render(Router)
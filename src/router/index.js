import React from 'react'
import {HashRouter, Switch} from 'react-router-dom'
import routerConfig from './routerConfig'
import RouterGuard from './routerGuard'

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <RouterGuard config={routerConfig}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default Router
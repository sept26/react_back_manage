import React from 'react'
import { Route, Redirect} from 'react-router-dom'
class routerGuard extends React.Component {
  render() {
    const {location, config} = this.props
    const {pathname} = location
    const isLogin = localStorage.getItem('userAuth')
    const targetRouterConfig = config.find(v => v.path === pathname)
    // 不需要登录就可以访问不需要权限的路由
    if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
        // 解构赋值
        const { component } = targetRouterConfig
        return <Route exact path={pathname} component={component} />
    }
    if(isLogin) {
      // 如果是登录状态,想跳转到登录页,重定向到主页
      if(pathname === '/login') {
        return <Redirect to="/" />
      } else {
        // 如果是合法路由,则跳转到相应的路由
        if(targetRouterConfig) {
          return <Route path={pathname} component={targetRouterConfig.component}/> 
        } else {
          // 如果路由不合法,重定向404页面
          return <Redirect to="/404"/>
        }
      }
    } else {
      // 非登录状态下,当路由合法且需要权限校验时,跳转到登录页
      if (targetRouterConfig && targetRouterConfig.auth) {
        return <Redirect to="/login" />
      } else {
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to='/404' />
      }
    }
  }
}

export default routerGuard
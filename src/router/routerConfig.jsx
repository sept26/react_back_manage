import Home from '@/pages/home'
import Login from '@/pages/login'
import ErrorPage from '@/pages/404'
const routerConfig = [
  {
    path: '/',
    component: Home,
    auth: true
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/404',
    component: ErrorPage
  }
]

export default routerConfig
import {createStore, applyMiddleware} from 'redux'
import * as home from './home/reduce'
import thunk from 'redux-thunk'

let store = createStore(
  home.oneState,
  applyMiddleware(thunk)
)

export default store
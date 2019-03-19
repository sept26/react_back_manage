import * as Type from './../actionType'
 let defaultState = {
   collapse: false
 }

 export const oneState = (state = defaultState, action) => {
    switch(action.type) {
      case Type.COLLAPSE:
        return {...state,...{collapse: action.value}}
      default:
        return state
    }
  }
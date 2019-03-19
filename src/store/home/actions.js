import * as Type from './../actionType'

export const collapseControl = (value) => {
  return {
    type: Type.COLLAPSE,
    value
  }
}
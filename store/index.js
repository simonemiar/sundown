//state
export const state = () => {
  return { test: 1 }
}
//mutations - sync happens instaly
export const mutations = {
  setTest(state, newState) {
    state.test = newState
  },
}
//actions - is async they go out as third party api
export const actions = {}

//getters
export const getters = {}

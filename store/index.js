export const state = () => {
  return { test: 1 }
}

export const mutations = {
  setTest(state, newState) {
    state.test = newState
  },
}

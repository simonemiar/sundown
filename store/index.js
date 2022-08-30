//state
export const state = () => {
  return {
    test: 1,
    spacereport: {
      missionname: '',
      missiondesc: '',
      missiondate: '',
      missionimages: '',
    },
    missiondesc: 'test hallo',
  }
}

//mutations - sync happens instaly
export const mutations = {
  setTest(state, newState) {
    state.test = newState
  },
  setReport(state, { key, value }) {
    state.report[key] = value
  },
  // updateMissionname(state, newState) {
  //   state.missionname = newState
  // },
  // updateMissiondesc(state, newState) {
  //   state.missiondesc = newState
  // },
}

//actions - is async they go out as third party api
export const actions = {}

//getters
export const getters = {
  report(state) {
    return state.report
  },
}

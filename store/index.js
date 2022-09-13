//state
let defaultSpacereport = {
  missionname: '',
  missiondesc: '',
  missiondate: '',
  missionimages: [],
  newmissionimages: [],
  coordinates: {
    missionlongitude: '',
    missionlatitude: '',
  },
  missionuser: '',
}

export const state = () => {
  return {
    test: 1,
    spacereport: defaultSpacereport,
    spacereports: [],
    // resetSpacereport: [...spacereport],
  }
}

//mutations - sync happens instaly
export const mutations = {
  setTest(state, newState) {
    state.test = newState
  },
  setSpacereport(state, { key, value }) {
    state.spacereport[key] = value
  },
  setCoordinates(state, { key, value }) {
    state.spacereport.coordinates[key] = value
  },
  setSpacereports(state, newState) {
    state.spacereports = newState
  },
  resetReport: (state) => {
    state.spacereport = defaultSpacereport
  },
  updateReport(state, spacereport) {
    console.log('mutation user:', spacereport)
    state.reportToSave = spacereport
  },
}

//actions - is async they go out as third party api
export const actions = {
  resetReport: ({ commit }) => {
    commit('resetReport') // calling the mutation here
  },
  updateReport({ commit }, spacereport) {
    commit('updateReport', spacereport)
    console.log('report action')
  },
}

//getters
export const getters = {
  spacereport(state) {
    return state.spacereport
  },
  spacereports(state) {
    return state.spacereports
  },
}

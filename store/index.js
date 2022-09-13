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
  // resetReport(resetSpacereport) {
  //   const s = resetReport()
  //   Object.keys(s).forEach((key) => {
  //     resetSpacereport[key] = s[key]
  //   })
  // },
  resetReport: (state) => {
    state.spacereport = defaultSpacereport
  },
}

//actions - is async they go out as third party api
export const actions = {
  resetReport: ({ commit }) => {
    commit('resetReport') // calling the mutation here
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

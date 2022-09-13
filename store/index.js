//state
export const state = () => {
  return {
    test: 1,
    spacereport: {
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
    },
    spacereports: [],
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
}

//actions - is async they go out as third party api
export const actions = {}

//getters
export const getters = {
  spacereport(state) {
    return state.spacereport
  },
  spacereports(state) {
    return state.spacereports
  },
}

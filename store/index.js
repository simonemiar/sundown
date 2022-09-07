//state
export const state = () => {
  return {
    test: 1,
    spacereports: {
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
  }
}

//mutations - sync happens instaly
export const mutations = {
  setTest(state, newState) {
    state.test = newState
  },

  setSpacereport(state, { key, value }) {
    state.spacereports[key] = value
  },
  setCoordinates(state, { key, value }) {
    state.spacereports.coordinates[key] = value
  },
}

//actions - is async they go out as third party api
export const actions = {}

//getters
export const getters = {
  spacereports(state) {
    return state.spacereports
  },
}

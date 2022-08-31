//v-calender import

// import Vue from 'vue'
// import VCalendar from 'v-calendar'

// Vue.use(VCalendar, {
//   componentPrefix: 'vc', // Use <vc-calendar /> instead of <v-calendar />
// })

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
}

//actions - is async they go out as third party api
export const actions = {}

//getters
export const getters = {
  spacereport(state) {
    return state.spacereport
  },
}

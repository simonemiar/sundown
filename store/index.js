//state
let defaultSpacereport = {
  missionuser: "",
  missionid: null,
  missionname: "",
  missiondesc: "",
  missiondate: null,
  missionimages: [],
  newmissionimages: [],
  coordinates: {
    missionlongitude: "",
    missionlatitude: "",
  },
};

export const state = () => {
  return {
    test: 1,
    spacereport: defaultSpacereport,
    spacereports: [],
    // resetSpacereport: [...spacereport],
  };
};

//mutations - sync happens instaly
export const mutations = {
  setTest(state, newState) {
    state.test = newState;
  },
  setSpacereport(state, { key, value }) {
    state.spacereport[key] = value;
  },
  setCoordinates(state, { key, value }) {
    state.spacereport.coordinates[key] = value;
  },
  setSpacereports(state, newState) {
    state.spacereports = newState;
  },
  resetReport: (state) => {
    state.spacereport = defaultSpacereport;
  },
  editReport(state, payload) {
    // setting the empty object = to the full report
    state.spacereport = payload.report;
    // Object.assign((state.spacereport, payload.report))
    console.log("spacereport test", state.spacereport);
  },
  deleteImage(state, payload) {
    state.spacereport.newmissionimages.splice(
      state.spacereport.newmissionimages.indexOf(payload),
      1
    );
  },
};

//actions - is async they go out as third party api
export const actions = {
  resetReport: ({ commit }) => {
    commit("resetReport"); // calling the mutation here
  },
};

//getters
export const getters = {
  spacereport(state) {
    return state.spacereport;
  },
  spacereports(state) {
    return state.spacereports;
  },
};

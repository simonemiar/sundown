//state
let defaultSpacereport = {
  missionuser: "",
  missionid: null,
  missionname: "",
  missiondesc: "",
  missiondate: new Date(),
  missionimages: [],
  newmissionimages: [],
  oldcoordinates: [],
  coordinates: {
    missionlongitude: "",
    missionlatitude: "",
  },

  iscompleted: {
    isdetailscompleted: false,
    isimagescompleted: false,
    ismapcompleted: false,
    isoverviewcompleted: false,
  },
};

export const state = () => {
  return {
    test: 1,
    spacereport: defaultSpacereport,
    spacereports: [],
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
  setCompleted(state, { key, value }) {
    state.spacereport.iscompleted[key] = value;
  },
  setSpacereports(state, newState) {
    state.spacereports = newState;
  },
  resetReport: (state) => {
    state.spacereport = { ...defaultSpacereport };
  },
  editReport(state, payload) {
    // setting the empty object = to the full report
    state.spacereport = payload.report;
    console.log("spacereport test", state.spacereport);
  },
  removeNewImage(state, payload) {
    state.spacereport.newmissionimages.splice(
      state.spacereport.newmissionimages.indexOf(payload),
      1
    );
  },
  removeOriginalImage(state, payload) {
    // below is not working.... but is needs to be in the store
    state.spacereport.missionimages.splice(
      state.spacereport.missionimages.indexOf(payload),
      1
    );
    console.log("misimg ", state.spacereport.missionimages);
    state.spacereport.newmissionimages = [
      ...state.spacereport.newmissionimages,
      payload,
    ];
    // state.missionimages = [...state.missionimages, payload];
  },
  oldCoordinates(state, payload) {
    // console.log(payload);
    state.spacereport.oldcoordinates.push(payload);
    console.log(state.spacereport.oldcoordinates);
  },
};

//actions - is async they go out as third party api
export const actions = {};

//getters
export const getters = {
  spacereport(state) {
    return state.spacereport;
  },
  spacereports(state) {
    return state.spacereports;
  },
  iscompleted(state) {
    return state.iscompleted;
  },
};

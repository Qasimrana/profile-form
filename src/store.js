import Vuex from "vuex";
import Vue from "vue"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profileForm: {},
  },
  mutations: {
    saveProfileForm(state, profileForm) {
      state.profileForm = profileForm;
    },
  },
  actions: {},
  getters: {
    getProfileForm: (state) => {
      return state.profileForm;
    },
  },
});
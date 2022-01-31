import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showWindow: false,
    showRightTrigger: false,
  },
  mutations: {
    handleShowWindow(state, payload) {
      state.showWindow = payload;
    },
    ShowRightTrigger(state, payload) {
      state.showRightTrigger = payload;
    },
  },
  actions: {
    showWindow({ commit }) {
      commit("handleShowWindow", true);
    },
    closeWindow({ commit }) {
      commit("handleShowWindow", false);
    },
    ShowRightTrigger({ commit }) {
      commit("ShowRightTrigger", true);
    },
    HideRightTrigger({ commit }) {
      commit("ShowRightTrigger", false);
    },
  },
  modules: {},
});

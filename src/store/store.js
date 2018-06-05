import Vue from 'vue'
import Vuex from 'vuex'
import { ProgressWidgetModule } from './ProgressWidgetModule';
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    progressWidget: ProgressWidgetModule
  },

  state: {
    router: null,  
    showToaster: false,
    timer: null,
    bricks: true,
    color: "green",
    success: false,
    fail: false,
    title: null,
    message: "Saving",
    successMessage: null,
    failMessage: null,
  },

  mutations: {
    setRouter(state, payload) {
      state.router = payload.router;
    },

    pushNewRoute(state, payload) {
      state.router.push(payload.url);
    },

    toggleToaster(state) {
      state.showToaster = !state.showToaster;
    },

    setTimer(state, payload) {
      state.timer = payload.time;
    },
    
    toggleBricks(state) {
      state.bricks = !state.bricks;
    },

    setToasterColor(state, payload) {
      state.color = payload.color;
    },
    
    toggleToasterSuccess(state) {
      state.success = !state.success;
    },
    
    toggleToasterFail(state) {
      state.fail = !state.fail;
    },

    setToasterMessage(state, payload) {
      state.message = payload.message;
    },

    setToasterSuccessMessage(state, payload) {
      state.setToasterSuccessMessage = payload.successMessage;
    },

    setToasterFailMessage(state, payload) {
      state.failMessage = payload.failMessage;
    },
  },

  actions: {
    init(context, payload) {
      context.commit('setRouter', payload);
      context.commit('pushNewRoute', {url: '/employee/benefits/Enrollment/PersonalInformation/NewHire'});
    },

    save(context) {
      context.dispatch('progressWidget/completeItem');
    },

    navigate(context, payload) {
      context.commit('pushNewRoute', { url: context.getters['progressWidget/currentItem'].Url });
    },

    toggleToaster(context) {
      context.commit('toggleToaster');
    },

    setTimer(context, payload) {
      context.commit('setTimer', payload);
    },

    toggleBricks(context) {
      context.commit('toggleBricks');
    },

    setToasterColor(context, payload) {
      context.commit('setToasterColor', payload);
    },

    toggleToasterSuccess(context) {
      context.commit('toggleToasterSuccess');
    },

    toggleToasterFail(context) {
      context.commit('toggleToasterFail');
    },
    
    toggleBricks(context) {
      context.commit('toggleBricks');
    },

    setToasterMessage(context, payload) {
      context.commit('setToasterMessage', payload);
    },

    setToasterSuccessMessage(context, payload) {
      context.commit('setToasterSuccessMessage', payload);
    },

    setToasterFailMessage(context, payload) {
      context.commit('setToasterFailMessage', payload);
    },


    
  }
})

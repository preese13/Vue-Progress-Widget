import Vue from 'vue'
import Vuex from 'vuex'
import { ProgressWidgetModule } from './ProgressWidgetModule';
import { ToasterModule } from './ToasterModule';
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    progressWidget: ProgressWidgetModule,
    toaster: ToasterModule
  },

  state: {
    router: null,  
  },

  mutations: {
    setRouter(state, payload) {
      state.router = payload.router;
    },

    pushNewRoute(state, payload) {
      state.router.push(payload.url);
    },
  },

  actions: {
    //importing the router from main.js through app.vue.  see above
    init(context, payload) {
      context.commit('setRouter', payload);
      context.commit('pushNewRoute', {url: '/employee/benefits/Enrollment/PersonalInformation/NewHire'});
    },
    save(context) {
      context.dispatch('progressWidget/completeItem');
    },
    //after completing a form, the currentItem will be updated, but the view won't be updated until this is called
    navigate(context, payload) {
      context.commit('pushNewRoute', { url: context.getters['progressWidget/currentItem'].Url });
    },
  }
  
})

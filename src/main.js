import Vue from 'vue'
import App from './App.vue'
import Dental from './forms/Dental.vue'
import PersonalInfo from './forms/PersonalInfo.vue'
import SummaryPage from './forms/SummaryPage.vue'
import ProgressWidget from './elements/ProgressWidget.vue'
import FormContainer from './elements/FormContainer.vue'
import Medical from './forms/Medical.vue'
import DependentInfomation from './forms/DependentInfomation.vue'
import HSA from './forms/HSA.vue'
import VoluntaryLife from './forms/VoluntaryLife.vue'
import Vision from './forms/Vision.vue'
import PCP from './forms/PCP.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import { store } from './store/store.js'
import VueNotifications from 'vue-notifications'
import Toaster from './elements/Toaster.vue'

Vue.use(VueRouter);
Vue.use(VueNotifications);

const router = new VueRouter({
  routes: Routes,
  mode: 'history', //removes the '#' from the path: https://router.vuejs.org/en/essentials/history-mode.html
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

Vue.component('Dental', Dental)
Vue.component('PersonalInfo', PersonalInfo)
Vue.component('SummaryPage', SummaryPage)
Vue.component('ProgressWidget', ProgressWidget)
Vue.component('FormContainer', FormContainer)
Vue.component('Medical', Medical)
Vue.component('DependentInfomation', DependentInfomation)
Vue.component('HSA', HSA)
Vue.component('VoluntaryLife', VoluntaryLife)
Vue.component('Vision', Vision)
Vue.component('PCP', PCP)
Vue.component('Toaster', Toaster)

new Vue({
  store: store,
  el: '#app',
  render: h => h(App),
  router: router
})

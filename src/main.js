import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import Vuex from 'vuex'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  vuetify,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

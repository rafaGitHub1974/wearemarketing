import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { i18n } from './plugins/i18n'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router,
  components: { App },
  template: '<App/>',
  i18n
})

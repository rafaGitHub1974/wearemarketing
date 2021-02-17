import Vue from 'vue'
import Vuex from 'vuex'
import stStepper from './modules/st-stepper'
import stLanguage from './modules/st-language'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// process.env.NODE_ENV = 'production'

export default new Vuex.Store({
  modules: {
    stStepper,
    stLanguage
  },
  strict: debug
})

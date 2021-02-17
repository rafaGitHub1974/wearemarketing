import { i18n } from '@/plugins/i18n.js'

const state = {
  language: i18n.locale
}
const getters = {
  getLanguage: state => state.language
}

const actions = { }

const mutations = {
  setLanguage (context, payload) {
    state.language = payload
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}


import stLanguage from './st-language'
import { i18n } from '@/plugins/i18n.js'

const state = {

  dataArray: [
    {
      node: 1,
      title: i18n.t('myData'),
      text: i18n.t('textMyData'),
      img: ''
    },
    {
      node: 2,
      title: i18n.t('productPayment'),
      text: i18n.t('textProductPayment'),
      img: 'mdi-credit-card-multiple-outline'
    }
  ]
}

const getters = {
  getDataArray: state => state.dataArray
}

const actions = {}

const mutations = {
  setDataArray (context, payload) {
    i18n.locale = stLanguage.state.language
    let translatedArray = [...state.dataArray]

    translatedArray = [
      {
        node: 1,
        title: i18n.t('myData'),
        text: i18n.t('textMyData'),
        img: ''
      },
      {
        node: 2,
        title: i18n.t('productPayment'),
        text: i18n.t('textProductPayment'),
        img: 'mdi-credit-card-multiple-outline'
      }]

    if (payload.length === 3) {
      translatedArray.push(payload[2])
    }
    state.dataArray = translatedArray
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

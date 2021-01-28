import Vue from 'vue'
import Router from 'vue-router'
import mktStepper from '@/components/mktStepper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mktStepper',
      component: mktStepper,
      props: true
    }
  ]
})

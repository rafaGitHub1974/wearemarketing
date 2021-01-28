import Vue from 'vue'
import mktComun from '@/components/mktComun'

describe('mktComun.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(mktComun)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.mktComun h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})

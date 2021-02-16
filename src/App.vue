<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fluid style="padding: 0px;">
          <mkt-header></mkt-header>
          <router-view/>
        </v-container>
         <mkt-footer></mkt-footer>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import mktHeader from './components/mktHeader'
import mktFooter from './components/mktFooter'

export default {
  components: {
    mktHeader,
    mktFooter },
  name: 'App'
}
</script>
<style lang="scss">
  @import './scss/main.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: white;
  }
 </style>

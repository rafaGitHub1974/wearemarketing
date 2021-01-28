<template>
  <v-container class="footer mt-5">
    <v-row>
      <v-col cols="6" class="mt-4">
        <p text-start>2020 © We Are Marketing</p>
      </v-col>
      <v-col cols="6">
        <img class="mr-3" :src="require('../assets/logo.png')" height="30"/>
      </v-col >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'mktFooter',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  p {
    font-size: 10px;
  }
</style>

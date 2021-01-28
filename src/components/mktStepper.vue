<template>
  <v-container fluid ma-0 pa-0 fill-height mt-2 class="pa-0">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="12">
        <v-stepper v-model="node" class="sm-12 elevation-0">
          <v-stepper-header class="sm-12 stepper">
            <v-stepper-step :complete="node > 1" step="1">
              <small>Mis datos</small>
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="node > 2" step="2">
              <small>Pago</small>
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="node === 3" step="3">
              <small>Proceso finalizado</small>
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <mkt-comun :dataNode="dataArray[0]"> </mkt-comun>
              <v-row>
                <v-col cols="12" sm="12" align="end">
                  <v-btn rounded color="primary" class="btn" dark @click="node = 2">
                    Continuar
                    <v-icon right dark>mdi-arrow-right-bold-circle-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="2">
              <mkt-comun :dataNode="dataArray[1]"> </mkt-comun>
              <v-row class="mt-1">
                <v-col cols="6" sm="6" align="center">
                  <v-btn outlined color="primary" class="btn" rounded @click="node = 1">
                    <v-icon left>mdi-arrow-left-bold-circle-outline</v-icon>
                    Anterior
                  </v-btn>
                </v-col>
                <v-col cols="6" sm="6" align="center">
                  <v-btn rounded color="primary" class="btn" dark @click="getData()">
                    Pagar
                    <v-icon right dark>mdi-arrow-right-bold-circle-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="3">
              <mkt-comun v-if="dataArray.length === 3" :dataNode="dataArray[2]"> </mkt-comun>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import mktComun from '@/components/mktComun'

export default {
  name: 'mktStepper',
  components: {
    mktComun
  },
  data () {
    return {
      node: 1,
      dataArray: [
        {
          node: 1,
          title: 'Mis datos',
          text: 'Revisa los datos y completa aquellos pendientes antes de continuar con el proceso',
          img: ''
        },
        {
          node: 2,
          title: 'Pago del producto',
          text: 'Una vez efectuado el pago del producto, recibirás un email con los detalles de la compra',
          img: 'mdi-credit-card-multiple-outline'
        }
      ]
    }
  },
  methods: {
    getData () {
      axios.get('http://www.mocky.io/v2/5e3d41272d00003f7ed95c09').then((response) => {
        let result = response.data
        result.node = 3
        // Sobreescribimos el atributo img
        result.img = 'mdi-certificate'
        this.dataArray.push(result)
        this.node = 3
      })
    }
  }
}
</script>

<style scoped>
  .btn {
    text-transform: none !important;
  }
  .stepper {
    background-color: #d3d3d3;
  }
</style>

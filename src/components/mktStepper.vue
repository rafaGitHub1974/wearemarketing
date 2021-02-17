<template>
  <v-container fluid ma-0 pa-0 fill-height mt-2 class="pa-0">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="12" >
        <v-stepper v-model="node" class="sm-12 elevation-0" alt-labels>
          <v-stepper-header class="stepper">
            <v-stepper-step :complete="node > 1" step="1" @click.native="checkAction(1)">
              <small>{{$t('myData')}}</small>
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="node > 2" step="2" @click.native="checkAction(2)">
              <small>{{$t('productPayment')}}</small>
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="node === 3" step="3" @click.native="checkAction(3)">
              <small>{{$t('endedProcess')}}</small>
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <mkt-comun ref="continue" :dataNode="cDataArray[0]" @nextNode="node = 2"> </mkt-comun>
              <v-row>
                <v-col cols="12" sm="12" align="end">
                  <v-btn rounded color="primary" class="btn" dark @click="$refs.continue.submit()">
                    {{$t('continue')}}
                    <v-icon right dark>mdi-arrow-right-bold-circle-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="2">
              <mkt-comun :dataNode="cDataArray[1]"> </mkt-comun>
              <v-row class="mt-1">
                <v-col cols="6" sm="6" align="center">
                  <v-btn outlined color="primary" class="btn" rounded @click="node = 1">
                    <v-icon left>mdi-arrow-left-bold-circle-outline</v-icon>
                    {{$t('previous')}}
                  </v-btn>
                </v-col>
                <v-col cols="6" sm="6" align="center">
                  <v-btn rounded color="primary" class="btn" dark @click="getData()">
                    {{$t('pay')}}
                    <v-icon right dark>mdi-arrow-right-bold-circle-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="3">
              <mkt-comun v-if="cDataArray.length === 3" :dataNode="cDataArray[2]"> </mkt-comun>
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
  watch: {
    cLanguage: {
      handler () {
        this.translateDatarray()
      }
    }
  },
  computed: {
    cDataArray () {
      return this.$store.getters.getDataArray
    },
    cLanguage () {
      return this.$store.getters.getLanguage
    }
  },
  data () {
    return {
      node: 1
    }
  },
  methods: {
    getData () {
      axios.get('http://www.mocky.io/v2/5e3d41272d00003f7ed95c09').then((response) => {
        let result = response.data
        result.node = 3
        // Sobreescribimos el atributo img
        result.img = 'mdi-certificate'
        let copyDataArray = [...this.cDataArray]
        if (copyDataArray.length === 3) {
          this.$set(copyDataArray, 2, result)
        } else {
          copyDataArray.push(result)
          this.$store.commit('setDataArray', copyDataArray)
        }
        this.node = 3
      })
    },
    translateDatarray (node) {
      this.$store.commit('setDataArray', this.cDataArray)
    },

    checkAction (node) {
      switch (node) {
        case 1:
          if (this.node > 1) {
            this.node = 1
          }
          break

        case 2:
          if (this.node > 2) {
            this.node = 2
          } else {
            this.$refs.continue.submit()
          }
          break

        case 3:
          if (this.node === 2) {
            this.getData()
          }
          break

        default:
          break
      }
    }
  }
}
</script>

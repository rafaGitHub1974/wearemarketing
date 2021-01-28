<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12">
        <v-icon v-if="dataNode && dataNode.img && dataNode.node === 3">{{dataNode.img}}</v-icon>
        <h2>{{ dataNode.title }}</h2>
        <p>{{ dataNode.text }}</p>
      </v-col>
    </v-row>

    <v-container fill-height fluid v-if="dataNode && dataNode.node == 1">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12">
          <v-text-field label="Nombre" v-model="customerData.name"></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12">
          <v-text-field label="Apellidos" v-model="customerData.surnames"></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-card class="mt-3" v-if="dataNode && dataNode.node == 2">
      <v-card-text v-if="dataNode && dataNode.node == 2" class="text--primary">
        <v-icon v-if="dataNode && dataNode.img && dataNode.node === 2">{{dataNode.img}}</v-icon>
          <h2 class="mt-4">Tarjeta de crédito</h2>
          <p class="mt-2">
            Se redigirá a una plataforma de pago. Se trata de un proceso seguro. Puede que la validación del pago tarde 24 horas en completarse.
          </p>
        <v-row>
          <v-col cols="6" sm="6" align="right">
            <img style="width: 40px;" src="../assets/visa.png" />
          </v-col>
          <v-col cols="6" sm="6" align="left">
            <img style="width: 40px;" src="../assets/mastercard.png" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'mktComun',
  props: {
    dataNode: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      customerData: {}
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 12px;
  }
</style>

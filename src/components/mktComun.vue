<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12">
        <v-icon v-if="dataNode && dataNode.img && dataNode.node === 3">{{dataNode.img}}</v-icon>
        <h2>{{ dataNode.title }}</h2>
        <p>{{ dataNode.text }}</p>
      </v-col>
    </v-row>

    <v-container fluid v-if="dataNode && dataNode.node == 1">
      <ValidationObserver ref="observer" v-slot="{ validate }">
        <form @submit.prevent="validate().then(submit)" >
          <!-- Vee-validate comprueba que el campo es requerido y con un máximo de 20 caracteres -->
          <!-- De forma predeterminada ValidationProvider contiene un tag span que muestra el mensaje de error si no se cumple la validación -->
          <ValidationProvider :name="$t('name')" rules="required|max:20" v-slot="{ errors, valid }">
            <v-row align="center" justify="center">
              <v-col cols="12" sm="12" md="4">
                <v-text-field :label="$t('name')" v-model="customerData.name" :error-messages="errors" :success="valid"></v-text-field>
              </v-col>
            </v-row>
          </ValidationProvider>
          <ValidationProvider :name="$t('surnames')" rules="required|max:20" v-slot="{ errors, valid }">
            <v-row align="center" justify="center">
              <v-col cols="12" sm="12" md="4">
                <v-text-field :label="$t('surnames')" v-model="customerData.surnames" :error-messages="errors" :success="valid"></v-text-field>
              </v-col>
            </v-row>
          </ValidationProvider>
        </form>
      </ValidationObserver>
    </v-container>

    <v-card class="mt-3" v-if="dataNode && dataNode.node == 2">
      <v-card-text v-if="dataNode && dataNode.node == 2" class="text--primary">
        <v-icon v-if="dataNode && dataNode.img && dataNode.node === 2">{{dataNode.img}}</v-icon>
          <h2 class="mt-4">{{$t('creditCard')}}</h2>
          <p class="mt-2 textCreditCard">{{$t('textCreditCard')}}</p>
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
import {ValidationObserver, ValidationProvider} from 'vee-validate'

export default {
  name: 'mktComun',
  components: {
    ValidationProvider,
    ValidationObserver
  },
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
  },
  methods: {
    async submit () {
      // Comprobamos con una llamada asíncrona si se cumplen las validaciones del formulario
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        this.$emit('nextNode')
      } else if (!isValid) {
        console.log('Error no se han cumplido las validaciones del formulario')
      }
    }
  }
}
</script>

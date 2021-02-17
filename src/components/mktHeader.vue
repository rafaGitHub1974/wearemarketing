<template>
  <v-container fluid ma-0 pa-0 fill-height>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          {{ $t('close') }}
        </v-btn>
      </template>
    </v-snackbar>

    <v-app-bar color="white">
      <v-app-bar-nav-icon @click="showMenu = !showMenu"></v-app-bar-nav-icon>
      <img class="mr-3" :src="require('../assets/logo.png')" height="30" />
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="showMenu" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon @click="$router.push({ name: 'mktStepper' })">{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content class="text-left">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-group
          v-for="item in itemsLanguaje"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
          active-class="deep-purple--text text--accent-4"
        >
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="text-left">
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in item.items" :key="child.title">
            <v-list-item-avatar @click="changeLanguage(child)">
              <v-img max-height="25" max-width="25" :src="getImagen(child.icon)"></v-img>
            </v-list-item-avatar>
            <v-list-item-content @click="changeLanguage(child)" class="text-left">
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { i18n } from '@/plugins/i18n'

export default {
  computed: {
    items () {
      return [
        { option: 1, title: this.$t('help'), icon: 'mdi-help-circle-outline' },
        { option: 2, title: this.$t('signIn'), icon: 'mdi-account-arrow-right' }]
    },
    itemsLanguaje () {
      return [
        {
          title: this.$t('language'),
          icon: 'mdi-google-translate',
          items: [
            {
              option: 1,
              title: this.$t('spanish'),
              textLanguage: 'spanish',
              // icon: 'mdi-flag-variant-outline',
              icon: require('@/assets/espana.png'),
              locale: 'es'
            },
            {
              option: 2,
              title: this.$t('english'),
              textLanguage: 'english',
              // icon: 'mdi-flag-variant-outline',
              icon: require('@/assets/inglaterra.png'),
              locale: 'en'
            },
            {
              option: 3,
              title: this.$t('french'),
              textLanguage: 'french',
              // icon: 'mdi-flag-variant-outline',
              icon: require('@/assets/francia.png'),
              locale: 'fr'
            }
          ]
        }
      ]
    }
  },
  data: () => ({
    snackbar: false,
    showMenu: false,
    group: null,
    text: '',
    timeout: 3000
  }),
  methods: {
    changeLanguage (item) {
      i18n.locale = item.locale
      this.showMenu = false
      this.text = this.$t('textChangeLanguageTo') + ' ' + this.$t(item.textLanguage).toLowerCase()
      this.snackbar = true
      this.$store.commit('setLanguage', item.locale)
    },
    // Muestra la imagen del producto
    getImagen (imagen) {
      const path = require('path')
      if (imagen) {
        return imagen
      } else {
        return path
      }
    }
  }
}
</script>

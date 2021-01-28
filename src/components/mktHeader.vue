<template>
  <v-container fluid ma-0 pa-0 fill-height>
    <v-app-bar color="white">
      <v-app-bar-nav-icon @click="showMenu = !showMenu"></v-app-bar-nav-icon>
      <img class="mr-3" :src="require('../assets/logo.png')" height="30"/>
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="showMenu" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon @click="$router.push({name: 'mktStepper'})">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content class="text-left">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

     <v-divider></v-divider>

      <v-list nav dense>
        <v-list-group v-for="item in itemsLanguaje" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action active-class="deep-purple--text text--accent-4">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="text-left">
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in item.items" :key="child.title">
            <v-list-item-icon>
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="text-left">
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    group: null,
    items: [
      { opcion: 1, title: 'Ayuda', icon: 'mdi-help-circle-outline' },
      { opcion: 2, title: 'Registrarse', icon: 'mdi-account-arrow-right' }
    ],
    itemsLanguaje: [
      {
        title: 'Idioma',
        icon: 'mdi-google-translate',
        items: [
          { opcion: 1, title: 'Español', icon: 'mdi-flag-variant-outline' },
          { opcion: 2, title: 'Inglés', icon: 'mdi-flag-variant-outline' },
          { opcion: 3, title: 'Francés', icon: 'mdi-flag-variant-outline' },
          { opcion: 3, title: 'Alemán', icon: 'mdi-flag-variant-outline' }
        ]
      }
    ]
  })
}
</script>

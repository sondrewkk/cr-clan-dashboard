<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer" 
      app
      clipped
      :width="!appBarVisible ? 0 : 256"
    >
      <v-list 
        dense
        nav
      >
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      :value="appBarVisible"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      appBarVisible: false,
      menuItems: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'person', text: 'Me', route: '/user' },
        { icon: 'group', text: 'Clan', route: '/clan' },
        { icon: 'device_hub', text: 'Family', route: '/family' },
        { icon: 'insert_chart_outlined', text: 'Reports', route: '/reports' },
        { icon: 'settings', text: 'Settings', route: '/settings' }
      ]
    }),
    watch: {
      $route (to, from) {
        const notVisibleOnRoutes = ['login', 'register']
        const path = to.path.split('/')[1]
        const pathExists = notVisibleOnRoutes.indexOf(path) >= 0
        this.appBarVisible = !pathExists
      }
    },
    created () {
      this.$vuetify.theme.dark = true
    },
    methods: {
      async logout () {
        try {
          await this.$store.dispatch('userAuthentication/logout')
          this.$router.push('/login')
        } catch (err) { console.error(err) }
      }
    }
  }
</script>

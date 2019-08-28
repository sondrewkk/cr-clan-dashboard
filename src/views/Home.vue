<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer" 
      app
      clipped
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
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-toolbar-title>Application</v-toolbar-title> -->
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    data: () => ({
      drawer: null,
      menuItems: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'person', text: 'Me', route: '/user' },
        { icon: 'group', text: 'Clan', route: '/clan' },
        { icon: 'device_hub', text: 'Family', route: '/family' },
        { icon: 'insert_chart_outlined', text: 'Reports', route: '/reports' },
        { icon: 'settings', text: 'Settings', route: '/settings' }
      ]
    }),
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

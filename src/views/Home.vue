<template>
  <v-app class="grey lighten-4">
    <navbar />
    <v-content class="mx-4 mb-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    name: 'CRCLANDASHBOARD',
    components: {
      Navbar
    },
    data () {
      return {
      //
      }
    }
  }
</script>

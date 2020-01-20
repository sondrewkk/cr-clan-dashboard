<template>
  <v-container>
    <user-not-verified v-if="!isVerified" />
    <user-verified v-else />
  </v-container>
</template>

<script>
  import UserNotVerified from '../components/user-components/UserNotVerified'
  import UserVerified from '../components/user-components/UserVerified'

  export default {
    components: {
      UserNotVerified,
      UserVerified
    },
    computed: {
      isVerified: function () { return this.$store.getters['user/isVerified'] } 
    }
  }
</script>

<style>

</style>


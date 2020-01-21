<template>
  <v-container>
    <clan-not-added v-if="!clanExist" />
    <clan-added v-else />
  </v-container>
</template>

<script>
// Når bruker kommer inn på dette viewet må man sjekke om klanen er registrert
// Hvis den er registert skal en komponent med innhold om klanen vises.
// Er den ikke registert skal en kompoenet for registrering av klanen vises.

  import ClanNotAdded from '../components/clan-components/ClanNotAdded'
  import ClanAdded from '../components/clan-components/ClanAdded'
  import clanApi from '../api/clan'

  export default {
    components: {
      ClanNotAdded,
      ClanAdded
    },
    data: () => ({
      clanExist: false
    }),
    created () {
      this.isClanExist()
    },
    methods: {
      async isClanExist () {
        console.log("Checking if clan exist")
        const clanTag = this.$store.getters['user/clanTag']

        if (clanTag) {
          console.log("Getting clan from api")
          const clan = await clanApi.getClan(clanTag)
          

          if (clan) {
            console.log("Clan exist")
            this.clanExist = true
          }
        }
      }
    }
  }
</script>

<style>

</style>



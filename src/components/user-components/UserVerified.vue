<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-layout column>
          <h3>{{ player.name }}</h3>
          <p>#{{ player.tag }}</p>
          <v-layout row>
            <span>{{ player.trophies }} / {{ player.stats.maxTrophies }} PB</span>
            <v-img 
              class=" ml-2" 
              src="https://royaleapi.com/static/img/ui/trophy.png" 
              max-height="22px" 
              max-width="22px" 
              aspect-ratio="1"
            />
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import playerApi from '../../api/player'

  export default {
    data () {
      return {
        player: {}
      }
    },
    async created () {
      try {
        const tag = this.$store.getters['user/tag']
        const response = await playerApi.profile(tag)
        this.player = response.data

      } catch (err) { 
        console.log(err)
      }
      
    }
  }
</script>

<style>

</style>

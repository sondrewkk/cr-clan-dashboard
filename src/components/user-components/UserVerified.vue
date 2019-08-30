<template>
  <v-container fluid>
    <!-- <v-layout 
      v-if="player" 
      row
    >
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
    </v-layout> -->
    <v-row v-if="player">
      <v-col 
        cols="12"
        align="start"
        justify="start"
      >
        <h1>{{ player.name }}</h1>
        <p class="mb-0">#{{ player.tag }}</p>
        <v-row no-gutters>
          <p>{{ player.trophies }} / {{ player.stats.maxTrophies }} PB</p>
          <v-img 
            class=" ml-2" 
            src="https://royaleapi.com/static/img/ui/trophy.png" 
            max-height="22px" 
            max-width="22px" 
            aspect-ratio="1"
          />
        </v-row>
        <v-divider />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import playerApi from '../../api/player'

  export default {
    data: () => ({
      player: null,
      chests: null
    }),
    created () {
      this.fetchPlayerInfo()
    },
    methods: {
      async fetchPlayerInfo () {
        try {
          const tag = this.$store.getters['user/tag']
          const response = await playerApi.profile(tag)
          this.player = response.data
        } catch (err) { 
          console.log(err)
        }
      }
    }
  }
</script>

<style>

</style>

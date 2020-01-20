<template>
  <v-container>
    <v-row v-if="player">
      <v-col 
        cols="12"
        align="start"
        justify="start"
      >
        <h1>
          {{ player.name }}
        </h1>

        <p class="mb-0">
          #{{ player.tag }} 
        </p>

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
    <v-row v-if="upcomingChests && specialChests">
      <v-col cols="12">
        <h3>Chest Cycle</h3>
      </v-col>
        
      <v-col 
        v-for="(chestType, index) in upcomingChests"
        :key="index"
      >
        <v-img 
          v-if="chestType !== 'golden'" 
          :src="`https://royaleapi.github.io/cr-api-assets/chests/chest-${chestType}.png`"
          max-height="35px" 
          max-width="35px"
        />  
        <v-chip
          small
          class="ml-4 mt-n6"
          light
        >
          {{ index + 1 }}
        </v-chip> 
      </v-col>
 
      <v-col
        v-for="specialChest in specialChests"
        :key="specialChest[0]"
        
      >
        <v-img 
          v-if="specialChest[1] > 10"
          :src="`https://royaleapi.github.io/cr-api-assets/chests/chest-${specialChest[0]}.png`"
          max-height="35px" 
          max-width="35px"
        />
        <v-chip
          v-if="specialChest[1] > 10"
          small
          class="ml-4 mt-n6"
          light
        >
          {{ specialChest[1] + 1 }}
        </v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import playerApi from '../../api/player'

  export default {
    data: () => ({
      player: null,
      upcomingChests: null,
      specialChests: null
    }),
    created () {
      this.fetchPlayerInfo()
    },
    methods: {
      async fetchPlayerInfo () {
        try {
          const tag = this.$store.getters['user/tag']
          const profileResponse = await playerApi.profile(tag)
          const chestsResponse = await playerApi.chests(tag)
          
          let upcomingChests = chestsResponse.data.upcoming
          let specialChests = []

          // Fix for chest name golden
          for (let chest in upcomingChests) {
            if (upcomingChests[chest] === 'golden') {
              upcomingChests[chest] = 'gold'
            }
          }
          
          // Delete to be able to extract only special chests from response
          delete chestsResponse.data.upcoming
          delete chestsResponse.data._cacheTime

          // Put all specialchests into an sortable array
          for (let specialChest in chestsResponse.data) {
            specialChests.push([specialChest, chestsResponse.data[specialChest]])
          }

          // Sort chest
          specialChests.sort((a, b) => {
            return a[1] - b[1]
          })

          this.player = profileResponse.data
          this.upcomingChests = upcomingChests
          this.specialChests = specialChests

        } catch (err) { 
          console.log(err)
        }
      }
    }
  }
</script>

<style>

</style>

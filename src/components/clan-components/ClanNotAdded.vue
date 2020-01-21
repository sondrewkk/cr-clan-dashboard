<template>
  <v-container>
    <v-form
      v-if="role >= leaderRole"
      ref="form"
      v-model="valid"
    >
      <v-text-field
        v-model="tag"
        :rules="tagRules"
        label="Clan tag"
        required
      />
      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4"
        @click="registerClan"
      >
        Add clan
      </v-btn>
    </v-form>
    <p v-else>Please contact your clan leader. The leader need to register the clan before any information is available</p>
  </v-container>
</template>

<script>
  import playerApi from '../../api/player'
  import Role from '../../_helpers/role'

  export default {
    data: () => ({
      valid: true,
      role: Role.Member,
      leaderRole : Role.Leader,
      tag: '',
      tagRules: [
        v => !!v || 'Clan tag is required',
        v => /^[0289PYLQGRJCUV]+$/.test(v) || 'The clan tag contains invalid characters'
      ]
    }),
    created () {
      console.log("Clan does not exist. Creating registration form")
      // Før siden lastes må rollen til brukeren sjekkes.
      // Hvis han er leder/admin skal registrerings formen vises.
      // Ellers skal man få opp en teskt at leder må registrer klanen før det er mulig å få opp info om den.
      const userRole = this.$store.getters['user/role']
      this.role = Role[userRole]

      console.log("userRole: " + userRole + " this role: " + this.role)
      
    },
    methods: {
      async registerClan () {
        try {
          const { tag } = this
          await this.$store.dispatch('user/verifyTag', { tag })

        } catch (err) { console.error(err) }
      }
    }
  }
</script>

<style>

</style>

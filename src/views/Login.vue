<template>
  <v-app dark>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <h1 class="text-xs-center mb-3">
              Login
            </h1>
            <v-form>
              <v-text-field
                v-model="email"
                prepend-icon="person"
                name="email"
                label="Email"
                type="text"
              />
              <v-text-field
                id="password"
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              />
            </v-form>
            <v-btn
              color="primary"
              @click="login"
            >
              Login
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login () {
        try {
          const { email, password } = this
          const loginSuccessful = await this.$store.dispatch('userAuthentication/login', { email, password })
          
          if (loginSuccessful) {
            // Check if user has verified the player profile, if not go to player route
            const isVerified = this.$store.getters['user/isVerified']

            if (!isVerified) {
              this.$router.push('/user')
            } else {
              const redirect = this.$router.currentRoute.query.redirect
                          
              if (redirect) {
                this.$router.push(`${redirect}`)
              } else {
                this.$router.push('/')
              }
            }
          }
        } catch (err) { console.error(err) }
      }
    }
  }
</script>

<style>

</style>

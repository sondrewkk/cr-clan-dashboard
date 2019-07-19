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
      login () {
        const { email, password } = this
        this.$store.dispatch('user/login', { email, password })
          .then(loggedIn => {
              console.log(loggedIn)
            })
          .catch(err => console.err(err))
      }
    }
  }
</script>

<style>

</style>

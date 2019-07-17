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
              Register
            </h1>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="username"
                prepend-icon="person_outline"
                name="username"
                label="Username"
                type="text"
                :rules="usernameRules"
                required
              />
              <v-text-field
                v-model="email"
                prepend-icon="email"
                name="email"
                label="Email"
                type="text"
                :rules="emailRules"
                required
              />
              <v-text-field
                id="password"
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                :rules="passwordRules"
                required
              />
              <v-text-field
                id="password_confirmation"
                v-model="password_confirmation"
                prepend-icon="lock"
                name="password_confirmation"
                label="Re-type Password"
                type="password"
                :rules="passwordRules"
                required
              />
            </v-form>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-3"
              @click="submit"
            >
              Register
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        valid: true,
        username: '',
        usernameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@+/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        password_confirmation: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Password must be greater than 6 characters'
        ]
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          console.log(`${this.name},${this.email},${this.password}`)
        }
      }
    }
  }
</script>

<style>

</style>

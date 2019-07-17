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
            <v-form>
              <v-text-field
                prepend-icon="person_outline"
                name="username"
                label="Username"
                type="text"
              />
              <v-text-field
                prepend-icon="email"
                name="email"
                label="Email"
                type="text"
              />
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              />
              <v-text-field
                id="retype-password"
                prepend-icon="lock"
                name="re-type-password"
                label="Re-type Password"
                type="password"
              />
            </v-form>
            <v-btn color="primary">
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

  }
</script>

<style>

</style>

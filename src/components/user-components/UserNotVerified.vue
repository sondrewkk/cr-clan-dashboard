<template>
  <v-layout 
    column 
    align-center
  >
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-text-field
        v-model="tag"
        :rules="tagRules"
        label="Tag"
        required
      />
      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4"
        @click="verifyTag"
      >
        Verify
      </v-btn>
    </v-form>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      tag: '',
      tagRules: [
        v => !!v || 'Tag is required',
        v => /^[0289PYLQGRJCUV]+$/.test(v) || 'Your tag contains invalid characters'
      ]
    }),
    methods: {
      async verifyTag () {
        try {
          const { tag } = this
          await this.$store.dispatch('user/verifyTag', tag)

        } catch (err) { console.error(err) }
      }
    }
  }
</script>

<style>

</style>

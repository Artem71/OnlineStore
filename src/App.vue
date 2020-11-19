<template>
  <v-app>
   <navbar />
   <template v-if="error">
    <v-snackbar
      @input="closeError"
      :value="true"
      color="pink"
    >
        {{ error }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="dark"
            text
            v-bind="attrs"
            @click.native="closeError"
          >
            Close
        </v-btn>
      </template>
    </v-snackbar>
   </template>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  data: () => ({
    snackbar: false
  }),
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    }
  },
  components: {
    Navbar
  }
}
</script>

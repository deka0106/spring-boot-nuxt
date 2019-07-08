<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  layout: 'empty'
})
export default class extends Vue {
  private head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return { title }
  }

  @Prop({ type: Object, required: true })
  error!: { statusCode: number }

  pageNotFound = '404 Not Found'
  otherError = 'An error occurred'
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

<template>
  <v-row>
    <v-col>
      <v-row justify="center">
        <p class="display-4">
          {{ error.statusCode }}
        </p>
      </v-row>
      <v-row justify="center">
        <p class="headline">
          {{ error.message }}
        </p>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { NuxtError } from '@nuxt/types'

export default defineComponent({
  props: {
    error: {
      type: Object as PropType<NuxtError>,
      required: true,
    },
  },
})
</script>

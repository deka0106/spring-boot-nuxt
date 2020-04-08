<template>
  <div>
    {{ message }}
    <logo />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from '@vue/composition-api'
import Logo from '@/components/Logo.vue'

export default defineComponent({
  components: {
    Logo,
  },
  setup(_, { root }) {
    const message = ref<string>('')
    onBeforeMount(async () => {
      message.value = (await root.$axios.get(`/api/hello`)).data
    })
    return { message }
  },
})
</script>

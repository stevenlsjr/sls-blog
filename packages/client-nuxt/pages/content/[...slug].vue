<template>
  <div></div>
</template>

<script lang="ts">


export default defineComponent({
  async setup() {
    const route = useRoute();
    const nuxt = useNuxtApp();
    globalThis.route = route
  },
});
</script>

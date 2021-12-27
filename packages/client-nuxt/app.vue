<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  async setup() {
    provideApolloClient();
  },
});
</script>

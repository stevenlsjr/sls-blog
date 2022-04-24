<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setupApolloClient } from "./composables/provideApolloClient";
export default defineComponent({
  async setup() {
    setupApolloClient();
  },
});
</script>

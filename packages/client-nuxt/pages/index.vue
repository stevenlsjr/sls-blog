<template>
  <div>
    <h1>My Wagtail/nuxt blog app</h1>
    <div>
      <p>go to pages: <nuxt-link class="text-blue-700" to="/pages/">pages</nuxt-link></p>
    </div>
  </div>
</template>

<script lang="ts">

export default defineComponent({
  setup() {
    const router = useRouter();
    router.replace('/pages/')
    return {};
  },
});
</script>

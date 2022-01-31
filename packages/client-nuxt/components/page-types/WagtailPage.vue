<template>
  <component v-if="pageType" :is="pageType" :page="page"></component>
  <div v-else>Unknown page type: {{ pageTypeName }}</div>
</template>

<script lang="ts">
import { PropType, defineComponent, Component } from "vue";
import { PageDetailQuery } from "../../generated/gql";

const pageTypeLookup = new Map<string, Component>([
  [
    "BlogLandingPage",
    defineAsyncComponent(() => import("./BlogLandingPage.vue")),
  ],
  ["BlogPage", defineAsyncComponent(() => import("./BlogPage.vue"))],
]);
export default defineComponent({
  props: {
    page: { required: true, type: Object as PropType<PageDetailQuery["page"]> },
  },
  setup(props) {
    const foo = 1;
    const pageTypeName = computed(() => props.page.__typename);
    const pageType = computed(() => pageTypeLookup.get(pageTypeName.value));
    return { pageType, pageTypeName };
  },
});
</script>

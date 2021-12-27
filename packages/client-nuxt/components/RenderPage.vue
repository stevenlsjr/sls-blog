<template>
  <component :is="pageComponent" :page="page"> </component>
</template>

<script lang="ts">
import { defineComponent, PropType, Component } from "vue";
import { PageDetailQuery } from "../generated/gql";
import BlogLandingPageVue from "./page-types/BlogLandingPage.vue";
import BlogPageVue from "./page-types/BlogPage.vue";
import WagtailPageVue from "./page-types/WagtailPage.vue";

export interface Props {
  page: any;
}

const pageTypeLookup: Record<string, Component> = {
  BlogLandingPage: BlogLandingPageVue,
  BlogPage: BlogPageVue,
};

export default defineComponent({
  props: {
    page: {
      type: Object as PropType<PageDetailQuery["page"]>,
      required: true,
    },
  },
  setup({ page }) {
    let pageComponent = pageTypeLookup[page.__typename] ?? WagtailPageVue;
    return { page, pageComponent };
  },
});
</script>

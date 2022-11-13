<template>
  <div v-if="loading">Loading</div>
  <div v-else-if="error">Error</div>
  <div v-else-if="notFound"><not-found></not-found></div>
  <div v-else-if="page">
    <wagtail-page :page="page"></wagtail-page>
  </div>
  <div v-else>
    <h3>Error: cannot load page</h3>
    <pre>
      page: {{ page }}
      error: {{ error }}
      loading: {{ loading }}

      notFund: {{ notFound }}
    </pre>
  </div>
</template>

<script lang="ts">
import { isNumericLiteral } from "typescript";
import { defineComponent, PropType, Component } from "vue";
import { PageDetailQuery } from "../generated/gql";
import WagtailPage from "./page-types/WagtailPage.vue";
import isNil  from "lodash/isNil";

export default defineComponent({
  props: {
    page: {
      type: Object as PropType<PageDetailQuery["page"] | undefined>,
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Object,
      required: false,
    },
  },
  setup(props) {
    const { page, loading, error } = props;
    const notFound = computed(() => {
      return isNil(page) && !(loading || error);
    });
    return { notFound };
  },
  components: { WagtailPage },
});
</script>

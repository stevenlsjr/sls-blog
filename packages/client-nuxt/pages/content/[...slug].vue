<template>
  <div>
    <nuxt-layout name="default">
      <template #breadcrumbs>
        <div v-if="parentPage">
          <nuxt-link :to="'/content' + parentPage.urlPath">up</nuxt-link>
        </div>
      </template>

      <div v-if="loading">Loading</div>
      <div v-else-if="error">Error</div>
      <div v-else-if="!page"><not-found></not-found></div>
      <div v-else>
        <render-page :page="page"></render-page>
      </div>
    </nuxt-layout>
  </div>
</template>

<script lang="ts">
import { Ref } from "vue";
import { useApolloClient, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { PageDetailDocument } from "~~/generated/gql";

export default defineComponent({
  layout: null,
  async setup() {
    const route = useRoute();
    const router = useRouter();
    const pagePath = route.path.replace(/^\/content\//, "/");

    const { loading, error, result } = useQuery(PageDetailDocument, {
      url: pagePath,
    });

    const page = computed(() => {
      if (!loading.value) {
        return result.value.page ?? null;
      } else {
        return null;
      }
    });

    const parentPage = computed(() => {
      if (page.value && page.value.parent) {
        return page.value.parent;
      } else {
        return null;
      }
    });

    return {
      page,
      parentPage,
      loading,
      error,
    };
  },
});
</script>

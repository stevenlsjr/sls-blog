<template>
  <div>
    <div v-if="parentPage">
      <nuxt-link :to="parentPageLink">up</nuxt-link>
    </div>

    <render-page :page="page" :loading="loading" :error="error"></render-page>
  </div>
</template>

<script lang="ts">
import { Ref } from "vue";
import { useApolloClient, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { PageDetailDocument } from "~/generated/gql";
import RenderPage from "~~/components/RenderPage.vue";

export default defineComponent({
  async setup() {
    const route = useRoute();
    const router = useRouter();

    const pagePath = route.path.replace(/^\/pages\//, "/");


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

    const parentPageLink = computed(()=>{
      return parentPage.value?.url ?? '/'
    });

    return {
      page,
      parentPage,
      loading,
      error,
      parentPageLink
    };
  },
  components: {
    RenderPage,
  },
});
</script>

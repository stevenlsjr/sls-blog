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
import { PreviewPageDocument } from "../generated/gql";
import { useQuery } from "@vue/apollo-composable";

function usePreviewParams() {
  const route = useRoute();
  const tokenParam = route.query.token || undefined;
  let contentTypeParam = route.query.content_type || undefined;
  let token: string | undefined;
  let contentType: string | undefined;
  if (Array.isArray(tokenParam)) {
    token = tokenParam[0];
  } else {
    token = tokenParam;
  }

  if (Array.isArray(contentTypeParam)) {
    contentType = contentTypeParam[0];
  } else {
    contentType = contentTypeParam;
  }

  return { params: { token, contentType } };
}

export default defineComponent({
  setup() {
    const route = useRoute();

    const { params } = usePreviewParams();

    const { result, loading, error } = useQuery(PreviewPageDocument, {
      ...params,
    });

    const page = computed(() => {
      if (!loading.value) {
        return result.value.previewPage ?? null;
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

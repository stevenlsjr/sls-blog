<template>
  <div>
    <h1>{{ page.title }}</h1>
    <ul v-if="childPages.length > 0">
      <li v-for="child in childPages">
        <nuxt-link :to="'/pages' + child.urlPath">
          <div>
            {{ child.title }}
          </div>
        </nuxt-link>
      </li>
    </ul>
    <div v-else>Loading Pages</div>
  </div>
</template>

<script lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { PropType, defineComponent, computed } from "vue";
import { PageDetailQuery, ListPageChildrenDocument } from "../../generated/gql";

export type PageType = Extract<
  PageDetailQuery["page"],
  { __typename?: "BlogLandingPage" }
>;

export default defineComponent({
  props: {
    page: { required: true, type: Object as PropType<PageType> },
  },
  setup(props) {
    const {page} = props;
    const { loading, error, result } = useQuery(ListPageChildrenDocument, {
      pageId: Number.parseInt(page.id, 10),
    });

    const childPages = computed(() => {
      if (loading.value) {
        return [];
      }

      return result.value.page?.children ?? [];
    });

    return { page, loading, error, childPages };
  },
});
</script>

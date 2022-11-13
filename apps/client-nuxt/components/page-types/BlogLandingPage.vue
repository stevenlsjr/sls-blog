<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <h1 class="title">{{ page.title }}</h1>
      </div>
    </section>
    <div class="container">
      <ul v-if="childPages.length > 0">
        <li v-for="child in childPages">
          <section class="columns section">
            <div class="column">
              <nuxt-link :to="'/pages' + child.urlPath">
                <div class="title">
                  {{ child.title }}
                </div>
                <p v-if="(child as any).intro">
                  {{(child as any).intro}}
                </p>
              </nuxt-link>
            </div>
          </section>
        </li>
      </ul>
      <div v-else>No child Pages</div>
    </div>
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
    const { page } = props;
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

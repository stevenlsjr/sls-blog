<template>
  <div>
    <h1>BlogPage: {{ page.__typename }}</h1>
    <article>
      <h1>{{page.title}}</h1>
      <section>
        <code>
          <pre>
            {{ page.body }}
          </pre>
        </code>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { PageDetailQuery } from "../../generated/gql";

export type PageType = Extract<
  PageDetailQuery["page"],
  { __typename?: "BlogPage" }
>;

export default defineComponent({
  props: {
    page: { required: true, type: Object as PropType<PageType> },
  },
  setup({ page }) {
    return { page };
  },
});
</script>

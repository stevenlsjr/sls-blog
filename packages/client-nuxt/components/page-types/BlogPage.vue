<template>
  <div class="m-4">
  
    <h1>BlogPage: {{ page.__typename }}</h1>
    <article>
      <h1>{{page.title}}</h1>

      <section v-for="block in page.body" :key="block.id">
        <streaming-block :block="block"></streaming-block>
      </section>
 
    </article>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { PageDetailQuery } from "../../generated/gql";
import StreamingBlock from "../blocks/StreamingBlock.vue";

export type PageType = Extract<
  PageDetailQuery["page"],
  { __typename?: "BlogPage" }
>;

export default defineComponent({
    props: {
        page: { required: true, type: Object as PropType<PageType> },
    },
    setup(props) {
    },
    components: { StreamingBlock }
});
</script>

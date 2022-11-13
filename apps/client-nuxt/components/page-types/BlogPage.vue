<template>
  <article class="container">
    <section class="hero is-primary">
      <div class="hero-body ">
        <h1 class="title">{{ page.title }}</h1>
      </div>
    </section>
    <section v-for="block in page.body" :key="block.id" class="section columns">
      <streaming-block :block="block"></streaming-block>
    </section>
  </article>
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
  setup(props) {},
  components: { StreamingBlock },
});
</script>

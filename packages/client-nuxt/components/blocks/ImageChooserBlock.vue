<template>
  <div class="columns is-centered">
    <picture class="column is-two-thirds">
      <img :srcset="block.image.srcSet" :alt="block.image.title" />
    </picture>
  </div>
</template>

<script lang="ts">
import { blockProp } from "~~/lib/types";
import { ImageChooserBlock } from "~~/generated/gql";

export default defineComponent({
  props: {
    block: { ...blockProp<ImageChooserBlock>() },
  },
  setup(props) {},
});
</script>

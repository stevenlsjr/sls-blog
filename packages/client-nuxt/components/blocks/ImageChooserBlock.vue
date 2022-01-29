<template>
  <div>
    <picture>
      <img :srcset="block.image.srcSet" :alt="block.image.title">
    </picture>

  </div>
</template>

<script lang="ts">
import { blockProp } from "~~/lib/types";
import { ImageChooserBlock,  } from "~~/generated/gql";

export default defineComponent({
  props: {
    block: { ...blockProp<ImageChooserBlock>() },
  },
  setup({ block }) {
    console.log(block)
  },
});
</script>

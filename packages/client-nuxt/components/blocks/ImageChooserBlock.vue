<template>
  <div>
    <picture >
      <img class="max-h-1/2 max-w-1/3"  :srcset="block.image.srcSet" :alt="block.image.title">
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
  setup(props) {
  },
});
</script>

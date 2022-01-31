<template>
  <div v-html="block.value"></div>
</template>

<script lang="ts">
import { blockProp } from "~~/lib/types";
import { RichTextBlock } from "~~/generated/gql";
import { PropType } from "vue";

export default defineComponent({
  props: {
    block: {...blockProp<RichTextBlock>()},
  },
  setup() {

  }
});
</script>

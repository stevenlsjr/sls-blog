<template>
  <div>
    <h3>Block type {{ block.blockType }} does not exist</h3>
    <pre>{{ block.rawValue }}</pre>
  </div>
</template>

<script lang="ts">
import { blockProp } from "~~/lib/types";

export default defineComponent({
  props: {
    block: blockProp(),
  },
  setup(props) {
    return {}
  },
});
</script>

<template>
  <div>Unknown page type: {{ page.__typename }}</div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { PageDetailQuery } from "../../generated/gql";

export default defineComponent({
  props: {
    page: { required: true, type: Object as PropType<PageDetailQuery["page"]> },
  },
  setup({ page }) {
    return { page };
  },
});
</script>

<template>
  <div>
    <div v-if="loading">Loading</div>
    <code v-if="error">
      <pre>
        {{ error }}
      </pre>
    </code>
    <code v-else>
      <pre>
        {{ result }}
      </pre>
    </code>
  </div>
</template>

<script lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ListPagesDocument } from "../generated/gql";

export default defineComponent({
  setup() {
    const { result, loading, error } = useQuery(ListPagesDocument);

    return {
      result,
      loading,
      error,
    };
  },
});
</script>

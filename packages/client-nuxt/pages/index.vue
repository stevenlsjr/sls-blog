<template>
  <div>
    <h1>hello</h1>
  </div>
</template>

<script lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default defineComponent({
  setup() {
    const {result} = useQuery(gql`
      query Query {
        pages {
          title
          url
          seoTitle
          slug
          ... on BlogPage {
            intro
          }
        }
      }
    `);

    return {
      result
    }
  },
});
</script>

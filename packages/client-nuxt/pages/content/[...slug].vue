<template>
  <div>
    <p>result {{ result }}</p>
    <p>error {{ error }}</p>
    <p>loading {{ loading }}</p>


  </div>
</template>

<script lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default defineComponent({
  async setup() {
    const route = useRoute();
    const pagePath = route.path.replace(/^\/content\//, "/");
    console.log(pagePath)

    const { result, loading, error } = useQuery(
      gql`
        query Query($pagePath: String) {
          page(urlPath: $pagePath) {
            id
          }
        }
      `,
      {
        pagePath,
      }
    );
    if ((result.value ?? false) && result.value.page === null){
      console.log('page not found ', pagePath)
    } else {
      console.log(result, loading.value)
    }
    return {
      result,
      loading,
      error,
    }
  },
});
</script>

<template>
  <article>
    <h1>Article {{ route.params.slug }} </h1>
    <pre>jwt: {{ jwt }}</pre>
  </article>
</template>

<script lang="ts">

import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default defineComponent({
  name: "ArticleDetail",
  setup() {
    console.log("hello");
    const publicPassword = "tryguest";
    const route = useRoute();

    return { route };
  },
});
</script>

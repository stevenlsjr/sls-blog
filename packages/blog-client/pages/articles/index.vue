<template>
  <article>
    <h1>TODO: article list</h1>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ComponentOptions } from 'vue';
import type {} from '@nuxt/types'
import type {} from '@nuxtjs/apollo'

@Component({
  async fetch(this: ArticleIndex) {
  },
})
export default class ArticleIndex extends Vue {
  articles: any[] = [];
}
</script>

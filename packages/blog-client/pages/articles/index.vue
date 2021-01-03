<template>
  <section>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <h2>{{ article.title }}</h2>
        <h3>{{ article.subtitle }}</h3>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ComponentOptions } from 'vue';
import type {} from '@nuxt/types';
import type {} from '@nuxtjs/apollo';
import type {} from 'vue-apollo';

import articleBySlug from '~/queries/article-list.gql';

function queryAsInt(param: string | (string | null)[] | undefined) {
  if (!param) {
    return undefined;
  }
  let lastVal: string | undefined;
  if (Array.isArray(param)) {
    lastVal = param.reduce(
      (previous, current) => current || previous,
      undefined as string | undefined
    );
  } else {
    lastVal = param;
  }
  if (!lastVal) {
    return undefined;
  }
  const res = parseInt(lastVal, 10);
  return !Number.isNaN(res) ? res : undefined;
}

@Component({
  asyncData(ctx) {
    const pageStart = queryAsInt(ctx.query.start) || 0;
    const pageLimit = queryAsInt(ctx.query.limit) || 10;
    console.log(pageStart, pageLimit)

    return { pageStart, pageLimit };
  },
  apollo: {
    articles: {
      query: articleBySlug,
      variables(this: ArticleIndex) {
        return {
          start: this.pageStart,
          limit: this.pageLimit,
        };
      },
    },
  },
})
export default class ArticleIndex extends Vue {
  pageStart: number = 0;
  pageLimit: number = 10;
  articles!: any[];
}
</script>

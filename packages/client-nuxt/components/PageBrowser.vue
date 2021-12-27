<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {Page} from '../generated/gql'

export type PageListing = Pick<Page,
 '__typename' |
 'id' |
 'urlPath' | 
 'title' |
 'seoTitle'
>

export default defineComponent({
  props: {
    pages: { type: Array as PropType<Partial<PageListing>[] },
  },
  setup({pages}) {

  }
});
</script>

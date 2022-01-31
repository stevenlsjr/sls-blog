<template>
  <component :is="blockComponent" :block="block"></component>
</template>

<script lang="ts">
import { StreamFieldInterface } from "generated/gql";
import { PropType } from "vue";
import DefaultBlockVue from "./DefaultBlock.vue";
import RichTextBlock from "./RichTextBlock.vue";
import ImageChooserBlock from "./ImageChooserBlock.vue";

const blockMap = {
  RichTextBlock: RichTextBlock,
  ImageChooserBlock: ImageChooserBlock
}

const defaultComponent = DefaultBlockVue;

export default defineComponent({
  props: {
    block: { type: Object as PropType<StreamFieldInterface> },
  },
  setup(props) {
    const blockComponent = blockMap[props.block.blockType] || defaultComponent;
    return {
      blockComponent
    }
  },
});
</script>

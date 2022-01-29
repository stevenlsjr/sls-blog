import { StreamFieldInterface } from "generated/gql";
import { PropType } from "vue";

export interface BlockPropArgs<T extends StreamFieldInterface> {
  required: true;
  type: PropType<T>;
}

export function blockProp<T extends StreamFieldInterface>(): BlockPropArgs<T> {
  return { required: true, type: Object as PropType<T> };
}

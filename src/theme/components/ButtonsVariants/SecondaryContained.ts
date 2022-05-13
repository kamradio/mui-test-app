import {secondary} from "../../palette-blocks";

export const SecondaryContained = {
  props: {
    color: 'secondary' as any,
    variant: 'contained' as any
  },
  style: {
    background: secondary.light,
    color: secondary.main,
  }
}

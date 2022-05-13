import {base} from "../../palette-blocks";
import {palette} from "../../palette";

export const BaseContained = {
  props: {
    color: 'base' as any,
    variant: 'contained' as any
  },
  style: {
    background: base.light,
    color: base.main,
    '&:hover': {
      background: base.hover
    },
    '&:active': {
      background: base.active
    }
  }
}

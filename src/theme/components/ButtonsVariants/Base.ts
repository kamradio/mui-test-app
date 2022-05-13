import {base} from "../../palette-blocks";

export const Base = {
  props: {
    color: 'base' as any
  },
  style: {
    color: base.main,
    '&:hover': {
      background: base.hover
    },
    '&:active': {
      background: base.active
    },
  }
}

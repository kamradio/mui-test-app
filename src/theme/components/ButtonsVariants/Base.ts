import {base} from "../../palette-blocks";
import {palette} from "../../palette";

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
    '&:disabled': {
      background: base.light,
      color: base.main,
      opacity: palette.action?.disabledOpacity
    }
  }
}

import {primary} from "../../palette-blocks";
import {palette} from "../../palette";

export const Primary = {
  props: {
    color: 'primary' as any
  },
  style: {
    '&:hover': {
      background: primary.hover,
      color: primary.contrastText
    },
    '&:active': {
      background: primary.active,
      color: primary.contrastText
    },
    '&:disabled': {
      background: primary.light,
      color: primary.main,
      opacity: palette.action?.disabledOpacity
    }
  }
}

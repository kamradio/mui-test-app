import {success} from "../../palette-blocks";

export const SuccessContained = {
  props: {
    color: 'success' as any,
    variant: 'contained' as any
  },
  style: {
    background: success.light,
    color: success.main,
    '&:hover': {
      background: success.hover
    },
    '&:active': {
      background: success.active
    },
  }
}

import {success} from "../../palette-blocks";

export const Success = {
  props: {
    color: 'success' as any
  },
  style: {
    '&:hover': {
      background: success.hover
    },
    '&:active': {
      background: success.active
    },
  }
}

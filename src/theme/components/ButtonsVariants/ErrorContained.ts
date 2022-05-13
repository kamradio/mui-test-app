import {error} from "../../palette-blocks";

export const ErrorContained = {
  props: {
    color: 'error' as any,
    variant: 'contained' as any
  },
  style: {
    background: error.light,
    color: error.main,
    '&:hover': {
      background: error.hover
    },
    '&:active': {
      background: error.active
    },
  }
}

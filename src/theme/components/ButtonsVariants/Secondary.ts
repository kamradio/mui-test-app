import {secondary} from "../../palette-blocks";

export const Secondary = {
  props: {
    color: 'secondary' as any
  },
  style: {
    color: secondary.main,
    '&:hover': {
      background: secondary.hover
    },
    '&:active': {
      background: secondary.active
    },
  }
}

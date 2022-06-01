import {base} from "../../palette-blocks";
import {palette} from "../../palette";
import {buttonFocus} from '../mixins';

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
    },
    '&:focus&:not(:active)': buttonFocus(base.main)
  }
}

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

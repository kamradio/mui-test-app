import {error} from "../../palette-blocks";
import {palette} from "../../palette";
import {buttonFocus} from "../mixins";

export const Error = {
  props: {
    color: 'error' as any,
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
    '&:disabled': {
      background: error.light,
      color: error.main,
      opacity: palette.action?.disabledOpacity,

      '.MuiLoadingButton-loadingIndicator': {
        color: error.main,
      }
    },
    '&:focus&:not(:active)': buttonFocus(error.main)
  }
}

export const ErrorText = {
  props: {
    color: 'error' as any,
    variant: 'text' as any
  },
  style: {
    background: 'transparent',
    '&:hover': {
      background: error.light
    },
    '&:active': {
      background: error.hover
    },
    '&:disabled': {
      background: 'transparent',
    },
  }
}

export const ErrorOutlined = {
  props: {
    color: 'error' as any,
    variant: 'outlined' as any
  },
  style: {
    background: 'transparent',
    '&:hover': {
      background: error.light
    },
    '&:active': {
      background: error.hover
    },
    '&:disabled': {
      borderColor: error.active,
      background: 'transparent',
    },
  }
}

import {base, primary, secondary} from "../../palette-blocks";
import {palette} from "../../palette";
import {ButtonColor, ButtonVariant} from "../Button";
import {buttonFocus} from "../mixins";

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
      opacity: palette.action?.disabledOpacity,
      '.MuiLoadingButton-loadingIndicator': {
        color: primary.main,
      }
    },
    '&:focus&:not(:active)': buttonFocus(primary.main)
  }

}

export const PrimaryText = {
  props: {
    color: 'primary' as ButtonColor,
    variant: 'text' as ButtonVariant
  },
  style: {
    '&:hover': {
      background: secondary.light,
      color: primary.main
    },
    '&:active': {
      background: secondary.hover,
      color: primary.main
    },
    '&:disabled': {
      background: 'transparent',
    }
  }
}

export const PrimaryOutline = {
  props: {
    color: 'primary' as ButtonColor,
    variant: 'outlined' as ButtonVariant
  },
  style: {
    borderColor: primary.main,
    '&:hover': {
      background: secondary.light,
      color: primary.main
    },
    '&:active': {
      background: secondary.hover,
      color: primary.main
    },
    '&:disabled': {
      borderColor: primary.main,
      background: 'transparent',
    }
  }
}

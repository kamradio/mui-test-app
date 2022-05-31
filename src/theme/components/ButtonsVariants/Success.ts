import {primary, success} from "../../palette-blocks";
import {palette} from "../../palette";

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
    '&:disabled': {
      background: success.light,
      color: success.main,
      opacity: palette.action?.disabledOpacity,

      '.MuiLoadingButton-loadingIndicator': {
        color: success.main,
      }
    }
  }
}

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

export const SuccessOutlined = {
  props: {
    color: 'success' as any,
    variant: 'outlined' as any
  },
  style: {
    '&:disabled': {
      borderColor: success.active,
      background: 'transparent',
    },
  }
}

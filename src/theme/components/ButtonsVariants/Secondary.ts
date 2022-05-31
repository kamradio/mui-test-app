import {primary, secondary} from "../../palette-blocks";
import {palette} from "../../palette";

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
    '&:disabled': {
      background: primary.light,
      color: primary.main,
      opacity: palette.action?.disabledOpacity,

      '.MuiLoadingButton-loadingIndicator': {
        color: primary.main,
      }
    }
  }
}

export const SecondaryContained = {
  props: {
    color: 'secondary' as any,
    variant: 'contained' as any
  },
  style: {
    background: secondary.light,
    color: secondary.main,
  }
}

export const SecondaryOutlined = {
  props: {
    color: 'secondary' as any,
    variant: 'outlined' as any,
  },
  style: {
    borderColor: secondary.light,
    color: secondary.main,
    '&:hover': {
      background: secondary.light,
      borderColor: secondary.hover,
    },
    '&:active': {
      background: secondary.hover
    },
    '&:disabled': {
      borderColor: primary.light,
      background: 'transparent',
    }
  }
}

export const SecondaryText = {
  props: {
    color: 'secondary' as any,
    variant: 'text' as any,
  },
  style: {
    '&:hover': {
      background: secondary.light
    },
    '&:active': {
      background: secondary.hover
    },
    '&:disabled': {
      background: 'transparent',
    }
  }
}

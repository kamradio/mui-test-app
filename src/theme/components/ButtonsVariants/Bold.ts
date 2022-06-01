import {base, grey} from "../../palette-blocks";
import {buttonFocus} from "../mixins";

export const Bold = {
  props: {
    color: 'bold' as any
  },
  style: {
    color: grey['900'],
    '&:hover': {
      background: grey['800'],
      color: 'white',
    },
    '&:active': {
      background: grey['900'],
      color: 'white',
    },
    '&:disabled': {
      '.MuiLoadingButton-loadingIndicator': {
        color: grey['500'],
      }
    },
    '&:focus&:not(:active)': buttonFocus(base.main)
  }
}

export const BoldContained = {
  props: {
    color: 'bold' as any,
    variant: 'contained' as any
  },
  style: {
    color: 'white',
    '&:disabled': {
      background: grey['300'],
    }
  }
}

export const BoldText = {
  props: {
    color: 'bold' as any,
    variant: 'text' as any
  },
  style: {
    '&:hover': {
      background: grey['100'],
      color: grey['900']
    },
    '&:active': {
      background: grey['200'],
      color: grey['900']
    }
  }
}

export const BoldOutlined = {
  props: {
    color: 'bold' as any,
    variant: 'outlined' as any
  },
  style: {
    '&:hover': {
      background: grey['100'],
      color: grey['900']
    },
    '&:active': {
      background: grey['200'],
      color: grey['900']
    }
  }
}

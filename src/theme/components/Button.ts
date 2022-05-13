import {base, secondary, success} from '../palette-blocks';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    base: true;
  }
}

export const MuiButton = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      textTransform: 'none' as any,
      padding: '6px 16px' as any,
      '&:focus': {
        boxShadow: '0 0 0 0.12rem #5eed9766',
      }
    },
  },
  variants: [

    {
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
        },
      }
    },


    {
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
      }
    },


    {
      props: {
        color: 'secondary' as any,
        variant: 'contained' as any
      },
      style: {
        background: secondary.light,
        color: secondary.main,
        '&:hover': {
          background: secondary.hover
        },
        '&:active': {
          background: secondary.active
        },
      }
    },


    {
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
    },

    {
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


  ]
}

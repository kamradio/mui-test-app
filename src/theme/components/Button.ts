import {primary} from '../palette-blocks';
import {Base, Bold, BoldContained, BaseContained, Secondary, Success, SuccessContained, ErrorContained, Primary, SecondaryContained} from "./ButtonsVariants";

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    base: true;
    bold: true;
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
      '&:focus&:not(:active)': {
        boxShadow: `0 0 1px 0.2rem ${primary.main}44`,
      }
    },
  },
  variants: [BaseContained, Base, Bold, BoldContained, Secondary, Success, SuccessContained, ErrorContained, Primary, SecondaryContained]
}

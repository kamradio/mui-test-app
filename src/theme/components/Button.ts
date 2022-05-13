import {primary} from '../palette-blocks';
import {Base, Bold, BoldContained, BaseContained, SecondaryContained, Success, SuccessContained, ErrorContained} from "./ButtonsVariants";

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
      '&:focus': {
        boxShadow: `0 0 1px 0.2rem ${primary.main}88`,
      }
    },
  },
  variants: [BaseContained, Base, Bold, BoldContained, SecondaryContained, Success, SuccessContained, ErrorContained]
}

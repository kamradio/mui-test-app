import {grey, primary} from '../palette-blocks';
import {
  Primary, PrimaryText, PrimaryOutline,
  Secondary, SecondaryOutlined, SecondaryContained, SecondaryText,
  Success, SuccessContained, SuccessOutlined,
  Error, ErrorOutlined, ErrorText,
  Bold, BoldContained, BoldText, BoldOutlined,

  SizeSmall, SizeMedium, SizeLarge,

  Base,  BaseContained,
} from "./ButtonsVariants";

export type ButtonVariant = "contained" | "text" | "outlined" | undefined;
export type ButtonColor = "base" | "bold" | "secondary" | "success" | "error" | "primary" | "inherit" | "info" | "warning" | undefined;

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
      '&:focus&:not(:active)': {
        boxShadow: `0 0 0 0.2rem ${primary.main}44`,
      }
    },
  },
  variants: [
    Primary,
    PrimaryText,
    PrimaryOutline,

    Secondary,
    SecondaryContained,
    SecondaryOutlined,
    SecondaryText,

    Success,
    SuccessContained,
    SuccessOutlined,

    Error,
    ErrorOutlined,
    ErrorText,

    Bold,
    BoldContained,
    BoldText,
    BoldOutlined,

    SizeSmall,
    SizeMedium,
    SizeLarge,

    BaseContained,
    Base,



  ]
}

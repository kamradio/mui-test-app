import React from 'react';
import {text} from '../palette-blocks';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption1: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    caption1: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true;
  }
}

export const caption1: React.CSSProperties = {
  fontSize: '0.6875rem',
  lineHeight: '1rem',
  marginBottom: '0.125rem',
  fontWeight: '400',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: text.secondary
};

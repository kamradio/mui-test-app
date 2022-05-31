import { Theme } from '@mui/material/styles';
import { TypographyProps } from '@mui/material/Typography';

export const Typography = {
  styleOverrides: {
    gutterBottom:
      ({ ownerState, theme }: {ownerState: TypographyProps, theme: Theme}) => ({
        marginBottom: {

          h1: '0.5rem',
          h2: '0.5rem',
          h3: '0.25rem',
          h4: '0.25rem',
          subtitle1: '0.25rem',
          subtitle2: '0.25rem',
          body1: '0.25rem',
          body2: '0.25rem',
          caption1: '0.5rem',

        }[ownerState.variant as string]
      }),

  }
}

import { PaletteOptions } from '@mui/material';

const grey = {
  50: '#F5F8FA',
  100: '#F1F4F6',
  200: '#EAEEF2',
  300: '#D4DBE1',
  400: '#AFBCC7',
  500: '#8895A0',
  600: '#6C7984',
  700: '#5C6872',
  800: '#49535A',
  900: '#3F474D',
};

const text = {
  primary: grey["900"],
  secondary: grey["600"],
  disabled: grey["400"]
}

export const palette: PaletteOptions = {
  grey,
  divider: grey["300"],
  text,
}

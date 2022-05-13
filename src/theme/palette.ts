import { PaletteOptions } from '@mui/material';
import {primary, grey, text, success, base, dark, secondary} from './palette-blocks';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    base: Palette['primary'];
    dark: Palette['primary'];
  }
  interface PaletteOptions {
    base: PaletteOptions['primary'];
    dark: PaletteOptions['primary'];
  }
  interface PaletteColor {
    hover?: string;
    active?: string;
  }
  interface SimplePaletteColorOptions {
    hover?: string;
    active?: string;
  }
}

export const palette: PaletteOptions = {
  grey,
  divider: grey["300"],
  text,
  primary,
  success,
  base,
  dark,
  secondary
}

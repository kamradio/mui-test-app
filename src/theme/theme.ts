import { createTheme } from '@mui/material/styles';
import {typography} from './typography';
import {palette} from './palette';
import {MuiDivider, MuiButton} from './components';

export const theme = createTheme({
  typography,
  palette,
  spacing: [0, 2, 4, 8, 16, 24, 32, 40, 48],
  components: {MuiDivider, MuiButton}
});

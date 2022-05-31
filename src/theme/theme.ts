import { createTheme } from '@mui/material/styles';
import {typography} from './typography';
import {palette} from './palette';
import {MuiDivider, MuiButton} from './components';

export const theme = createTheme({
  typography,
  palette,
  spacing: 4,
  components: {MuiDivider, MuiButton}
});

import { createTheme } from '@mui/material/styles';
import {typography} from './typography';
import {palette} from './palette';
import {MuiDivider} from './components';

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiDivider: MuiDivider,
  }
});

import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import components from './components';

const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components,
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});

export default theme;
export { palette, typography, breakpoints, components };
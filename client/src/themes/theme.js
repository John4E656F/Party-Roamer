import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'main',
    primary: {
      main: '#373739',
    },
    secondary: {
      main: '#f50057',
    },
    cta: {
        main: '#8E793E',
        contrastText: '#fff',
    },
  },
});

export default theme
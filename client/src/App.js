import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppRoutes from './routing'

import theme from './themes/theme';
import {
	CssBaseline,
  } from '@mui/material'
import './App.css';

function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
    </ThemeProvider>
    </>
  );
}

export default App;

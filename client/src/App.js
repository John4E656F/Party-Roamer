import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppRoutes from './routing'

import themes from './themes/index';
import {
	CssBaseline,
	useTheme
  } from '@mui/material'
import './App.css';

function App() {
  const themes = useTheme();
  
  return (
    <>
    <ThemeProvider theme={themes}>
        <CssBaseline />
        <AppRoutes />
    </ThemeProvider>
    </>
  );
}

export default App;

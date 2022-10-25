import React from 'react';
import { Provider } from 'react-redux'
import AppRoutes from './routing'

// import darkTheme from './theme';
import {
	ThemeProvider,
	CssBaseline,
	useTheme
  } from '@mui/material'
import './App.css';

function App() {
  // const theme = useTheme();
  
  return (
    <>
    {/* <ThemeProvider theme={darkTheme}> */}
        <CssBaseline />
        <AppRoutes />
    {/* </ThemeProvider> */}
    </>
  );
}

export default App;

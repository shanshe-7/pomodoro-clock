import React from 'react';
import Clock from './clockFunctionality';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import './App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Major Mono Display',
      'Orbitron',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette:{
    primary: {
      main: '#fff'
    }
  }
  
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Clock />
      </ThemeProvider>
    </div>
  );
}

export default App;

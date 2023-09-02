import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import defaultTheme from './config/theme/defaultTheme';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

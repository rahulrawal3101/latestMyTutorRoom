import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdelContextWrapper from './store/Context';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { MAIN_COLOR, SECONDARY_COLOR } from './constant';
import './index.css'
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <ThemeProvider theme={theme}>
      <AdelContextWrapper>
        <App />
      </AdelContextWrapper>
    </ThemeProvider>
  </React.StrictMode>
);

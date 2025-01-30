import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NewsProvider } from './context';
import {AppProvider} from './Context/ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewsProvider>
    <AppProvider>
        <App />
        </AppProvider>
    </NewsProvider>
  </React.StrictMode>
);

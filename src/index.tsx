import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// @ts-ignore
import * as reactRouter from 'react-router-dom'

// @ts-ignore
window.xx = reactRouter
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



// o index renderiza o App.js e joga ele dentro do id root la na indexhtml

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
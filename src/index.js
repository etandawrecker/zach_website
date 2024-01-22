// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root object using createRoot
const root = document.getElementById('root');
const rootElement = createRoot(root);

// Render your app using the rootElement
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

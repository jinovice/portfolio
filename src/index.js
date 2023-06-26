import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*      <head>
        <meta charSet="UTF-8">
          <title>JINOVICE</title>
      </head>*/}
    <App />
  </React.StrictMode>
);

reportWebVitals();

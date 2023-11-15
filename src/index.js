import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { data } from './redux/data';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* provider tag is used to make store globally accessible */}
  <Provider store={data}>
    <App />
  </Provider>
     
  </React.StrictMode>
);

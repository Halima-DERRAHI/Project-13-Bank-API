import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import RouterIndex from './Components/Router/index.jsx'
import store from './Store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterIndex />
    </React.StrictMode>
  </Provider>
);
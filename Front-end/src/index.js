import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import rootReducer from "./Store/rootReducer.js";
import { configureStore } from "@reduxjs/toolkit";
import './index.css';
import RouterIndex from './Components/Router/index.jsx'

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterIndex />
    </Provider>
  </React.StrictMode>
);
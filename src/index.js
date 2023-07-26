import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import genderReducer from './redux/genderSlice';
import App from './App';
import '@ckcherry23/qi-components/dist/index.cjs.css';

const store = configureStore({
  reducer: {
    gender: genderReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

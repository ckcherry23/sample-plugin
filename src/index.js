import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import genderReducer from './redux/genderSlice';
import App from './App';

const store = configureStore({
  reducer: {
    gender: genderReducer,
  },
});

const container = ReactDOM.createRoot(document.getElementById('plugin-target'));

container.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default App;

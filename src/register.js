import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import genderReducer from './redux/genderSlice';
import App from './App';
import stringifiedStyles from '!!raw-loader!./App.css';

const store = configureStore({
  reducer: {
    gender: genderReducer,
  },
});

const register = (target, context) => {

  const PluginComponent = () =>
    <Provider store={store}>
      <App context={context} />
    </Provider>;

  ReactDOM.createRoot(target).render(<PluginComponent />);

  return {
    styles: [ stringifiedStyles ],
  }
};

export { register };
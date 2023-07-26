import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import genderReducer from './redux/genderSlice';
import App from './App';
import stringifiedStyles from './styles';
import { register, Plugin } from '@ckcherry23/fmdp-plugin-utils';

const store = configureStore({
  reducer: {
    gender: genderReducer,
  },
});

const PluginComponent = () =>
<Provider store={store}>
  <App />
</Provider>;

const pluginContainer = document.createElement("span");

ReactDOM.render(<PluginComponent />, pluginContainer);

const plugin: Plugin = {
  component: pluginContainer,
  styles: stringifiedStyles,
}

export default register(plugin);
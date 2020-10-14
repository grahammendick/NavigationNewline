import React from 'react';
import ReactDOM from 'react-dom';
import {NavigationHandler} from 'navigation-react';
import './index.css';
import App from './App';
import createStateNavigator from './createStateNavigator';

const stateNavigator = createStateNavigator();
stateNavigator.start();

ReactDOM.render(
  <React.StrictMode>
    <NavigationHandler stateNavigator={stateNavigator}>
      <App />
    </NavigationHandler>
  </React.StrictMode>,
  document.getElementById('root')
);

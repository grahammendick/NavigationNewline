import React from 'react';
import ReactDOM from 'react-dom';
import { StateNavigator } from 'navigation';
import { NavigationHandler } from 'navigation-react';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import * as serviceWorker from './serviceWorker';

const stateNavigator = new StateNavigator([
  { key: 'welcome', route: '' },
  { key: 'books' },
]);

const { welcome } = stateNavigator.states;
welcome.renderView = () => <Welcome />;

stateNavigator.start();

ReactDOM.render(
  <React.StrictMode>
    <NavigationHandler stateNavigator={stateNavigator}>
      <App />
    </NavigationHandler>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

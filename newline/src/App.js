import React, { useContext } from 'react';
import { NavigationContext } from 'navigation-react';
import './App.css';

function App() {
  const { state, data } = useContext(NavigationContext);
  return state.renderView(data);
}

export default App;

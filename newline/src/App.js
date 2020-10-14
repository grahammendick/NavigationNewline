import {useContext} from 'react';
import {NavigationContext} from 'navigation-react';

function App() {
  const {state, data} = useContext(NavigationContext);
  return state.renderView(data);
}

export default App;

import React, {useContext, Suspense} from 'react';
import {NavigationContext} from 'navigation-react';

function App() {
  const {state, data} = useContext(NavigationContext);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {state.renderView(data)}
    </Suspense>
  );
}

export default App;

import React from 'react';
import {NavigationLink} from 'navigation-react';

function Welcome() {
  return (
    <>
      <h1>Welcome</h1>
      <div>
        This is the newline example application built with the Navigation router. Take
        a look at their <NavigationLink stateKey="books">books</NavigationLink> and
        browse their <NavigationLink stateKey="tutorials">tutorials</NavigationLink>
      </div>
    </>
  )
}
  
export default Welcome;

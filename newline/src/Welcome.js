import React from 'react';
import {NavigationLink} from 'navigation-react';

function Welcome() {
  return (
    <>
      <h1>Welcome</h1>
      <div>
        Hello! This is the newline example application built with the Navigation router.
        Take a look at <NavigationLink stateKey="books">newline's books</NavigationLink>
      </div>
    </>
  )
}
  
export default Welcome;

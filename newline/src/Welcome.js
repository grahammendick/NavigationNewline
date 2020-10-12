import React from 'react';
import { NavigationLink } from 'navigation-react';

function Welcome() {
  return <div>Hello <NavigationLink stateKey="books">Books</NavigationLink></div>;
}
  
export default Welcome;

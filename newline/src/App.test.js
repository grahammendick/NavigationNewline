import React from 'react';
import {render} from '@testing-library/react';
import {NavigationHandler} from 'navigation-react';
import App from './App';
import createStateNavigator from './createStateNavigator';
import FetchContext from './FetchContext';
import assert from 'assert';
import {act} from 'react-dom/test-utils';

const mockFetch = data => (
  () => ({
    then: () => ({
      then : fn => act(() => fn(data))
    })
  })
);

test('welcome renders books and tutorials links', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('welcome')
  const {container} = render(
    <NavigationHandler stateNavigator={stateNavigator}>
      <App />
    </NavigationHandler>
  );
  const links = container.querySelectorAll('a');
  assert.strictEqual(links[0].innerHTML, 'books');
  assert.strictEqual(links[0].getAttribute('href'), '/our-books');
  assert.strictEqual(links[1].innerHTML, 'tutorials');
  assert.strictEqual(links[1].getAttribute('href'), '/our-tutorials');
});

test('welcome books link navigates to books', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('welcome')
  const fetch = mockFetch({
    books: [],
    total: 0,
  });
  const {container} = render(
    <FetchContext.Provider value={fetch}>
      <NavigationHandler stateNavigator={stateNavigator}>
        <App />
      </NavigationHandler>
    </FetchContext.Provider>
  );
  container.querySelectorAll('a')[0].click();
  assert.strictEqual(stateNavigator.stateContext.state.key, 'books');
});

test('welcome tutorials link navigates to tutorials', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('welcome')
  const fetch = mockFetch({
    tutorials: [],
    total: 0,
  });
  const {container} = render(
    <FetchContext.Provider value={fetch}>
      <NavigationHandler stateNavigator={stateNavigator}>
        <App />
      </NavigationHandler>
    </FetchContext.Provider>
  );
  container.querySelectorAll('a')[1].click();
  assert.strictEqual(stateNavigator.stateContext.state.key, 'tutorials');
});

test('books renders book links', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('books')
  const fetch = mockFetch({
    books: [],
    total: 12,
  });
  const {container} = render(
    <FetchContext.Provider value={fetch}>
      <NavigationHandler stateNavigator={stateNavigator}>
        <App />
      </NavigationHandler>
    </FetchContext.Provider>
  );
  console.log(container.querySelector("ol").innerHTML)
  console.log('a');
});

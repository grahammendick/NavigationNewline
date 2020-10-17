import React from 'react';
import ReactDOM from 'react-dom';
import {NavigationHandler} from 'navigation-react';
import assert from 'assert';
import {act, Simulate} from 'react-dom/test-utils';
import App from './App';
import createStateNavigator from './createStateNavigator';
import FetchContext from './FetchContext';

const mockFetch = data => (
  url => ({
    then: () => ({
      then : fn => act(() => fn(data[url]))
    })
  })
);

test('welcome renders books and tutorials links', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('welcome');
  const container = document.createElement('div');
  act(() => {
    ReactDOM.render(
      <NavigationHandler stateNavigator={stateNavigator}>
        <App />
      </NavigationHandler>,
      container
    );
  });
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
    '/api/books?page=1&title=' : {
      books: [],
      total: 0,
    }
  });
  const container = document.createElement('div');
  act(() => {
    ReactDOM.render(
      <FetchContext.Provider value={fetch}>
        <NavigationHandler stateNavigator={stateNavigator}>
          <App />
        </NavigationHandler>
      </FetchContext.Provider>,
      container
    );
  });
  Simulate.click(container.querySelectorAll('a')[0]);
  assert.strictEqual(stateNavigator.stateContext.state.key, 'books');
});

test('welcome tutorials link navigates to tutorials', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('welcome')
  const fetch = mockFetch({
    '/api/tutorials?page=1' : {
      tutorials: [],
      total: 0,
    }
  });
  const container = document.createElement('div');
  act(() => {
    ReactDOM.render(
      <FetchContext.Provider value={fetch}>
        <NavigationHandler stateNavigator={stateNavigator}>
          <App />
        </NavigationHandler>
      </FetchContext.Provider>,
      container
    );
  })
  Simulate.click(container.querySelectorAll('a')[1]);
  assert.strictEqual(stateNavigator.stateContext.state.key, 'tutorials');
});

test('books renders book links', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('books')
  const fetch = mockFetch({
    '/api/books?page=1&title=' : {
      books: [],
      total: 12,
    }
  });
  const container = document.createElement('div');
  act(() => {
    ReactDOM.render(
      <FetchContext.Provider value={fetch}>
        <NavigationHandler stateNavigator={stateNavigator}>
          <App />
        </NavigationHandler>
      </FetchContext.Provider>,
      container
    );
  });
  console.log(container.querySelector("ol").innerHTML)
  console.log('a');
});

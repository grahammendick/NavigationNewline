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
  assert.strictEqual(links[0].getAttribute('href'), '/our-books');
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
      books: [
        {
          slug: 'fullstack-graphql',
          title: 'Fullstack GraphQL',
          cover: 'https://fullstack-graphql-cover.jpg',
          description: 'The Complete Guide to Writing GraphQL Servers and Clients with TypeScript',
        },
        {
          slug: 'fullstack-react-with-typeScript',
          title: 'Fullstack React with TypeScript',
          cover: 'https://fullstack-react-with-typeScript-cover.png',
          description: 'Learn Pro Patterns for Hooks, Testing, Redux, SSR, and GraphQL',
        },
        {
          slug: 'security-from-zero',
          title: 'Security from Zero',
          cover: 'https://security-from-zero-cover.png',
          description: 'Practical Security for Busy People',
        },
        {
          slug: 'fullstack-rust',
          title: 'Fullstack Rust',
          cover: 'https://fullstack-rust-cover.jpg',
          description: 'The Complete Guide to Building Apps with Rust',
        },
        {
          slug: 'fullstack-nodejs',
          title: 'Fullstack Node.js',
          cover: 'https://fullstack-nodejs-cover.png',
          description: 'The Complete Guide to Building Production Apps with Node.js',      
        }                
      ],
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
  const bookLinks = container.querySelectorAll("ul li a");
  assert.strictEqual(bookLinks.length, 5);
  assert.strictEqual(bookLinks[0].getAttribute('href'), '/fullstack-graphql');
  assert.strictEqual(bookLinks[1].getAttribute('href'), '/fullstack-react-with-typeScript');
  assert.strictEqual(bookLinks[2].getAttribute('href'), '/security-from-zero');
  assert.strictEqual(bookLinks[3].getAttribute('href'), '/fullstack-rust');
  assert.strictEqual(bookLinks[4].getAttribute('href'), '/fullstack-nodejs');
});

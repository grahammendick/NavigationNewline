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
      then : fn => data[url] && act(() => fn(data[url]))
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
  const bookLinks = container.querySelectorAll('ul li a');
  assert.strictEqual(bookLinks.length, 5);
  assert.strictEqual(bookLinks[0].getAttribute('href'), '/fullstack-graphql');
  assert.strictEqual(bookLinks[1].getAttribute('href'), '/fullstack-react-with-typeScript');
  assert.strictEqual(bookLinks[2].getAttribute('href'), '/security-from-zero');
  assert.strictEqual(bookLinks[3].getAttribute('href'), '/fullstack-rust');
  assert.strictEqual(bookLinks[4].getAttribute('href'), '/fullstack-nodejs');
});

test('books renders paging links', () => {
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
  const pagingLinks = container.querySelectorAll('ol li a');
  assert.strictEqual(pagingLinks.length, 3);
  assert.strictEqual(pagingLinks[0].getAttribute('href'), null);
  assert.strictEqual(pagingLinks[1].getAttribute('href'), '/our-books/2');
  assert.strictEqual(pagingLinks[2].getAttribute('href'), '/our-books/3');
});

test('books renders paging links for page 2', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('books', {page: 2})
  const fetch = mockFetch({
    '/api/books?page=2&title=' : {
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
  const pagingLinks = container.querySelectorAll('ol li a');
  assert.strictEqual(pagingLinks.length, 3);
  assert.strictEqual(pagingLinks[0].getAttribute('href'), '/our-books');
  assert.strictEqual(pagingLinks[1].getAttribute('href'), null);
  assert.strictEqual(pagingLinks[2].getAttribute('href'), '/our-books/3');
});

test('books filter navigates to filtered page 1', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('books', {page: 2})
  const fetch = mockFetch({
    '/api/books?page=2&title=' : {
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
  const filterInput = container.querySelector('input');
  const filterButton = container.querySelector('button');
  filterInput.value = 'react';
  Simulate.change(filterInput);
  Simulate.click(filterButton);
  assert.strictEqual(stateNavigator.stateContext.state.key, 'books');
  assert.strictEqual(stateNavigator.stateContext.data.page, 1);
  assert.strictEqual(stateNavigator.stateContext.data.title, 'react');
});

test('books link navigates to book details', () => {
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
  const bookLinks = container.querySelectorAll('ul li a');
  Simulate.click(bookLinks[1]);
  assert.strictEqual(stateNavigator.stateContext.state.key, 'book');
  assert.strictEqual(stateNavigator.stateContext.data.slug, 'fullstack-react-with-typeScript');
});

test('books paging link navigates to page of books', () => {
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
  const pagingLinks = container.querySelectorAll('ol li a');
  Simulate.click(pagingLinks[1]);
  assert.strictEqual(stateNavigator.stateContext.state.key, 'books');
  assert.strictEqual(stateNavigator.stateContext.data.page, 2);
});

test('book renders contents link', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('book', {slug: 'fullstack-graphql'});
  const fetch = mockFetch({
    '/api/book?slug=fullstack-graphql' : {
      slug: 'fullstack-graphql',
      title: 'Fullstack GraphQL',
      cover: 'https://fullstack-graphql-cover.jpg',
      description: 'The Complete Guide to Writing GraphQL Servers and Clients with TypeScript',
      authors: [
        {
          name: 'Gaetano Checinski',
          photo: 'https://gaetano-checinski.jpg',
          bio: `I'm a Software Architect and Entrepreneur from London. I've been a consultant for adopting React and GraphQL in companies like The Times, YLD, and others.\nI've encountered tons of real-world challenges implementing GraphQL in the real-world and I've condensed my learnings down into this book.`
        },
        {
          name: 'Roy Derks',
          photo: 'https://roy-derks.jpg',
          bio: `I lead engineering teams at Vandebron and teach folks how to use React and GraphQL through conference speaking and writing.\nImplementing a flexible, optimized GraphQL server is tricky, but in this book, I'll show you how.`
        },
      ],
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
  const commentLink = container.querySelector('a');
  assert.strictEqual(commentLink.getAttribute('href'), '/fullstack-graphql/contents');
});

test('book contents link navigates to book with contents', () => {
  const stateNavigator = createStateNavigator();
  stateNavigator.navigate('book', {slug: 'fullstack-graphql'});
  const fetch = mockFetch({
    '/api/book?slug=fullstack-graphql' : {
      slug: 'fullstack-graphql',
      title: 'Fullstack GraphQL',
      cover: 'https://fullstack-graphql-cover.jpg',
      description: 'The Complete Guide to Writing GraphQL Servers and Clients with TypeScript',
      authors: [
        {
          name: 'Gaetano Checinski',
          photo: 'https://gaetano-checinski.jpg',
          bio: `I'm a Software Architect and Entrepreneur from London. I've been a consultant for adopting React and GraphQL in companies like The Times, YLD, and others.\nI've encountered tons of real-world challenges implementing GraphQL in the real-world and I've condensed my learnings down into this book.`
        },
        {
          name: 'Roy Derks',
          photo: 'https://roy-derks.jpg',
          bio: `I lead engineering teams at Vandebron and teach folks how to use React and GraphQL through conference speaking and writing.\nImplementing a flexible, optimized GraphQL server is tricky, but in this book, I'll show you how.`
        },
      ],
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
  const commentLink = container.querySelector('a');
  Simulate.click(commentLink);
  assert.strictEqual(stateNavigator.stateContext.state.key, 'book');
  assert.strictEqual(stateNavigator.stateContext.data.contents, true);
});

const express = require('express');

const app = express();

const books = [
  {
    slug: 'fullstack-react-with-typeScript',
    title: 'Fullstack React with TypeScript',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20200515205449509_Book%20Cover-900h.png',
    description: 'Learn Pro Patterns for Hooks, Testing, Redux, SSR, and GraphQL'
  }
]

app.get('/api/books', (req, res) => {
  return res.json(books);
});

app.listen('3001');

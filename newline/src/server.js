const express = require('express');

const app = express();

const books = [
  {
    slug: 'fullstack-react-with-typeScript',
    title: 'Fullstack React with TypeScript',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20200515205449509_Book%20Cover-900h.png',
    description: 'Learn Pro Patterns for Hooks, Testing, Redux, SSR, and GraphQL'
  },
  {
    slug: 'security-from-zero',
    title: 'Security from Zero',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20200410212133097_Book%20Cover-900h.png',
    description: 'Practical Security for Busy People'
  },
  {
    slug: 'fullstack-rust',
    title: 'Fullstack Rust',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20200128180002306_title_page.jpg',
    description: 'The Complete Guide to Building Apps with Rust'
  },
  {
    slug: 'fullstack-nodejs',
    title: 'Fullstack Node.js',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20191025013737659_Book%20Cover-900h.png',
    description: 'The Complete Guide to Building Production Apps with Node.js'
  },
  {
    slug: 'web-developers-field-guide',
    title: 'How to Become a Web Developer: A Field Guide',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190830200745796_web-developers-field-guide.jpg',
    description: 'A Field Guide to Your New Career'
  },
  {
    slug: 'fullstack-d3',
    title: 'Fullstack D3 and Data Visualization',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190514165730060_Book%20Cover-900h.png',
    description: 'The Complete Guide to Developing Data Visualizations with D3'
  },
  {
    slug: 'fullstack-react',
    title: 'Fullstack React',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190131015240478_fullstack-react-cover-medium%402x.png',
    description: 'The Complete Guide to ReactJS and Friends'
  },
  {
    slug: 'fullstack-react-native',
    title: 'Fullstack React Native',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190131231429465_fullstack-react-native-cover.png',
    description: 'The Complete Guide to React Native'
  },
  {
    slug: 'fullstack-vue',
    title: 'Fullstack Vue',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190131231434600_fullstack-vue-cover.png',
    description: 'The Complete Guide to Vue.js'
  },
  {
    slug: 'react-from-zero',
    title: 'React from Zero',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20190131231811046_react-from-zero-cover.png',
    description: 'A gentle introduction to React, using the JavaScript you already know'
  },
  {
    slug: 'javascript-algorithms',
    title: 'JavaScript Algorithms',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20200701172834088_Book%20Cover-900h.png',
    description: 'Learn Data Structures and Algorithms in JavaScript'
  },
  {
    slug: 'ng-book',
    title: 'ng-book',
    cover: 'https://dzxbosgk90qga.cloudfront.net/fit-in/252x329/n/20191126145408141_ng-book.jpg',
    description: 'The Complete Book on Angular'
  },
]

app.get('/api/books', (req, res) => {
  const start = (req.query.page - 1) * 5;
  return res.json({
    books: books.slice(start, start + 5),
    total: books.length
  });
});

app.listen('3001');

const express = require('express');

const app = express();

app.get('/books', (req, res) => {
  return res.json({
    x: 1
  });
});

app.listen('3001', () =>
  console.log('hello'),
);
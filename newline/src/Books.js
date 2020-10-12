import React, { useEffect, useState } from 'react';

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(setBooks)
  }, []);
  return books.map(book => (
    <div key={book.slug}>
      <img src={book.cover} />
      <div>{book.title}</div>
    </div>
  ));
}
  
export default Books;

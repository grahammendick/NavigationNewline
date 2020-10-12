import React, { useEffect, useState } from 'react';

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(setBooks)
  }, []);
  return (
    <ul>
      {books.map(book => (
        <li key={book.slug}>
          <img src={book.cover} />
          <div>{book.title}</div>
          <div>{book.description}</div>
        </li>
      ))}
    </ul>
  );
}
  
export default Books;

import React, { useEffect, useState } from 'react';

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('/api/books?page=1')
      .then(res => res.json())
      .then(({ books }) => setBooks(books))
  }, []);
  return (
    <>
      <h1>📗 Our Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.slug}>
            <img src={book.cover} />
            <h2>{book.title}</h2>
            <div>{book.description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
  
export default Books;

import React, { useEffect, useState } from 'react';

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(setBooks)
  }, []);
  return (
    <>
      <h1>📗 Our Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.slug}>
            <div>
              <img src={book.cover} />
              <h2>{book.title}</h2>
              <div>{book.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
  
export default Books;

import React, { useEffect, useState } from 'react';
import { NavigationLink } from 'navigation-react';

function Books({ page = 1 }) {
  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetch(`/api/books?page=${page}`)
      .then(res => res.json())
      .then(({ books, total }) => {
        setBooks(books);
        setTotal(total);
      })
  }, [ page ]);
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
      <ul>
        {Array(Math.ceil(total / 5)).fill(0).map((_, i) => (
          <li key={i}>
            <NavigationLink
              stateKey="books"
              navigationData={{ page: i + 1 }}
              disableActive={true}>
              {i + 1}
            </NavigationLink>
          </li>
        ))}
      </ul>
    </>
  );
}
  
export default Books;

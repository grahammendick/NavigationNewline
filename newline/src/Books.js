import React, { useEffect, useState, useContext } from 'react';
import { RefreshLink, NavigationContext } from 'navigation-react';

function Books({ page, title = '' }) {
  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState('');
  const { stateNavigator } = useContext(NavigationContext);
  useEffect(() => {
    fetch(`/api/books?`
      + `page=${encodeURIComponent(page)}`
      + `&title=${encodeURIComponent(title)}`)
      .then(res => res.json())
      .then(({ books, total }) => {
        setBooks(books);
        setTotal(total);
        setFilter(title);
      })
  }, [ page, title ]);
  return (
    <>
      <h1>Our Books</h1>
      <form onSubmit={event => event.preventDefault()}>
        <input type="text" value={filter} onChange={event => {
          setFilter(event.target.value)
        }} />
        <button type="submit" onClick={() => {
          stateNavigator.navigate('books', { title: filter, page: 1 })
        }}>Search</button>
      </form>
      <ul>
        {books.map(book => (
          <li key={book.slug}>
            <img src={book.cover} alt={book.title} />
            <h2>{book.title}</h2>
            <div>{book.description}</div>
          </li>
        ))}
      </ul>
      <ol>
        {Array(Math.ceil(total / 5)).fill(0).map((_, i) => (
          <li key={i}>
            <RefreshLink
              navigationData={{ page: i + 1 }}
              includeCurrentData={true}
              disableActive={true}>
              {i + 1}
            </RefreshLink>
          </li>
        ))}
      </ol>
    </>
  );
}
  
export default Books;

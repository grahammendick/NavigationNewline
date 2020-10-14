import React, {useEffect, useState, useContext} from 'react';
import {NavigationContext} from 'navigation-react';
import Pager from './Pager';

function Books({page, title = ''}) {
  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState('');
  const {stateNavigator} = useContext(NavigationContext);
  useEffect(() => {
    fetch(`/api/books?`
      + `page=${encodeURIComponent(page)}`
      + `&title=${encodeURIComponent(title)}`)
      .then(res => res.json())
      .then(({books, total}) => {
        setBooks(books);
        setTotal(total);
        setFilter(title);
      })
  }, [page, title]);
  return (
    <>
      <h1>Our Books</h1>
      <form onSubmit={event => event.preventDefault()}>
        <input type="text" value={filter} onChange={event => {
          setFilter(event.target.value)
        }} />
        <button type="submit" onClick={() => {
          stateNavigator.refresh({title: filter, page: 1})
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
      <Pager total={total} />
    </>
  );
}

export default Books;

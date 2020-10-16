import React, {useState, useEffect} from 'react';
import {RefreshLink} from 'navigation-react';
import Contents from './Contents';

function Book({bookResource, slug, contents}) {
  const [book, setBook] = useState(null);
  useEffect(() => {    
    bookResource && bookResource
      .then(res => res.json())
      .then(setBook)
  }, [bookResource]);
  return book && (
    <div className="book">
      <h1>{book.title}</h1>
      <img src={book.cover} alt={book.title} />
      <div>{book.description}</div>
      <div className="authors">
        <h2>
          <span>
            {`Meet the Author${book.authors.length > 1 ? 's' : ''}`}
          </span>
        </h2>
        <ul>
          {book.authors.map(author => (
            <li key={author.name}>
              <img src={author.photo} alt={author.name} />
              <h3>{author.name}</h3>
              <div>{author.bio}</div>
            </li>
          ))}
        </ul>
      </div>
      <RefreshLink
        navigationData={{contents: !contents}}
        includeCurrentData={true}>
        Table of Contents
      </RefreshLink>
      {contents && <Contents slug={slug} />}
    </div>
  );
}

export default Book;

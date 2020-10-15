import React, {useState, useEffect} from 'react';

function Book({bookResource}) {
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
    </div>
  );
}

export default Book;

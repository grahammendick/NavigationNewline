import React, {useState, useEffect} from 'react';

function Book({slug}) {
  const [book, setBook] = useState(null);
  useEffect(() => {
    fetch(`/api/book?slug=${encodeURIComponent(slug)}`)
      .then(res => res.json())
      .then(setBook)
  }, [slug]);
  return book && (
    <div className="book">
      <h1>{book.title}</h1>
      <img src={book.cover} alt={book.title} />
      <div>{book.description}</div>
      <div className="authors">
        <h2>
          <span>Meet the Authors</span>
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

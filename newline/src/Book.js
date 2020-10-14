import React, {useState, useEffect} from 'react';

function Book({slug}) {
  const [book, setBook] = useState(null);
  useEffect(() => {
    fetch(`/api/book?slug=${encodeURIComponent(slug)}`)
      .then(res => res.json())
      .then(setBook)
  }, [slug]);
  return book && (
    <>      
      <h1>{book.title}</h1>
      <img src={book.cover} alt={book.title} />
      <ul className="authors">
        {book.authors.map(author => (
          <li key={author.name}>
            <img src={author.photo} alt={author.name} />
            <h2>{author.name}</h2>
            <div>{author.bio}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Book;

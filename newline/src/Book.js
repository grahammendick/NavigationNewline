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
    </>
  );
}

export default Book;

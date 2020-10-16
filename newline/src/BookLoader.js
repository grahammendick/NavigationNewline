import React, {useEffect, useState} from 'react';
const Book = React.lazy(() => import('./Book'));

function BookLoader({slug, contents}) {
  const [bookResource, setBookResource] = useState(null);
  const [contentsResource, setContentsResource] = useState(null);
  useEffect(() => {
    setBookResource(fetch(`/api/book?slug=${encodeURIComponent(slug)}`));
  }, [slug]);
  useEffect(() => {
    setContentsResource(contents ?
      fetch(`/api/contents?slug=${encodeURIComponent(slug)}`) : null);
  }, [contents, slug]);
  return <Book
    bookResource={bookResource}
    contentsResource={contentsResource}
    contents={contents} />
}

export default BookLoader;

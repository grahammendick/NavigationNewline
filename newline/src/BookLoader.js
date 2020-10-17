import React, {useEffect, useState} from 'react';
const Book = React.lazy(() => import('./Book'));

function BookLoader({slug, contents}) {
  const [bookResource, setBookResource] = useState(null);
  const [contentsResource, setContentsResource] = useState(null);
  useEffect(() => {
    setBookResource(fetch(`/api/book?slug=${encodeURIComponent(slug)}`));
  }, [slug]);
  useEffect(() => {
    contents && setContentsResource(
      fetch(`/api/contents?slug=${encodeURIComponent(slug)}`)
    );
  }, [contents, slug]);
  return <Book
    bookResource={bookResource}
    contentsResource={contentsResource}
    contents={contents} />
}

export default BookLoader;

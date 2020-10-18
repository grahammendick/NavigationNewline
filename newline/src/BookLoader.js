import React, {useEffect, useState, useContext} from 'react';
import FetchContext from './FetchContext';
const Book = React.lazy(() => import('./Book'));

function BookLoader({slug, contents}) {
  const [bookResource, setBookResource] = useState(null);
  const [contentsResource, setContentsResource] = useState(null);
  const fetch = useContext(FetchContext);
  useEffect(() => {
    setBookResource(fetch(`/api/book?slug=${encodeURIComponent(slug)}`));
  }, [slug, fetch]);
  useEffect(() => {
    contents && setContentsResource(
      fetch(`/api/contents?slug=${encodeURIComponent(slug)}`)
    );
  }, [contents, slug, fetch]);
  return <Book
    bookResource={bookResource}
    contentsResource={contentsResource}
    contents={contents} />
}

export default BookLoader;

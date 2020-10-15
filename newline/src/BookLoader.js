import React, {useEffect, useState} from 'react';
const Book = React.lazy(() => import('./Book'));

function BookLoader({slug}) {
  const [bookResource, setBookResource] = useState(null);
  useEffect(() => {
    setBookResource(fetch(`/api/book?slug=${encodeURIComponent(slug)}`));
  }, [slug]);
  return <Book bookResource={bookResource} />
}

export default BookLoader;

import React, {useEffect, useState} from 'react';
const Book = React.lazy(() => import('./Book'));

function BookLoader({slug, contents}) {
  const [bookResource, setBookResource] = useState(null);
  useEffect(() => {
    setBookResource(fetch(`/api/book?slug=${encodeURIComponent(slug)}`));
  }, [slug]);
  return <Book
    bookResource={bookResource}
    slug={slug}
    contents={contents} />
}

export default BookLoader;

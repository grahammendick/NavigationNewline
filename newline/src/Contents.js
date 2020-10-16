import React, {useState, useEffect} from 'react';

function Contents({slug}) {
  const [chapters, setChapters] = useState(null);
  useEffect(() => {
    fetch(`/api/contents?slug=${encodeURIComponent(slug)}`)
      .then(res => res.json())
      .then(setChapters)
  }, [slug]);
  return chapters && (
    <ol className="contents">
      {chapters.map(chapter => (
        <li key={chapter.title}>
          {chapter.title}
        </li>
      ))}
    </ol>
  );
}

export default Contents;

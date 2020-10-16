import React, {useState, useEffect} from 'react';

function Contents({slug}) {
  const [contents, setContents] = useState(null);
  useEffect(() => {
    fetch(`/api/contents?slug=${encodeURIComponent(slug)}`)
      .then(res => res.json())
      .then(setContents)
  }, [slug]);
  return contents && (
    <ol className="contents">
      {contents.map(chapter => (
        <li key={chapter.name}>
          {chapter.name}
        </li>
      ))}
    </ol>
  );
}

export default Contents;

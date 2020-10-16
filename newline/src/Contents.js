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
          {chapter.sections && <ol>
            {chapter.sections.map(section => (
              <li key={section}>
                <div><span>{section}</span></div>
              </li>
            ))}
          </ol>}
        </li>
      ))}
    </ol>
  );
}

export default Contents;

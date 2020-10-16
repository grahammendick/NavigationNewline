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
                {section}
              </li>
            ))}
          </ol>}
        </li>
      ))}
    </ol>
  );
}

export default Contents;

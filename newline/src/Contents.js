import React, {useState, useEffect} from 'react';

function Contents({slug}) {
  const [chapters, setChapters] = useState(null);
  useEffect(() => {
    fetch(`/api/contents?slug=${encodeURIComponent(slug)}`)
      .then(res => res.json())
      .then(setChapters)
  }, [slug]);
  return chapters && (
    <ol>
      {chapters.map((chapter, i) => (
        <li key={chapter.title}>
          <div><span>{chapter.title}</span><span>{i+1}</span></div>
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

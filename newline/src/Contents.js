import React, {useState, useEffect} from 'react';

function Contents({contentsResource}) {
  const [chapters, setChapters] = useState(null);
  useEffect(() => {
    contentsResource && contentsResource
      .then(res => res.json())
      .then(setChapters)
  }, [contentsResource]);
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

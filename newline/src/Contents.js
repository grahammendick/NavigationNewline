import React, {useState, useEffect} from 'react';
import {RefreshLink} from 'navigation-react';

function Contents({contentsResource, contents}) {
  const [chapters, setChapters] = useState(null);
  useEffect(() => {
    if (contentsResource) {
      contentsResource
        .then(res => res.json())
        .then(setChapters);
    } else {
      setChapters(null);
    }
  }, [contentsResource]);
  return (
    <div className="contents">
      <RefreshLink
        navigationData={{contents: !contents}}
        includeCurrentData={true}>
        <h2>Table of Contents</h2>
      </RefreshLink>
      {chapters && (
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
        </ol>)}
    </div>
  );
}

export default Contents;

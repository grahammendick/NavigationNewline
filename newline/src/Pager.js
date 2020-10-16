import React from 'react';
import {RefreshLink} from 'navigation-react';

function Pager({total}) {
  return (
    <ol className="pager">
      {Array(Math.ceil(total / 5)).fill(0).map((_, i) => (
        <li key={i}>
          <RefreshLink
            navigationData={{ page: i + 1 }}
            includeCurrentData={true}
            disableActive={true}>
            {i + 1}
          </RefreshLink>
        </li>
      ))}
    </ol>
  )
}

export default Pager;

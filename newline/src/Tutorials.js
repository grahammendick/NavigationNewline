import React, {useEffect, useState, useContext} from 'react';
import FetchContext from './FetchContext';
import Pager from './Pager';

function Tutorials({page}) {
  const [tutorials, setTutorials] = useState([]);
  const [total, setTotal] = useState(0);
  const fetch = useContext(FetchContext);
  useEffect(() => {
    fetch(`/api/tutorials?page=${encodeURIComponent(page)}`)
      .then(res => res.json())
      .then(({tutorials, total}) => {
        setTutorials(tutorials);
        setTotal(total);
      })
  }, [page, fetch]);
  return (
    <>
      <h1>Our Tutorials</h1>
      <ul className="tutorials">
        {tutorials.map(tutorial => (
          <li key={tutorial.title}>
            <h2>{tutorial.title}</h2>
            <div>{tutorial.date}</div>
          </li>
        ))}
      </ul>
      <Pager total={total} />
    </>
  );
}

export default Tutorials;

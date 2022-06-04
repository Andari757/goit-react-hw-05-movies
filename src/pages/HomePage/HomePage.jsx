import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
export default function HomePage() {
  const [trending, setTrending] = useState({
    items: [],
    loading: false,
    error: null
  });

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setTrending(prevState => ({ ...prevState, loading: true }));
        const data = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=453647fe51ddb15dbe812a48a21b448b')
        setTrending(prevState => ({ ...prevState, loading: false, items: data.data.results }));
      } catch (error) {
        setTrending(prevState => ({ ...prevState, loading: false, error: error.message }))
      }
    };
    fetchTrending();
  }, [setTrending]);
  const location = useLocation();
  const elements = trending.items.map(e => <Link state={{ from: location }} key={e.id} to={`/movies/${e.id}`}><li >{e.title}</li></Link>);
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {elements}
      </ul>
    </div>
  )
}

HomePage.propTypes = {
  // bla: PropTypes.string,
};

HomePage.defaultProps = {
  // bla: 'test',
};


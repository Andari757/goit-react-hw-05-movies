

import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from 'modules/MovieList/MovieList';
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
  return (
    <div>
      <h2>Trending today</h2>
      {trending.loading && <p>...loading</p>}
      {trending.items?.length && <MovieList data={trending.items} />}
    </div>
  )
}


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieDetails from 'modules/MovieDetails/MovieDetails';
export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({
    data: {},
    loading: false,
    error: null
  });
  const { id } = useParams();


  useEffect(() => {

    const fetchMovie = async () => {
      try {

        setMovie(prevState => ({ ...prevState, loading: true }));
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=453647fe51ddb15dbe812a48a21b448b&language=en-US`)

        setMovie(prevState => ({ ...prevState, loading: false, data }));
      } catch (error) {
        setMovie(prevState => ({ ...prevState, loading: false, error: error.message }))
      }
    };
    fetchMovie();
  }, [id]);

  const location = useLocation();
  return (
    <div>
      {movie.loading && <p>...loading</p>}

      {movie && <MovieDetails movie={movie.data} />}
      <br />
      <Link state={location.state} to="cast" >
        Cast
      </Link>
      <Link state={location.state} to="reviews" >
        Reviews
      </Link>
    </div>
  )
}

MovieDetailsPage.propTypes = {
  // bla: PropTypes.string,
};

MovieDetailsPage.defaultProps = {
  // bla: 'test',
};


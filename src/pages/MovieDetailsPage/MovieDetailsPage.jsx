import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieDetails from 'modules/MovieDetails/MovieDetails';
import ButtonBack from 'modules/ButtonBack/ButtonBack';
import s from "./styles.module.css"
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

  return (
    <div className={s.container}>
      <ButtonBack />
      {movie.loading && <p>...loading</p>}

      {movie.data?.title && <MovieDetails movie={movie.data} />}
      <Link className={s.link} to="cast" >
        Cast
      </Link>
      <Link className={s.link} to="reviews" >
        Reviews
      </Link>
      <Outlet />
    </div>
  )
}


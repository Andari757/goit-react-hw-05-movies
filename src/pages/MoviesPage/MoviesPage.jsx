import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "modules/MovieList/MovieList";
import SearchForm from "modules/SearchForm/SearchForm";
import axios from "axios";

export default function MoviesPage() {
    const [movies, setMovies] = useState({
        items: [],
        loading: false,
        error: null
    });
    const [key, setKey] = useSearchParams();
    const query = key.get("query");
    useEffect(() => {
        const fetchMovies = async () => {
            setMovies((prevState) => ({ ...prevState, loading: true }));
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=453647fe51ddb15dbe812a48a21b448b&language=en-US&query=${query}&page=1&include_adult=false`)
                setMovies((prevState) => ({
                    ...prevState,
                    loading: false,
                    items: data.results,
                }));
            } catch (error) {
                setMovies((prevState) => ({
                    ...prevState,
                    loading: false,
                    error: error.message,
                }));
            }
        };
        if (query) {
            fetchMovies();
        }
    }, [query]);

    const onSubmit = (query) => {
        setKey({ query })
    };
    return (
        <>
            <SearchForm onSubmit={onSubmit} />
            {movies.loading && <p>...loading</p>}
            {movies.items?.length > 0 && <MovieList data={movies.items} />}
        </>
    );
};


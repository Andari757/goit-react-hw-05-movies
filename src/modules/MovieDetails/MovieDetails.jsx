import { useLocation, useNavigate } from "react-router-dom";
export default function MovieDetails({ movie }) {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || "/";
    const back = () => navigate(from);
    const getPoster = () => movie?.poster_path ? "https://image.tmdb.org/t/p/w500" + movie?.poster_path : null
    return (
        <>
            <button onClick={back}>Go back</button>
            <img src={getPoster()} alt={`${movie.title} poster`} />
            <h2>{movie.title}</h2>
            <span>User Score: {movie.vote_average * 10}% </span>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <span>{movie.genres?.map(e => e.name).join(", ")}</span>
        </>
    )
}
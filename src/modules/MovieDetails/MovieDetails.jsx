import s from "./styles.module.css"
export default function MovieDetails({ movie }) {

    const getPoster = () => movie?.poster_path ? "https://image.tmdb.org/t/p/w500" + movie?.poster_path : null
    return (
        <>

            <div className={s.container}>
                <img className={s.img} src={getPoster()} alt={`${movie.title} poster`} />
                <div className={s.info}>
                    <h2>{movie.title}</h2>
                    <span>User Score: {movie.vote_average * 10}% </span>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h4>Genres</h4>
                    <span>{movie.genres?.map(e => e.name).join(", ")}</span>
                </div>
            </div>
        </>
    )
}
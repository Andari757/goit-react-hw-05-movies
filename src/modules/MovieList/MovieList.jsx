import MovieListItem from "./MovieListItem/MovieListItem"
import s from "./styles.module.css"
export default function MovieList({ data }) {
    return (<ul className={s.list}>
        {data.map(e => <MovieListItem data={e} key={e.id} />)}
    </ul>)
}
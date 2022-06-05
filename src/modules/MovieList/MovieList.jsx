import MovieListItem from "./MovieListItem/MovieListItem"
import PropTypes from 'prop-types';
import s from "./styles.module.css"
export default function MovieList({ data }) {
    return (<ul className={s.list}>
        {data.map(e => <MovieListItem data={e} key={e.id} />)}
    </ul>)
}
MovieList.defaultProps = {
    data: [],
};
MovieList.propTypes = {
    movie: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }))
}
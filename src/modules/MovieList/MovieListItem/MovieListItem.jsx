import { Link, useLocation } from "react-router-dom";
import s from "./styles.module.css"
export default function MovieListItem({ data }) {
    const location = useLocation();
    return (<li className={s.item} ><Link state={{ from: location }} to={`/movies/${data.id}`}>{data.title}</Link></li>)

}       
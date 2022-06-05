import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles.module.css"
import { items } from "./items";
export default function Menu() {
  const location = useLocation()
  const getActiveLink = ({ isActive }) => isActive ? styles.linkActive : styles.link;
  const elements = items.map(({ id, to, text }) => (
    <li className={styles.item} key={id}>
      <NavLink className={getActiveLink} state={{ from: location }} to={to}>{text}</NavLink>
    </li>
  ))

  return (
    <ul className={styles.menu}>
      {elements}
    </ul>
  )

}

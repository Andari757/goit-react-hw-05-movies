import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from "./styles.module.css"
import { items } from "./items";
export default function Menu() {
  const getActiveLink = ({ isActive }) => isActive ? styles.linkActive : styles.link;
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getActiveLink} to={to}>{text}</NavLink>
    </li>
  ))

  return (
    <ul className={styles.menu}>
      {elements}
    </ul>
  )

}
Menu.propTypes = {
  // bla: PropTypes.string,
};

Menu.defaultProps = {
  // bla: 'test',
};



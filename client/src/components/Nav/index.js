import styles from "./Tab.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.tabs}>
      <NavLink to='/musics' activeClassName={styles.activeItem}>
        Top Albums
      </NavLink>
    </div>
  );
};

export default Nav;

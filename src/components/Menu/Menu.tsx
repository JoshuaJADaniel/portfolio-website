import {
  Link,
  matchPath,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import menuOptions from "./menuOptions";
import styles from "./Menu.module.scss";

const Menu = ({ location: { pathname } }: RouteComponentProps) => (
  <nav className={styles.container}>
    {menuOptions.map((item) => {
      const match = matchPath(item.path, { path: pathname, exact: true });
      const linkStyle = match ? styles.navLinkActive : styles.navLinkInactive;

      return (
        <Link
          to={item.path}
          key={`menu-${item.text}`}
          className={`${styles.navLink} ${linkStyle}`}
        >
          <div className={styles.innerLinkWrapper}>
            <span className={styles.iconWrapper}>
              {item.icon(Boolean(match))}
            </span>
            {item.text}
          </div>
        </Link>
      );
    })}
  </nav>
);

export default withRouter(Menu);

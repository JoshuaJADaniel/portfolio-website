import { Link } from "react-router-dom";

import Search from "components/Search";

import imgMenu from "images/header-menu-icon.svg";
import imgLogo from "images/google-logo.svg";
import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.container}>
    <div className={styles.leftControls}>
      <Link to="/" className={styles.logoLink}>
        <img alt="Google Logo" src={imgLogo} className={styles.logo} />
      </Link>
      <Search />
    </div>
    <div className={styles.rightControls}>
      <img alt="Menu Icon" src={imgMenu} className={styles.btnControl} />
      <button className={styles.btnSignIn}>Sign in</button>
    </div>
  </header>
);

export default Header;

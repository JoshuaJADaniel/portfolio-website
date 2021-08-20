import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.container}>
    <p>
      Copyright &copy; {new Date().getFullYear()} Joshua Daniel. All rights
      reserved.
    </p>
    <a href="#">View Source Code</a>
  </footer>
);

export default Footer;

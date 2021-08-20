import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.container}>
    <p>Copyright &copy; 2021 Joshua Daniel. All rights reserved.</p>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/joshuajadaniel/portfolio-website"
    >
      View Source Code
    </a>
  </footer>
);

export default Footer;

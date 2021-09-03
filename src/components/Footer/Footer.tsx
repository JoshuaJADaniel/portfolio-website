import ExternalLink from "components/ExternalLink";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.container}>
    <p>Copyright &copy; 2021 Joshua Daniel. All rights reserved.</p>
    <ExternalLink link="https://github.com/joshuajadaniel/portfolio-website">
      View Source Code
    </ExternalLink>
  </footer>
);

export default Footer;

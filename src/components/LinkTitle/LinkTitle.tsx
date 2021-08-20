import formatLink from "utils/formatLink";
import styles from "./LinkTitle.module.scss";

interface LinkTitleProps {
  title: string;
  link: string;
  className?: string;
}

const LinkTitle = ({ title, link, className, ...other }: LinkTitleProps) => (
  <a
    href={link}
    className={`${styles.linkContainer} ${className}`}
    rel="noreferrer"
    target="_blank"
    {...other}
  >
    <p>{formatLink(link)}</p>
    <h3>{title}</h3>
  </a>
);

export default LinkTitle;

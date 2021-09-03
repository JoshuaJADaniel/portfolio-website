import formatLink from "utils/formatLink";
import ExternalLink from "components/ExternalLink";
import styles from "./LinkTitle.module.scss";

interface LinkTitleProps {
  title: string;
  link: string;
  className?: string;
}

const LinkTitle = ({ title, link, className, ...other }: LinkTitleProps) => (
  <ExternalLink
    link={link}
    className={`${styles.linkContainer} ${className}`}
    {...other}
  >
    <p>{formatLink(link)}</p>
    <h3>{title}</h3>
  </ExternalLink>
);

export default LinkTitle;

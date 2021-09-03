import LinkTitle from "components/LinkTitle";
import styles from "./WorkItem.module.scss";

interface WorkItemProps {
  link: string;
  title: string;
  description: string | JSX.Element;
  className?: string;
}

const WorkItem = ({
  link,
  title,
  description,
  className,
  ...other
}: WorkItemProps) => (
  <div className={`${styles.container} ${className}`} {...other}>
    <LinkTitle className={styles.linkOverrides} title={title} link={link} />
    <p>{description}</p>
  </div>
);

export default WorkItem;

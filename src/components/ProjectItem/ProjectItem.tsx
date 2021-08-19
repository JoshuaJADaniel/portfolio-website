import Chip from "components/Chip";
import formatLink from "utils/formatLink";
import styles from "./ProjectItem.module.scss";

interface ProjectItemProps {
  title: string;
  link: string;
  technologies: string[];
  description: string;
  thumbnail: string;
  className?: string;
}

const ProjectItem = ({
  title,
  link,
  technologies,
  description,
  thumbnail,
  className,
  ...other
}: ProjectItemProps) => (
  <div className={`${styles.container} ${className}`} {...other}>
    <div
      className={styles.thumbnail}
      style={{ backgroundImage: `url(${thumbnail})` }}
    />
    <div>
      <a href={link} className={styles.linkContainer}>
        <p>{formatLink(link)}</p>
        <h3>{title}</h3>
      </a>
      <div className={styles.techContainer}>
        {technologies.map((tech) => (
          <Chip className={styles.chipOverrides} text={tech} />
        ))}
      </div>
      <p>{description}</p>
    </div>
  </div>
);

export default ProjectItem;

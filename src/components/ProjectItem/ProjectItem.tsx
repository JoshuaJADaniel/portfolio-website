import Chip from "components/Chip";
import LinkTitle from "components/LinkTitle";
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
      <LinkTitle className={styles.linkOverrides} title={title} link={link} />
      <div className={styles.techContainer}>
        {technologies.map((tech) => (
          <Chip
            text={tech}
            key={`${title} - ${tech}`}
            className={styles.chipOverrides}
          />
        ))}
      </div>
      <p>{description}</p>
    </div>
  </div>
);

export default ProjectItem;

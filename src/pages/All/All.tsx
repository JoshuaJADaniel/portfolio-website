import FadeIn from "react-fade-in";

import ResultCount from "components/ResultCount";
import KnowledgePanel from "components/KnowledgePanel";
import ProjectItem from "components/ProjectItem";
import WorkItem from "components/WorkItem";

import experiences from "content/experiences";
import projects from "content/projects";
import profile from "content/profile";

import styles from "./All.module.scss";

const All = () => (
  <>
    <ResultCount count={experiences.length + projects.length} />
    <FadeIn className={styles.sidebar}>
      <KnowledgePanel {...profile} />
    </FadeIn>
    <FadeIn className={styles.content}>
      <h3>Experience</h3>
      {experiences.map((details) => (
        <WorkItem
          key={details.title}
          className={styles.itemOverrides}
          {...details}
        />
      ))}
      <div className={styles.sectionSpacer} />
      <h3>Projects</h3>
      {projects.map((details) => (
        <ProjectItem
          key={details.title}
          className={styles.itemOverrides}
          {...details}
        />
      ))}
    </FadeIn>
  </>
);

export default All;

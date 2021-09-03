import FadeIn from "react-fade-in";

import KnowledgePanel from "components/KnowledgePanel";
import ProjectItem from "components/ProjectItem";
import WorkItem from "components/WorkItem";
import Layout from "components/Layout";

import experiences from "content/experiences";
import projects from "content/projects";
import knowledgePanelInfo from "content/knowledgePanelInfo";

import styles from "./All.module.scss";

const All = () => (
  <>
    <FadeIn className={styles.sidebar}>
      <KnowledgePanel {...knowledgePanelInfo} />
    </FadeIn>
    <Layout count={experiences.length + projects.length}>
      <h3>Experience</h3>
      {experiences.map((details) => (
        <WorkItem
          key={details.title}
          className={styles.itemOverrides}
          {...details}
        />
      ))}
      <h3 className={styles.sectionSpacer}>Projects</h3>
      {projects.map((details) => (
        <ProjectItem
          key={details.title}
          className={styles.itemOverrides}
          {...details}
        />
      ))}
    </Layout>
  </>
);

export default All;

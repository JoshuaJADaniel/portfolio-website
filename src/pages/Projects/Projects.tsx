import Layout from "components/Layout";
import ProjectItem from "components/ProjectItem";
import projects from "content/projects";
import styles from "./Projects.module.scss";

const Projects = () => (
  <Layout count={projects.length}>
    {projects.map((details) => (
      <ProjectItem
        key={details.title}
        className={styles.itemOverrides}
        {...details}
      />
    ))}
  </Layout>
);

export default Projects;

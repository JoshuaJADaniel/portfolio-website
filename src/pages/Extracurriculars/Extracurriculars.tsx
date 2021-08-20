import Layout from "components/Layout";
import ProjectItem from "components/ProjectItem";
import extracurriculars from "content/extracurriculars";
import styles from "./Extracurriculars.module.scss";

const Extracurriculars = () => (
  <Layout count={extracurriculars.length}>
    {extracurriculars.map((details) => (
      <ProjectItem
        key={details.title}
        className={styles.itemOverrides}
        {...details}
      />
    ))}
  </Layout>
);

export default Extracurriculars;

import Layout from "components/Layout";
import ProjectItem from "components/ProjectItem";
import activities from "content/activities";
import styles from "./Activities.module.scss";

const Activities = () => (
  <Layout count={activities.length}>
    {activities.map((details) => (
      <ProjectItem
        key={details.title}
        className={styles.itemOverrides}
        {...details}
      />
    ))}
  </Layout>
);

export default Activities;

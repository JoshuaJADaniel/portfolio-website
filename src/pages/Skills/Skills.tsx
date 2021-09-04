import React from "react";

import FadeIn from "react-fade-in";
import Layout from "components/Layout";
import Chip from "components/Chip";
import skills from "content/skills";

import styles from "./Skills.module.scss";

const Skills = () => {
  let count = 0;
  skills.forEach(({ items }) => (count += items.length));

  return (
    <Layout count={count}>
      {skills.map(({ title, items }) => (
        <React.Fragment key={`skills-page-${title}`}>
          <h3>{title}</h3>
          <FadeIn className={styles.chipContainer}>
            {items.map((skill) => (
              <Chip
                text={skill}
                key={`skills-page-${skill}`}
                className={styles.chipOverrides}
              />
            ))}
          </FadeIn>
          <div className={styles.sectionSpacer} />
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default Skills;

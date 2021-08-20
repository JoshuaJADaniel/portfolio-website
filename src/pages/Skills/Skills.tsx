import FadeIn from "react-fade-in";

import Chip from "components/Chip";
import ResultCount from "components/ResultCount";
import skills from "content/skills";

import styles from "./Skills.module.scss";

const Skills = () => {
  let count = 0;
  skills.forEach(({ items }) => (count += items.length));

  return (
    <>
      <ResultCount count={count} />
      <FadeIn className={styles.container}>
        {skills.map(({ title, items }) => (
          <>
            <h3>{title}</h3>
            <FadeIn className={styles.chipContainer}>
              {items.map((skill) => (
                <Chip
                  key={skill}
                  text={skill}
                  className={styles.chipOverrides}
                />
              ))}
            </FadeIn>
            <div className={styles.sectionSpacer} />
          </>
        ))}
      </FadeIn>
    </>
  );
};

export default Skills;

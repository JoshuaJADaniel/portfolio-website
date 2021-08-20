import { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import getResultCountText from "utils/getResultCountText";
import styles from "./ResultCount.module.scss";

interface ResultCountProps {
  count: number;
}

const ResultCount = ({ count }: ResultCountProps) => {
  const [text, setText] = useState("Loading...");
  useEffect(() => setText(getResultCountText(count)), [count, text]);

  return (
    <FadeIn>
      <p className={styles.resultCount}>{text}</p>
    </FadeIn>
  );
};

export default ResultCount;

import { useEffect, useState } from "react";
import getResultCountText from "utils/getResultCountText";
import styles from "./ResultCount.module.scss";

interface ResultCountProps {
  count: number;
  className?: string;
}

const ResultCount = ({ count, className }: ResultCountProps) => {
  const [text, setText] = useState("Loading...");
  useEffect(() => setText(getResultCountText(count)), [count, text]);
  return <p className={`${styles.resultCount} ${className}`}>{text}</p>;
};

export default ResultCount;

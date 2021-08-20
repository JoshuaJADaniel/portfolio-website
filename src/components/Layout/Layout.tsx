import React from "react";
import FadeIn from "react-fade-in";
import ResultCount from "components/ResultCount";
import styles from "./Layout.module.scss";

interface LayoutProps {
  count: number;
  children: React.ReactNode;
}

const Layout = ({ count, children }: LayoutProps) => (
  <>
    <ResultCount count={count} />
    <FadeIn className={styles.container}>{children}</FadeIn>
  </>
);

export default Layout;

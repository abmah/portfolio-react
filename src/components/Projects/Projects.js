import React from "react";
import Dizcord from "./Dizcord/Dizcord";
import Vscode from "./Vscode/Vscode";
import styles from "./projects.module.css";
import { useInView } from "react-intersection-observer";
import Bugs from "./Bugs/Bugs";
export default function Projects() {
  const { ref, inView } = useInView();
  return (
    <>
      <div ref={ref} className={inView ? styles.show1 : styles.hide1}>
        <div className={styles.projectHeader}>personal projects</div>
      </div>
      <Dizcord />
      <div className={styles.space} />
      <Bugs />
      <div className={styles.space} />
      <Vscode />
      <div className={styles.space} />
    </>
  );
}

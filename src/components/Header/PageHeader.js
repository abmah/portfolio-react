import styles from "./Header.module.css";
import { useState } from "react";

export default function PageHeader() {
  const [shouldHeaderMinimize, setShouldHeaderMinimize] = useState(false);

  function scrollToProjects(pixles) {
    window.scrollTo({
      top: pixles,
      behavior: "smooth",
    });
  }
  const [LightMode, setLightMode] = useState(false);
  function LightDarkMode() {
    setLightMode(!LightMode);
    console.log(LightMode);
  }

  return (
    <div className={styles.header}>
      <div className={styles.NameAndTitle}>
        <div
          className={
            shouldHeaderMinimize
              ? styles.HeaderNameContainerSmall
              : styles.HeaderNameContainer
          }
        >
          <span className={styles.HeaderName}>A</span>
          <span className={styles.HeaderName}>.</span>
          <span className={styles.HeaderName}>B</span>
          <span
            onClick={LightDarkMode}
            className={`${styles.HeaderName} ${styles.dot}`}
          >
            .
          </span>
        </div>
        {/* <div className={styles.HeaderTitle}>full-stack developer</div> */}
      </div>
      <div
        className={
          shouldHeaderMinimize ? styles.HeaderMenuSmall : styles.HeaderMenu
        }
      >
        <ul className={styles.MenuList}>
          <li onClick={() => scrollToProjects(3810)}>projects</li>
          <li onClick={() => scrollToProjects(5010)}>contact</li>
        </ul>
      </div>
    </div>
  );
}

// useEffect(() => {
//   window.onscroll = function () {
//     scrollFunction();
//   };
// }, []);

// function scrollFunction() {
//   if (document.documentElement.scrollTop > 290) {
//     // activate

//     setShouldHeaderMinimize(true);
//   }
//   if (document.documentElement.scrollTop < 10) {
//     setShouldHeaderMinimize(false);
//   }
// }

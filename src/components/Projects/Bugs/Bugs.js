import styles from "./bugs.module.css";
import Bugs from "../../../images/bugs.png";
// @ts-ignore
import Tilt from "react-vanilla-tilt";
import { DiGithubBadge } from "react-icons/di";
import { useInView } from "react-intersection-observer";

export default function Dizcord() {
  const picStyles = {
    width: "fit-content",
    height: "fit-content",
  };

  const { ref: titleRef, inView: titleInView } = useInView({ delay: 50 });
  const { ref: linksRef, inView: linksInView } = useInView({ delay: 100 });
  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    delay: 50,
  });
  const { ref: imageRef, inView: imageInView } = useInView({ delay: 100 });
  const { ref: secondRef, inView: secondInView } = useInView({ delay: 50 });

  return (
    <div className={styles.Project}>
      <div className={styles.imagesContainer}>
        <div ref={imageRef} className={imageInView ? styles.show : styles.hide}>
          <Tilt
            options={{ transition: false, reset: false }}
            style={picStyles}
            className={styles.dizcordImage1}
          >
            <div>
              <img className={styles.dizcordImage1} src={Bugs} />
              <div className={styles.dizcordButton1}>!!</div>
            </div>
          </Tilt>
        </div>
        <div className="textGroup">
          <div className={styles.linkandtitle}>
            <div
              ref={titleRef}
              className={titleInView ? styles.show : styles.hide}
            >
              <h1 className={styles.mainTitle}>Bugs*in progress</h1>
            </div>
            <div
              ref={linksRef}
              className={linksInView ? styles.show : styles.hide}
            >
              <div className={styles.Dizcordlinks}>
                <a
                  href="https://bugs-omega.vercel.app/
"
                  className={styles.dizcordlink}
                >
                  live-demo
                </a>
                <a
                  href="https://github.com/abmah/Bugs"
                  className={styles.dizcordlink}
                >
                  code <DiGithubBadge className={styles.githubLogo} />
                </a>
              </div>
            </div>
          </div>
          <div
            ref={descriptionRef}
            className={descriptionInView ? styles.show : styles.hide}
          >
            <p className={styles.DizcordParagraph}>
              Bugs is an online store of insects that utilises creative
              transition techniques to make moving between pages easy and
              seamless.
            </p>
          </div>

          {/* <img src="https://i.imgur.com/vqOyN2l.gif" /> */}
          <div
            ref={secondRef}
            className={secondInView ? styles.show : styles.hide}
          >
            <p className={styles.DizcordParagraph2}>
              This project was built using React, Redux, and React-Router.
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.partSection}></div> */}
    </div>
  );
}

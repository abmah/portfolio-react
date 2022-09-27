import styles from "./Dizcord.module.css";
import DizcordImage from "../../../images/dizcord.gif";
// @ts-ignore
import Tilt from "react-vanilla-tilt";
import { DiGithubBadge } from "react-icons/di";
import { useInView } from "react-intersection-observer";

export default function Dizcord() {
  const picStyles = {
    width: "fit-content",
    height: "fit-content",
  };

  const { ref: titleRef, inView: titleInView } = useInView({
    delay: 50,
  });
  const { ref: linksRef, inView: linksInView } = useInView({
    delay: 100,
  });
  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    delay: 50,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    delay: 100,
  });
  const { ref: secondRef, inView: secondInView } = useInView({
    delay: 50,
  });

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
              <img className={styles.dizcordImage1} src={DizcordImage} />
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
              <h1 className={styles.mainTitle}>Dizcord</h1>
            </div>
            <div
              ref={linksRef}
              className={linksInView ? styles.show : styles.hide}
            >
              <div className={styles.Dizcordlinks}>
                <a
                  href="https://dizcorddds.herokuapp.com/"
                  className={styles.dizcordlink}
                >
                  live-demo
                </a>
                <a
                  href="https://github.com/abmah/dizcord"
                  className={styles.dizcordlink}
                >
                  code <DiGithubBadge className={styles.githubLogo} />
                </a>
                <a
                  href="https://dizcord-client-2.vercel.app/"
                  className={styles.dizcordlink}
                >
                  Frontend only version
                </a>
                <a
                  href="https://youtu.be/Cs6K4BbVSu0"
                  className={styles.dizcordlink}
                >
                  video preview
                </a>
              </div>
            </div>
          </div>
          <div
            ref={descriptionRef}
            className={descriptionInView ? styles.show : styles.hide}
          >
            <div className={styles.DizcordParagraph2}>
              this app is hosted on heroku and the free teir is going away so if
              its not working then thats why.
            </div>
            <p className={styles.DizcordParagraph}>
              Dizcord is a full-stack web chatting program that lets users read
              other peoples messages as they type.
            </p>
          </div>

          {/* <img src="https://i.imgur.com/vqOyN2l.gif" /> */}
          <div
            ref={secondRef}
            className={secondInView ? styles.show : styles.hide}
          >
            <p className={styles.DizcordParagraph2}>
              This app has authentication, a fully functional database, and chat
              rooms. Built using React, React-router, Node, Express, and
              Socket.io
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.partSection}></div> */}
    </div>
  );
}

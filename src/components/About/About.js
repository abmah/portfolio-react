import "./about.css";

import { useInView } from "react-intersection-observer";
export default function About() {
  const [textRef, inView] = useInView({});
  const [textRef1, inView1] = useInView({ delay: 40 });
  const [textRef2, inView2] = useInView({ delay: 80 });
  const [textRef3, inView3] = useInView({ delay: 120 });
  const [textRef4, inView4] = useInView({ delay: 100 });

  return (
    <div className="about-main">
      <div className="about-title">
        <div>
          <div
            ref={textRef}
            className={`about-first ${inView ? "show" : "hide"}`}
          >
            about
          </div>
          <div className="long-info">
            I've always loved to create, and when I started programming, I fell
            in love. I like the feeling of having an idea and being able to see
            it turn into reality, and code made that possible.
          </div>
        </div>
        <div className="about-paragraph">
          <div ref={textRef1} className={` ${inView1 ? "show" : "hide"}`}>
            im a programmer that loves{" "}
          </div>
          <div ref={textRef2} className={`${inView2 ? "show" : "hide"}`}>
            to make <span className="text2">pretty</span> looking{" "}
          </div>{" "}
          <div ref={textRef3} className={`${inView3 ? "show" : "hide"}`}>
            websites using <span className="text1">pretty</span>{" "}
          </div>
          <div ref={textRef4} className={`${inView4 ? "show" : "hide"}`}>
            looking code{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

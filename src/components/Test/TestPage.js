import React, { useEffect, useRef } from "react";
import styles from "./Test.module.css";
import gsap, { Power3 } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./Test.css";
export default function TestPage() {
  gsap.registerPlugin(ScrollTrigger);
  const elementRef = useRef(null);
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(sections, {
      xPercent: -60 * sections.length,
      startAt: { xPercent: 0 },
      scrollTrigger: {
        trigger: ".scroll",
        start: "top top",
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    gsap.to(".box0", {
      duration: 1,
      opacity: 1,
      y: 12,
      x: 30,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: ".box0",
        start: "left center",
        markers: false,
        scrub: true,
        toggleClass: "active",
      },
    });
    gsap.to(".box1", {
      duration: 1,
      opacity: 1,
      x: 30,
      y: -12,
      yoyo: true,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: ".box1",
        start: "left center",
        markers: false,
        scrub: true,

        toggleClass: "active",
      },
    });
    gsap.to(".box2", {
      duration: 4,
      opacity: 1,
      x: 30,
      y: 12,
      rotate: 50,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: ".box2",
        start: "left center",
        toggleActions: "play none none reverse",
        markers: false,
        scrub: true,
        toggleClass: "active",
      },
    });

    ScrollTrigger.refresh();
  }, []);
  //
  return (
    <div className="scroll">
      <div className={styles.introduction}>IM A</div>
      <div className="container">
        <div className="space"></div>
        <div className="panel">
          <div className={styles.firstBlock}>
            <div ref={elementRef} className="box0">
              FRONTEND DEVELOPER
            </div>
            <div className="about-text0"></div>
          </div>
        </div>{" "}
        <div className="space1"></div>
        <div className="panel">
          <div className={styles.firstBlock}>
            <div className="box1">BACKEND DEVELOPER</div>
            <div className="about-text1"></div>
          </div>
        </div>
        <div className="panel">
          <div className={styles.firstBlock}>
            <div className="box2">DESIGNER</div>
            <div className="about-text2"></div>
          </div>
        </div>
        <div className="panel">
          <div className={styles.firstBlock}>
            <div className="box3"></div>
            <div className="about-text2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

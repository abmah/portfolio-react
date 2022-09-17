import React, { useEffect } from "react";
import styles from "./Test.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Vscode from "../Projects/Vscode/Vscode";
export default function TestPage() {
  useEffect(() => {
    //@ts-ignore
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),

      startAt: { xPercent: 0 },
      duration: 0.2,
      scrollTrigger: {
        trigger: ".scroll",
        pin: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        color: "black",
        backgroundColor: "black",
      }}
      className="scroll"
    >
      <div
        style={{
          height: "100px",
          backgroundColor: "red",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          width: "300%",
          display: "flex",
          flexWrap: "nowrap",
        }}
        className="container"
      >
        <div
          style={{
            backgroundColor: "black",
            width: "33%",
            height: "100vh",
          }}
          className="panel"
        >
          {" "}
          <Vscode />
          hello
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: "33%",
            height: "100vh",
          }}
          className="panel"
        >
          bruh
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: "33%",
            height: "100vh",
          }}
          className="panel"
        >
          bruhhh
        </div>
      </div>
    </div>
  );
}

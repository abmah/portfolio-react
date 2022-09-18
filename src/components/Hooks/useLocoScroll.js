import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main-container");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
  }, [start]);
}

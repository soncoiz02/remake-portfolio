"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const MainGlobe = () => {
  const globeRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.to(lineRef.current, {
      scrollTrigger: {
        trigger: lineRef.current,
        start: "center top",
        scrub: 1,
      },
      rotate: 360,
    });
    gsap.to(globeRef.current, {
      scrollTrigger: {
        trigger: globeRef.current,
        start: "-=500",
        scrub: 1,
      },
      scale: 1.2,
    });
  }, []);

  return (
    <div
      ref={globeRef}
      className="flex items-center translate-x-[-50%] translate-y-[-50%] md:top-[50%] top-[30%] md:left-[55%] left-[85%] justify-center absolute z-[1]"
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [0, 1],
          opacity: [0.5, 1],
          rotate: 360,
        }}
        transition={{
          duration: 2,
        }}
        className={`md:w-[500px] md:h-[500px] w-[300px] h-[300px] rounded-[50%] absolute bg-gradient-to-bl from-[#FDC898] to-[#b617ff43] z-30 `}
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [0, 1],
          opacity: [0.5, 1],
        }}
        transition={{
          duration: 1,
        }}
        className={`md:w-[560px] md:h-[560px] w-[350px] h-[350px] rounded-[50%] absolute bg-background z-20 `}
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          rotate: [-120, 360],
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
        className={`md:w-[568px] md:h-[568px] w-[355px] h-[355px] rounded-[50%] absolute line-circle z-10 `}
        ref={lineRef}
      ></motion.div>
    </div>
  );
};

export default MainGlobe;

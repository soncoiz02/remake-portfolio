"use client";

import Globe from "@/components/Globe";
import { useEffect, useRef } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const miniGlobeRef = useRef(null);
  const titleRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "+=200",
        end: "+=400",
        scrub: 1,
      },
      yPercent: 10,
    });
  }, []);

  return (
    <section id="hero" className="w-full h-screen relative z-[10] snap-start">
      <div
        ref={titleRef}
        className="flex flex-col h-full justify-center container mx-auto z-10 px-8 md:px-0"
      >
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            y: [50, 0],
            opacity: [0, 1],
          }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 2,
          }}
          className="md:text-[150px] text-[100px] tracking-tighter-[3px] ml-[-8px] leading-[1] text-white"
        >
          Hello.
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            y: [50, 0],
            opacity: [0, 1],
          }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 2.3,
          }}
          className="md:text-[70px] text-[50px] tracking-tighter-[3px] leading-[1] text-white"
        >
          I’m <span className="text-main-yellow">Tran Son</span>
        </motion.p>
      </div>
      <div className="flex items-center justify-center absolute w-full h-full top-0 left-0 z-20">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            x: isMobile ? [0, -160] : [0, -160, -500],
            y: [0, 60, 200],
            opacity: [0, 1],
          }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 2,
          }}
          ref={miniGlobeRef}
        >
          <Globe />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            x: isMobile ? [0, 100] : [0, -100, -300],
            y: isMobile ? [0, -160] : [0, -60, -250],
            opacity: [0, 1],
          }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 2,
          }}
        >
          <Globe />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            x: isMobile ? [0, 50] : [0, 200, 400],
            y: isMobile ? [0, 280] : [0, -100, -300],
            opacity: [0, 1],
          }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 2,
          }}
        >
          <Globe />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            x: isMobile ? [0, -30] : [0, 160, 650],
            y: isMobile ? [0, -400] : [0, 60, 200],
            opacity: [0, 1],
          }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 2,
          }}
        >
          <Globe />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

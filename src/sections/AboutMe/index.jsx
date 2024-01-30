import GlowLine from "@/components/GlowLine";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import MyImg from "@/assets/imgs/my-img.png";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const AboutMe = () => {
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const aboutRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    gsap.to(descRef.current, {
      scrollTrigger: {
        trigger: descRef.current,
        start: "top center",
        end: "+=200",
        scrub: 1,
      },
      yPercent: 10,
    });
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        scrub: 1,
      },
      yPercent: isMobile ? 0 : -30,
    });
  }, []);

  return (
    <section className="w-full relative h-screen" ref={aboutRef}>
      <div className="container mx-auto md:py-40 py-20 px-8 md:px-0">
        <div className="flex w-full justify-between md:flex-row flex-col">
          <div className="flex flex-col md:w-[50%] w-full z-20" ref={descRef}>
            <div className="flex flex-col gap-y-12">
              <GlowLine />
              <motion.p
                initial={{
                  x: -150,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="md:text-2xl text-lg text-white font-normal"
              >
                I am a web developer with 1 year of work experience. I always
                try to look for opportunities to turn the knowledge learned in
                school into a practical contribution to the company, and at the
                same time improve professional qualifications and working
                skills. I look forward to the opportunity to work in a
                supportive and growing environment.
              </motion.p>
            </div>
            <motion.button
              initial={{
                x: -150,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="cursor-pointer font-medium md:text-2xl text-lg tracking-tighter-[1.25px] text-white px-12 py-4 rounded-xl button-linear self-start md:mt-16 mt-8"
            >
              Download CV
            </motion.button>
          </div>
          <div className="md:w-[50%] w-full flex justify-center md:relative absolute z-10 bottom-0">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
              className="transparent-img overflow-hidden md:h-[500px] mt-16"
              ref={imageRef}
            >
              <Image
                className="md:mr-40"
                src={MyImg}
                width={isMobile ? 200 : 300}
                height={isMobile ? 300 : 400}
                alt="My Image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

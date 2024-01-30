import GlowLine from "@/components/GlowLine";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import CardItem from "./CardItem";
import { skillsData } from "./data";

const Skill = () => {
  const skillRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  useEffect(() => {
    gsap.to(skillRef.current, {
      yPercent: 60,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: skillRef.current,
        start: "top top",
        end: "+=800",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="skills" className="w-full relative overflow-hidden">
      <div className="container mx-auto md:pt-20 pt-10 pb-20 px-8 md:px-0">
        <div className="flex flex-col items-center w-full" ref={skillRef}>
          <div className="flex flex-col items-center w-[300px] gap-y-4">
            <h2 className="text-3xl text-main-yellow uppercase tracking-tighter-[1.5px] font-medium">
              Skills
            </h2>
            <GlowLine />
          </div>
          <div className="flex md:flex-row flex-col justify-center md:mt-16 mt-8 gap-x-16 w-full">
            {skillsData.map((item, index) => (
              <motion.div
                initial={{
                  y: isMobile ? 0 : 100 + index * 10,
                  x: isMobile ? 100 + index * 10 : 0,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.5,
                }}
                viewport={{
                  once: true,
                }}
                key={index}
              >
                <CardItem skillData={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

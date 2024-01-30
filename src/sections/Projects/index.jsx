import GlowLine from "@/components/GlowLine";
import ListProject from "./ListProject";
import { projectData } from "./data";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Project = () => {
  const scroller = useRef();
  const projectRef = useRef();

  useEffect(() => {
    let prjSet = gsap.utils.toArray(".project-item");
    let to = gsap.to(prjSet, {
      xPercent: () => -100 * (prjSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        end: () => "+=" + window.innerWidth,
        snap: 1 / (prjSet.length - 1),
      },
    });

    return () => {
      to.kill();
    };
  }, []);
  return (
    <section
      id="projects"
      className="w-full relative bg-white h-screen overflow-hidden"
      ref={scroller}
    >
      <div className={"overflow-x-hidden relative flex w-[300vw]"}>
        {projectData.map((item, index) => (
          <ListProject projectData={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Project;

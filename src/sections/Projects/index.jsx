import ListProject from "./ListProject";
import { projectData } from "./data";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Project = () => {
  const scroller = useRef();
  const projectRef = useRef();

  useEffect(() => {
    const amountToScroll = projectRef.current.offsetWidth - window.innerWidth;
    let prjSet = gsap.utils.toArray(".project-item");
    let to = gsap.to(prjSet, {
      xPercent: () => -100 * (prjSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        end: () => "+=" + amountToScroll,
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
      <div
        className={"overflow-x-hidden relative flex"}
        style={{
          width: projectData.length * 100 + "vw",
        }}
        ref={projectRef}
      >
        {projectData.map((item, index) => (
          <ListProject projectData={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Project;

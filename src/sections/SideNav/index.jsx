"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NAV_CONTENT = [
  {
    title: "Home",
    directTo: "#hero",
  },
  {
    title: "Services",
    directTo: "#services",
  },
  {
    title: "Skills",
    directTo: "#skills",
  },
  {
    title: "Projects",
    directTo: "#projects",
  },
  {
    title: "Contact",
    directTo: "#contact",
  },
];

const SideNav = () => {
  const [currentHash, setCurrentHash] = useState("#hero");
  const isCurrentHash = (hash) => {
    return currentHash === hash;
  };
  const observer = useRef(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setCurrentHash(`#${visibleSection.id}`);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.current.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  const handleScrollTo = (to) => {
    const lenis = new Lenis();
    lenis.scrollTo(to);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setCurrentHash(to);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 1.5,
        delay: 3,
      }}
      className="fixed top-0 right-16 h-screen z-[100] w-auto"
    >
      <div className="flex flex-col gap-3 items-end justify-center h-[100%]">
        {NAV_CONTENT.map((item, index) => (
          <Link
            href={item.directTo}
            onClick={() => handleScrollTo(item.directTo)}
            className={`text-2xl ${
              isCurrentHash(item.directTo)
                ? "text-main-yellow"
                : "text-main-gray"
            } uppercase font-medium tracking-tighter-[0.5px] cursor-pointer`}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default SideNav;

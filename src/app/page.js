"use client";
import BlankEl from "@/components/BlankEl";
import MainGlobe from "@/components/MainGlobe";
import { StarBg } from "@/components/StarBg";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import AboutMe from "@/sections/AboutMe";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Project from "@/sections/Projects";
import Services from "@/sections/Services";
import SideNav from "@/sections/SideNav";
import Skill from "@/sections/Skills";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <Hero />
      <MainGlobe />
      <AboutMe />
      <Services />
      <Skill />
      <Project />
      <Contact />
      {!isMobile && <SideNav />}
      <StarBg />
    </main>
  );
}

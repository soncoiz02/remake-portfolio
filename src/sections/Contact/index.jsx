import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

import { motion } from "framer-motion";
import gsap from "gsap";

const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.to(formRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      y: 0,
    });
  }, []);
  return (
    <section id="contact" className="relative w-full h-screen" ref={sectionRef}>
      <div className="container mx-auto py-20 px-8 md:px-0">
        <div className="flex w-full">
          <div className="flex flex-col md:w-[50%] w-full">
            <div className="flex flex-col">
              <h2 className="text-3xl text-main-yellow uppercase tracking-tighter-[1.5px] font-medium">
                Contact Me
              </h2>
              <p className="text-main-gray text-xl font-medium tracking-tighter-[1.25px]">
                You can contact by fill out the form and send me a message.
              </p>
            </div>
            <ContactForm formRef={formRef} />
          </div>
          <div className="md:flex hidden relative w-[50%] items-center justify-center">
            <div className="flex items-center justify-center z-[1]">
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
                className={`w-[400px] h-[400px] rounded-[50%] absolute bg-gradient-to-bl from-[#FDC898] to-[#b617ff43] z-30 `}
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
                className={`w-[460px] h-[460px] rounded-[50%] absolute bg-background z-20 `}
              ></motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className={`w-[468px] h-[468px] rounded-[50%] absolute line-circle  z-10 `}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import GlowLine from "@/components/GlowLine";
import { faCode, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="relative w-full h-screen">
      <div className="container mx-auto py-20 px-8 md:px-0 h-full">
        <div className="flex flex-col w-full items-center h-full">
          <div className="flex flex-col items-center w-[300px] gap-y-4">
            <h2 className="text-3xl text-main-yellow uppercase tracking-tighter-[1.5px] font-medium">
              Services
            </h2>
            <GlowLine />
          </div>
          <div className="flex flex-col gap-y-20 md:w-[520px] w-full mt-20">
            <motion.div
              initial={{
                y: -50,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="flex flex-col md:items-start items-center gap-y-2 relative"
            >
              <div className="flex md:flex-row flex-col gap-4 items-center">
                <FontAwesomeIcon
                  className="text-3xl text-[#FDC898]"
                  icon={faCode}
                />
                <h3 className="text-white md:text-[28px] text-2xl font-medium tracking-tighter-[1.25px]">
                  Web Development
                </h3>
              </div>
              <p className="text-main-gray md:text-xl text-center md:text-left text-base font-medium tracking-tighter-[1.25px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit optio nulla neque aspernatur, repudiandae tenetur
                doloremque nihil provident
              </p>
            </motion.div>
            <motion.div
              initial={{
                y: -50,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="flex flex-col md:items-start items-center gap-y-2 relative"
            >
              <div className="flex md:flex-row flex-col gap-4 items-center">
                <FontAwesomeIcon
                  className="text-3xl text-[#B517FF]"
                  icon={faPenNib}
                />
                <h3 className="text-white md:text-[28px] text-2xl font-medium tracking-tighter-[1.25px]">
                  UI/UX Design
                </h3>
              </div>
              <p className="text-main-gray md:text-xl text-center md:text-left text-base font-medium tracking-tighter-[1.25px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit optio nulla neque aspernatur, repudiandae tenetur
                doloremque nihil provident
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

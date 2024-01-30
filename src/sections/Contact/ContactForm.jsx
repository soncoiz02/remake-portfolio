import React from "react";
import { motion } from "framer-motion";
const ContactForm = ({ formRef }) => {
  return (
    <motion.form
      initial={{ y: "50%" }}
      ref={formRef}
      className="flex flex-col gap-y-4 mt-8 w-[80%]"
    >
      <input
        type="text"
        placeholder="Name"
        className="w-full rounded-xl px-4 py-3 outline-none text-white bg-[#524d76]"
      />
      <input
        type="text"
        placeholder="Email"
        className="w-full rounded-xl px-4 py-3 outline-none text-white bg-[#524d76]"
      />
      <textarea
        id=""
        cols="30"
        rows="10"
        className="w-full rounded-xl px-4 py-3 outline-none resize-none text-white bg-[#524d76]"
        placeholder="Message"
      ></textarea>
      <button className="self-center rounded-[50px] py-3 px-12 bg-[#ffb46e] font-medium tracking-tighter-[1.25px] text-white text-xl mt-2">
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;

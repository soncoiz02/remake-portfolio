import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = ({ formRef }) => {
  const formValue = useState({
    name: "",
    email: "",
    messaage: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleSendEmail = async (emailData) => {
    try {
      const result = await emailjs.sendForm(
        "service_07ln17q",
        "template_tamcfw5",
        emailData,
        "uCW7C_Pq-oq2Uohsg"
      );
      console.log(result);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.form
      initial={{ y: "50%" }}
      ref={formRef}
      className="flex flex-col gap-y-4 mt-8 md:w-[80%] w-full"
      onSubmit={onSubmit}
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
      <button
        type="submit"
        className="self-center rounded-[50px] py-3 px-12 bg-[#ffb46e] font-medium tracking-tighter-[1.25px] text-white text-xl mt-2"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;

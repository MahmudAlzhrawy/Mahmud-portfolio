"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TypingText from "./TypeText";

export default function Intro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      id="intro"
      className="
        relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-16
        mx-auto p-10 rounded-4xl shadow-2xl 
        backdrop-blur-sm 
        text-foreground
      "
    >
      {/* LEFT TEXT */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, x: -40 },
          show: {
            opacity: 1,
            x: 0,
            transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <motion.h1
          className="text-left text-4xl md:text-5xl font-bold text-primary"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          Hello,
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          <TypingText text="I am Mahmud Nagy" />
        </motion.h2>

        <motion.h3
          className="text-xl md:text-2xl font-semibold text-secondary tracking-wide"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          <TypingText text="Frontend Developer" />
        </motion.h3>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mt-2"
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
        >
          I craft stunning web experiences that not only look amazing but also
          engage users and drive results. Let’s build something incredible together!
        </motion.p>
      </motion.div>

      {/* RIGHT — LARGE AVATAR WITH GLOW */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center h-96 md:h-[600px]">
        {/* Glow Circle Background */}
        <motion.div
          className="
            absolute w-80 md:w-96 h-80 md:h-96 rounded-full
            bg-linear-to-bl from-primary via-secondary to-purple-900
            blur-3xl opacity-50
          "
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* Fixed Avatar */}
        {/* <div className="relative w-72 md:w-96 h-72 md:h-96 rounded-full overflow-hidden ">
          <Image
            src={`/assets/images/avatar.png`}
            alt="Avatar Not Found"
            fill
            className="object-contain rounded-full"
          />
        </div> */}
      </div>
    </motion.section>
  );
}

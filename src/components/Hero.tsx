"use client";
import { once } from "events";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-[90%] mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mt-24">
      
      {/* الجزء الأيسر: صورة شفافة مع أنيمشن */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative h-80 md:h-[500px]">
        <motion.div
          initial={{ scale: 0, rotate: -10, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{once:false}}
          className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden  bg-linear-to-br from-primary via-secondary to-pink-900 shadow-xl flex items-center justify-center"
        >
          <Image
            src={`/assets/images/avatar.png`}
            alt="Avatar Not Found"
            fill
            className="object-contain h-full rounded-full"
          />
        </motion.div>
      </div>

      {/* الجزء الأيمن: نص و زر */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Bring Your Ideas to Life with a Passionate Frontend Developer
        </h1>
        <p className="text-secondary text-lg md:text-xl leading-relaxed">
          I specialize in creating beautiful, responsive, and high-performance web applications using modern technologies like <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">Next.js</span>, and <span className="text-accent font-semibold">Tailwind CSS</span>.  
          With a keen eye for detail and a passion for design, I ensure every project I work on is not only functional but also visually engaging.  
          Let's collaborate and transform your vision into a digital reality that stands out!
        </p>
        <motion.a
          href="https://wa.me/+201149564002"
          whileHover={{ scale: 1.05 }}
          animate={{scale:[1.1 , 1 ,1.05]}}
          transition={{duration:0.8 ,repeat:Infinity, ease:"easeInOut" }}
          whileTap={{ scale: 0.95 }}
          className="btn w-[150px] mx-auto"
        >
          Hire Me 
          <motion.span
            whileHover={{opacity:1, x:8}}
            transition={{duration:0.6 , ease:"easeInOut" }}
          >
            <FaArrowRight />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}

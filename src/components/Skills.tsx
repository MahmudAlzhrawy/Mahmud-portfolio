"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiVsco,
  SiFramer,
  SiGithub,
  SiFirebase,
  SiNextdotjs,
  SiNestjs,
  SiVercel,
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", icon: <SiHtml5 size={40} color="#E44D26" /> },
      { name: "CSS", icon: <SiCss3 size={40} color="#1572B6" /> },
      { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
      { name: "React", icon: <SiReact size={40} color="#61DBFB" /> },
      { name: "TypeScript", icon: <SiTypescript size={40} color="#007ACC" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
      { name: "Next.js", icon: <SiNextdotjs size={40} color="#FFFFFF" /> },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={40} color="#68A063" /> },
      { name: "Express.js", icon: <SiExpress size={40} color="#444" /> },
      { name: "NestJS", icon: <SiNestjs size={40} color="#E0234E" /> },
      { name: "API Development", icon: <SiFramer size={40} color="#0ea5e9" /> },
    ],
  },
  {
    category: "Database & Cloud",
    skills: [
      { name: "MySQL", icon: <SiMysql size={40} color="#00758F" /> },
      { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
      { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
      { name: "Cloud", icon: <FaCloud size={40} color="#0288D1" /> },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Vercel", icon: <SiVercel size={40} color="#FFFFFF" /> },
      { name: "GitHub", icon: <SiGithub size={40} color="#FFFFFF" /> },
      { name: "Postman", icon: <SiPostman size={40} color="#FF6C37" /> },
      { name: "VS Code", icon: <SiVsco size={40} color="#0078D7" /> },
      { name: "Framer Motion", icon: <SiFramer size={40} color="#0055FF" /> },
    ],
  },
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="
        w-[90%] mx-auto my-24 
        bg-(--primary)/10 backdrop-blur-2xl
        rounded-4xl shadow-2xl p-10 border border-(--secondary)/30
        text-foreground
      "
    >
      <motion.h2
        className="text-4xl font-semibold text-center mb-10 italic text-foreground"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="space-y-6">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-(--background)/30 rounded-3xl p-4 shadow-inner shadow-black/40 cursor-pointer"
          >
            {/* Header Dropdown */}
            <div
              onClick={() => toggleCategory(index)}
              className="flex justify-between items-center px-4 py-2 hover:bg-(--secondary)/20 transition rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {category.category}
              </h3>
              <span className={`text-foreground transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
            </div>

            {/* Skills Grid */}
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mt-4"
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="
                      bg-(--background)/20 hover:bg-(--secondary)/20 
                      rounded-3xl p-6 flex flex-col items-center justify-center
                      cursor-pointer w-32 h-32 transition-all
                    "
                  >
                    <div className="mb-2">{skill.icon}</div>
                    <p className="text-foreground font-medium text-center text-sm">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

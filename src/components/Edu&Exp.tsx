"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaDownload } from "react-icons/fa";

const educationData = [
  {
    title: "Faculty Of Computers And Informations",
    year: "2025",
    description:
      "BS in Computer Science | Graduated with a 3.18 GPA and completed coursework in web development, database management, and software engineering.",
  },
];

const experienceData = [
  {
    title: "Front-End Developer | Self-Employed",
    year: "2023 — Present",
    description:
      "Worked on React projects, creating responsive UI and managing state using Redux.",
  },
  {
    title: "Training | iTi",
    year: "2023 — 2024",
    description: "Assisted in web development and practical training sessions.",
  },
  {
    title: "Recorded Course | Mahara Tech",
    year: "2023 — 2024",
    description: "Worked on back-end development with Node.js and related technologies.",
  },
];

export default function EducationExperience() {
  return (
    <section
      id="cv"
      className="w-[90%] mx-auto my-24 relative z-20 text-foreground"
    >
      <motion.h2
        className="text-4xl font-semibold text-center mb-12 italic text-foreground tracking-wide"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education & Experience
      </motion.h2>

      <div className="flex flex-col md:flex-row md:space-x-16 relative">
        {/* Education Timeline */}
        <div className="flex-1 relative">
          <div className="absolute left-8 top-0 w-1 bg-(--secondary)/40 h-full"></div>
          <div className="space-y-10">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start relative pl-16 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shadow">
                  <FaGraduationCap size={12} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{edu.title}</h3>
                  <span className="text-primary text-sm">{edu.year}</span>
                  <p className="text-(--foreground)/80 mt-1">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="flex-1 relative mt-16 md:mt-0">
          <div className="absolute left-8 top-0 w-1 bg-(--primary)/40 h-full"></div>
          <div className="space-y-10">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start relative pl-16 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white shadow">
                  <FaBriefcase size={12} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{exp.title}</h3>
                  <span className="text-secondary text-sm">{exp.year}</span>
                  <p className="text-(--foreground)/80 mt-1">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Download CV Button */}
      <div className="mt-12 text-center">
        <a
          href="/Mahmud_Nagy.pdf" // ضع هنا مسار ملف الـ CV في public folder
          download
          className="btn"
        >
          <FaDownload /> Download CV
        </a>
      </div>
    </section>
  );
}

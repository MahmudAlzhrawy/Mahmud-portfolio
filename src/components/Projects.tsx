"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const projectsData = [ 
  { name: "Sweetly Shop", image: "/assets/images/sweetly.jpg", description: "E-commerce platform built with React & Redux.", live: "https://sweetly-shop.vercel.app/", github: "https://github.com/MahmudAlzhrawy/Sweetly-Shop", }
  ,{ name: "Graduation Project", image: "/assets/images/graduation.png", description: "University graduation project using Next.js.", live: "https://graduation-project-nu-rosy.vercel.app/", github: "https://github.com/MahmudAlzhrawy/graduation-project", }, 
  { name: "General Admin", image: "/assets/images/Admin.png", description: "Admin dashboard for general management.", live: "https://general-admin.vercel.app/", github: "https://github.com/MahmudAlzhrawy/general-admin", },
   { name: "Restaurant Admin", image: "/assets/images/resturant.png", description: "Restaurant management admin panel built with Next.js.", live: "https://restaurant-admin-tau-opal.vercel.app/", github: "https://github.com/MahmudAlzhrawy/graduation_restaurant_admin", },
    { name: "Team Portfolio", image: "/assets/images/codeverse.png", description: "Portfolio website for a development team.", live: "https://team-portfolio-mauve.vercel.app/", github: "https://github.com/MahmudAlzhrawy/team_portfolio", },
    { name: "Alnoor Sys", image: "/assets/images/Alnoorsys.png", description: "Business management system for Alnoor company.", live: "https://alnoorsys.vercel.app/", github: "https://github.com/MahmudAlzhrawy/Alnoorsys", },
     { name: "Recycle Solutions", image: "/assets/images/recycle.png", description: "Environment-friendly solutions website.", live: "https://recycle-solutions.vercel.app/en", github: "https://github.com/MahmudAlzhrawy/Recycle-solutions", }, 
    { name: "Z Translator", image: "/assets/images/translatoe.png", description: "PDF translator web app using Node.js.", live: "https://z-translator.vercel.app/", github: "https://github.com/MahmudAlzhrawy/z-translator", }, 
    { name: "E-commerce React", image: "/assets/images/e-comm.jpg", description: "Another React-based e-commerce platform.", live: "https://e-commerce-react-5ced2.web.app/", github: "https://github.com/MahmudAlzhrawy/E-commerce-react", }, ];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      className="
        relative -top-20
        w-[90%] mx-auto my-32
        bg-(--primary)/10 
        backdrop-blur-2xl
        rounded-4xl shadow-2xl p-10 
        border border-(--secondary)/30
        text-foreground
      "
    >
      <h1 className="text-4xl font-semibold italic text-center mb-10 tracking-wide">
        My Portfolio
      </h1>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="pb-14"
      >
        {projectsData.map((project, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="
                relative overflow-hidden rounded-3xl shadow-xl cursor-pointer 
                bg-(--primary)/5 border border-(--secondary)/30 
                flex flex-col md:flex-row h-[420px]
              "
            >
              {/* Glow background like AboutMe */}
              <div
                className="
                  absolute inset-0 opacity-20 blur-2xl
                  bg-linear-to-br from-primary to-secondary
                "
              ></div>

              {/* IMAGE */}
              <div className="md:w-1/2 h-[420px] relative z-10 overflow-hidden bg-black/40">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7 flex flex-col md:w-1/2 z-10 text-(--foreground)/90">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {project.name}
                </h3>

                <p className="mb-6 text-(--foreground)/80 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-primary hover:brightness-125 transition font-medium"
                  >
                    Live <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-(--foreground)/90 hover:text-white transition font-medium"
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}

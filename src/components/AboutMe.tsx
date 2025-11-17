"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
return (
<motion.section
    initial={{ opacity: 0, y: 200 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .2 }}
    transition={{ duration: 0.9 }}
    id="about-me"
    className="about-me-section relative -top-36 
    bg-(--primary)/10
    backdrop-blur-2 xl
    text-foreground
    w-[90%] mx-auto rounded-4xl shadow-2xl p-10 
    border border-(--secondary)/30"
>

    <h1 className="text-4xl font-semibold italic text-center mb-10 tracking-wide text-foreground">
        About Me
    </h1>

    <div className="flex items-center justify-between gap-10 flex-col md:flex-row">

        {/* Text Section */}
        <div className="content md:w-1/2 space-y-4 leading-relaxed text-lg text-(--foreground)/90">
            <p>
            Hello! I'm Mahmud Alzhrawy, a passionate web developer who enjoys crafting
            smooth, intuitive, and visually appealing digital experiences. I love turning
            ideas into clean and functional user interfaces.
            </p>
            <p>
            With a background in computer science, I focus on building fast and
            responsive web applications using modern tools. When I'm not coding, I enjoy
            exploring new technologies, reading, and improving my craft.
            </p>
        </div>

        {/* Image + Decorations */}
        <div className="relative flex justify-center items-center">

            {/* Background Blur Circle */}
            <div className="absolute w-60 h-60 rounded-full 
            bg-linear-to-br from-primary to-secondary
            blur-2xl opacity-40"></div>

            <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 rounded-full p-2 
            bg-(--secondary)/20 
            shadow-inner shadow-black/40 
            border border-(--secondary)/40"
            >
                <Image
                    width={200}
                    height={200}
                    src="/assets/images/main-logo-removebg-preview.png"
                    alt="Profile Picture"
                    className="rounded-full w-48 h-48 object-cover 
                    border-4 border-primary shadow-xl"
                />
            </motion.div>

            {/* Decorative Shapes */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: [0.4, 0.8, 0.4],
                y: [0, -15, 0],
                scale: [0.9, 1.1, 0.9],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="absolute -top-6 -left-6 w-10 h-10 rounded-full 
            border-2 border-primary opacity-50"
            />


            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: [0.3, 0.7, 0.3],
                y: [0, -20, 0],
                scale: [1, 1.15, 1],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full 
            border-2 border-secondary opacity-50"
            />

        </div>
    </div>
</motion.section>
);
}

"use client";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Track scroll to highlight active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.querySelector(link.href));
      const scrollPos = window.scrollY + 200;
      sections.forEach((section, idx) => {
        if (section) {
          const htmlElement = section as HTMLElement;
          if (
            scrollPos >= htmlElement.offsetTop &&
            scrollPos < htmlElement.offsetTop + htmlElement.clientHeight
          ) {
            setActiveSection(links[idx].name.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-[90%] fixed left-1/2 -translate-x-1/2 top-4 rounded-4xl z-50 h-16 bg-gray-900/60 backdrop-blur-md text-white shadow-xl">
      <div className="flex justify-between items-center h-full px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/images/main-logo-removebg-preview.png"
            alt="Logo"
            width={100}
            height={60}
            className="pt-1"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-lg">
          {links.map((link, idx) => (
            <motion.li
              key={idx}
              className="relative group overflow-visible"
              whileHover="hovered"
              initial="initial"
            >
              <Link
                href={link.href}
                className={`relative px-4 py-2 font-medium transition-colors duration-200 rounded-lg ${
                  activeSection === link.name.toLowerCase()
                    ? "text-blue-400 bg-gray-800/40"
                    : "text-white hover:text-blue-400 hover:bg-gray-800/20"
                }`}
              >
                {link.name}
                <motion.span
                  className="absolute inset-0 border-2 border-white rounded-xl pointer-events-none"
                  variants={{
                    initial: { scaleX: 0, scaleY: 0, opacity: 0 },
                    hovered: {
                      scaleX: 1,
                      scaleY: 1,
                      opacity: 1,
                      transition: { duration: 0.4, ease: "easeInOut" },
                    },
                  }}
                  style={{ originX: 0, originY: 0 }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Hire Me Button */}
         <motion.a
                  href="https://wa.me/+201149564002"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn hidden md:flex"
                >
                  Hire Me 
                </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 bg-gray-900/90 backdrop-blur-md rounded-2xl p-5 space-y-4 text-center shadow-xl"
          >
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                  activeSection === link.name.toLowerCase()
                    ? "text-blue-400 bg-gray-800/40"
                    : "text-white hover:text-blue-400 hover:bg-gray-800/20"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-2 px-5 py-2 rounded-2xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-colors">
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

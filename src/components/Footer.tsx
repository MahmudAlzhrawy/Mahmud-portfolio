"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ⚡ يمكن لاحقاً ربطها بـ EmailJS أو API خاص بك
    alert("Message sent successfully!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <footer className="bg-[#0d0d0d] text-gray-300 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* 👈 القسم الأيسر: معلومات التواصل */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-white">Contact Me</h2>
          <p className="text-gray-400">
            Let’s work together on your next project. Reach out anytime!
          </p>

          <div className="flex space-x-6 text-3xl mt-4">
            <a
              href="https://www.linkedin.com/in/mahmud-n-mahmud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MahmudAlzhrawy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:mahmudnagi192003@gmail.com"
              className="hover:text-red-400 transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/+201149564002" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* 👉 القسم الأيمن: نموذج التواصل */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-blue-400 transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all w-full md:w-max"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Mahmoud Nagi. All rights reserved.
      </div>
    </footer>
  );
}

"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";

const Page = () => {
  const formRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const EMAILJS_CONFIG = {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/Pradeep-GS", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/pradeep-g-s-8121322a1/", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/i_pradeep_gs/", color: "hover:text-pink-400" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      if (
        !EMAILJS_CONFIG.SERVICE_ID ||
        !EMAILJS_CONFIG.TEMPLATE_ID ||
        !EMAILJS_CONFIG.PUBLIC_KEY
      ) {
        throw new Error("EmailJS environment variables are missing!");
      }

      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });

        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);

      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus({ type: "", message: "" });
      }, 5000);
    }
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen relative overflow-hidden md:pt-20 pt-22">
      <div className="absolute inset-0 bg-linear-to-tr from-[#11071F] via-transparent to-[#1A0B2E]" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex justify-center text-4xl sm:text-5xl lg:text-7xl font-bold mb-16"
      >
        <span className="bg-linear-to-r from-[#763CAC] to-[#320F85] bg-clip-text text-transparent">
          Contact Me
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 lg:px-10">
          {/* Left Side */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
            <h2 className="lg:text-6xl text-4xl font-bold mb-4 text-white">
              Social Media
            </h2>

            <p className="text-white/70 text-lg max-w-md leading-relaxed">
              Connect with me on my social platforms. Let’s build something amazing together
            </p>
            </div>

            <div className="flex gap-6 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`group relative p-3 bg-white/5 rounded-full backdrop-blur-sm transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg space-y-3 mt-2">
                <p className="text-white font-semibold text-lg">Quick Contact</p>

                <p className="text-white/70 text-sm">
                  📍 Karur, India
                </p>

                <p className="text-white/70 text-sm">
                  📧 gspradeep9500@gmail.com
                </p>

                <p className="text-white/70 text-sm">
                  📞 +91 95006 88248
                </p>
              </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#763CAC] focus:ring-2 focus:ring-[#763CAC]/20 transition-all text-white placeholder-gray-400"
                  placeholder="PRADEEP G.S"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#763CAC] focus:ring-2 focus:ring-[#763CAC]/20 transition-all text-white placeholder-gray-400"
                  placeholder="12345 67890"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Mail Id
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#763CAC] focus:ring-2 focus:ring-[#763CAC]/20 transition-all text-white placeholder-gray-400"
                  placeholder="your@mail.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#763CAC] focus:ring-2 focus:ring-[#763CAC]/20 transition-all text-white placeholder-gray-400"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#763CAC] focus:ring-2 focus:ring-[#763CAC]/20 transition-all text-white placeholder-gray-400 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <p
                  className={`text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 bg-linear-to-r from-[#763CAC] to-[#320F85] rounded-lg font-semibold text-white shadow-lg transition-all duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-[#763CAC]/25"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
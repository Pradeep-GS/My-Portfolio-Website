"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Contact, LucideWorkflow } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen relative overflow-hidden md:pt-20 pt-22">

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#11071F] via-transparent to-[#1A0B2E]" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex justify-center text-4xl sm:text-5xl lg:text-7xl font-bold"
      >
        <span className="bg-linear-to-l from-[#763CAC] to-[#320F85] bg-clip-text text-transparent">
          ABOUT ME
        </span>
      </motion.h1>

      <section className="min-h-screen relative w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6">

        <motion.div
          className="w-70 h-70 sm:w-[320px] sm:h-80 lg:w-95 lg:h-95 overflow-hidden rounded-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/pr.png"
            alt="Profile"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold">Hi I'm PRADEEP G.S</h2>
          <p className="text-zinc-300 leading-relaxed text-lg mt-5">
            AI and Data Science student with strong foundations in{" "}
            <span className="text-white font-semibold">Python</span> and{" "}
            <span className="text-white font-semibold">Java</span>. Experienced in
            machine learning, data analysis, and algorithmic problem solving.
            Passionate about building impactful, scalable solutions and
            continuously improving through real-world projects.
          </p>
          <div className="flex items-center gap-3 mt-5">
          <Link href="/projects" className="mt-4 bg-linear-to-r from-[#763CAC] to-[#320F85] px-6 py-3 rounded-lg font-semibold hover:bg-transparent hover:border-[#763CAC] transition flex justify-center items-center gap-2">Projects <span><LucideWorkflow className="w-5 h-5"/></span>    </Link>
          <Link href="/contact" className="mt-4  px-6 py-3 border border-[#763CAC] rounded-lg font-semibold hover:bg-linear-to-r from-[#763CAC] to-[#320F85] transition flex justify-center items-center gap-2">Contact Me <span><Contact className="w-5 h-5"/></span></Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Page;
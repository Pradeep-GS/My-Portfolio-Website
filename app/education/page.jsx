"use client";
import React from "react";
import { motion } from "framer-motion";

const EduDetails = [
  {
    name: "V.S.B ENGINEERING COLLEGE KARUR",
    Status: "B.Tech Artificial Intelligence And Data Science",
    Percentage: "7.86 %",
    Year: "2023-2027"
  },
  {
    name: "CHERAN MATRIC HR SEC SCHOOL",
    Status: "12TH STANDARD",
    Percentage: "70.1 %",
    Year: "2022-2023"
  },
  {
    name: "CHERAN MATRIC HR SEC SCHOOL",
    Status: "10TH STANDARD",
    Percentage: "All Pass",
    Year: "2020-2021"
  },
];

const Edu = ({ name, status, percentage, year }) => {
  return (
    <div className="relative p-[1.5px] rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#763CAC] via-[#320F85] to-[#763CAC] animate-border" />
      <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-white shadow-xl">
        <h2 className="text-xl font-semibold tracking-tight">
          {name}
        </h2>
        <p className="text-sm text-gray-200/90 mt-2 font-medium">
          {status}
        </p>
        <p className="text-sm text-gray-300/80 mt-1">
          Percentage: {percentage}
        </p>
        <p className="text-sm text-gray-400/80 mt-1">
          Year: {year}
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen relative overflow-hidden md:pt-20 pt-22">
      <div className="absolute inset-0 bg-linear-to-tr from-[#11071F] via-transparent to-[#1A0B2E]" />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex justify-center text-4xl sm:text-5xl lg:text-7xl font-bold"
      >
        <span className="bg-linear-to-r from-[#763CAC] to-[#320F85] bg-clip-text text-transparent">
          Education
        </span>
      </motion.h1>
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12  max-w-7xl mx-auto">
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 lg:w-200 lg:h-200"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/Education.png"
            alt="Education"
            className="w-full h-full object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div 
          className="flex flex-col gap-6 w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {EduDetails.map((edu, index) => (
            <Edu
              key={index}
              name={edu.name}
              status={edu.Status}
              percentage={edu.Percentage}
              year={edu.Year}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Page;
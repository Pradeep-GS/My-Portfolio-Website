"use client";
import React from "react";
import { motion } from "framer-motion";

const codingSkillList = [
  { images: "/python.png", title: "Python" },
  { images: "/java.png", title: "Java" },
  { images: "/html-5.png", title: "HTML" },
  { images: "/css-3.png", title: "CSS" },
  { images: "/js.png", title: "JavaScript" },
  { images: "/react.png", title: "React JS" },
  { images: "/nextjs.png", title: "Next JS" },
  { images: "/sql.png", title: "SQL" },
  { images: "/tailwin.png", title: "TailWind CSS" },
];

const EditingSkill = [
  { images: "/avid.jpg", title: "AVID MEDIA COMPOSER" },
  { images: "/pr.jpg", title: "PREMIER PRO" },
  { images: "/PHOTOSHOP.png", title: "PHOTOSHOP" },
  { images: "/DAVINCI.png", title: "DAVINCI RESOLVE" },
];

const Page = () => {
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
          Skills
        </span>
      </motion.h1>

      <div className="space-y-10 relative z-10 overflow-hidden px-4">
        <div className="overflow-hidden">
          <div className="flex w-max scroll-left gap-8">
            {[...codingSkillList, ...codingSkillList, ...codingSkillList].map((item, i) => (
              <div
                key={i}
                className="min-w-37.5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition"
              >
                <img
                  src={item.images}
                  alt={item.title}
                  className="h-16 w-16 object-contain mb-3"
                />
                <p className="text-sm text-center">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex w-max scroll-right gap-8">
            {[...EditingSkill, ...EditingSkill,...EditingSkill].map((item, i) => (
              <div
                key={i}
                className="min-w-37.5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 flex flex-col items-center hover:scale-105 transition"
              >
                <img
                  src={item.images}
                  alt={item.title}
                  className="h-16 w-16 object-contain mb-3"
                />
                <p className="text-sm text-center">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
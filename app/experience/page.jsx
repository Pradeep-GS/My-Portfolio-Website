"use client";
import React from 'react';
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExpDetails = [
  {
    name: "CODE ALPHA",
    position: "FULL STACK DEVELOPER",
    startDate: "JAN 2026",
    endDate: "JAN 2026 (1 MONTH)",
    img: "/caic.jpg"
  },
  {
    name: "INFOSYS SPRINGBOARD",
    position: "JAVA FULL STACK DEVELOPER",
    startDate: "OCT 2025",
    endDate: "DEC 2025",
    img: "/images.png"
  },
  {
    name: "SDLC",
    position: "WEB DEVELOPER",
    startDate: "JUN 2024",
    endDate: "JUN 2024 (1 MONTH)",
    img: "/sdlc.png"
  },
];

const Page = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen relative md:pt-20 pt-22 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-linear-to-br from-[#11071F] via-transparent to-[#1A0B2E]"
      />


      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex justify-center text-4xl sm:text-5xl lg:text-7xl font-bold mb-12"
      >
        <span className="bg-linear-to-r from-[#763CAC] to-[#320F85] bg-clip-text text-transparent">
          EXPERIENCE
        </span>
      </motion.h1>
          <VerticalTimeline>
            {ExpDetails.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={`${exp.startDate} — ${exp.endDate}`}
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  color: '#fff',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgba(118, 60, 172, 0.5)',
                }}
                iconStyle={{
                  background: 'linear-gradient(135deg, #763CAC, #320F85)',
                  color: '#fff',
                  boxShadow: '0 0 0 4px rgba(118, 60, 172, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                icon={(
                    <img 
                      src={exp.img} 
                      alt={exp.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  )
                }
              >
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {exp.name}
                </h3>
                <h4 className="text-md font-medium text-gray-200/90 mt-1">
                  {exp.position}
                </h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
    </div>
  );
};

export default Page;
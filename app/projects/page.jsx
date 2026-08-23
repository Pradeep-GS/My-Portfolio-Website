"use client";

import ProjectCard from "@/components/ProjectCard";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Code Debugger",
    description:
      "A real-time AI-powered code debugger that helps developers find and fix programming errors instantly. Users can paste code into an interactive UI and receive logic + syntax correction suggestions. Built with React.js frontend and Flask backend, integrated with OpenAI API for smart debugging insights.",
    tech: ["React.js", "Flask", "Python", "OpenAI API"],
    github: "https://github.com/Pradeep-GS/CodeDebugger-CodeGenerator",
    link: "",
  },

  {
    title: "Mini Social Media App",
    description:
      "A full-stack MERN social media platform supporting secure user authentication and profile management. Users can create posts with images, like/comment, and follow or unfollow other users. Implemented JWT-based security, Cloudinary image storage, and REST API architecture for scalability.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Cloudinary"],
    github: "https://github.com/Pradeep-GS/CodeAlpha_Social-Media-Platform",
    link: "",
  },

  {
    title: "Placement Tutor Bot",
    description:
      "A smart Telegram automation bot designed to help students prepare for coding interviews consistently. It sends daily coding questions, accepts solutions before deadlines, and evaluates answers using GPT-based feedback. Includes an /ai command for doubts, hints, and concept explanations anytime.",
    tech: ["Python", "Telegram Bot", "OpenAI API", "Automation"],
    github: "https://github.com/Pradeep-GS/Placement-Tutor-Bot",
    link: "",
  },

  {
    title: "Quick Serve Booking App",
    description:
      "A full-stack service booking platform with separate dashboards for users, service providers, and admins. Users can book services, chat with providers, make payments, and submit reviews. Integrated Stripe payments and automated email notifications for a complete booking workflow system.",
    tech: ["React.js", "Tailwind CSS", "Java", "Spring Boot", "SQL", "Stripe"],
    github: "https://github.com/Pradeep-GS/Quick_Service_Booking_application",
    link: "",
  },

  {
    title: "Hospital Management System",
    description:
      "A full-stack hospital management system designed to manage patients, doctors, appointments, and hospital operations through a centralized platform.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io"],
    github: "https://github.com/Pradeep-GS/Hospital-Management-System",
    link: "",
  },

  {
    title: "Skill Gap Analysis",
    description:
      "An AI-powered skill gap analysis platform that evaluates a user's skills and identifies areas for improvement based on career and job requirements.",
    tech: ["Python", "FastAPI", "React.js", "Machine Learning", "AI"],
    github: "https://github.com/Pradeep-GS/Skill-Gap-Analysis",
    link: "",
  },

  {
    title: "Drug Supply Chain Tracking",
    description:
      "A drug supply chain tracking system designed to improve transparency and traceability across the pharmaceutical supply chain, helping track drug movement from manufacturers to distributors.",
    tech: ["Blockchain", "JavaScript", "Web Development"],
    github: "https://github.com/Pradeep-GS/Drug-Supply-Chain_Tracking",
    link: "",
  },
];

// Each card gets its own scroll-driven animation
function AnimatedProjectCard({ project, index, total }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // Card enters when its top hits 80% of the viewport
    offset: ["0.15 1", "0.35 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="w-full max-w-3xl mx-auto"
    >
      <ProjectCard
        title={project.title}
        description={project.description}
        tech={project.tech}
        github={project.github}
        link={project.link}
      />
    </motion.div>
  );
}

const Page = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen relative overflow-hidden pt-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#11071F] via-transparent to-[#1A0B2E]" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative flex justify-center text-5xl lg:text-7xl font-bold mb-24"
      >
        <span className="bg-gradient-to-r from-[#763CAC] to-[#320F85] bg-clip-text text-transparent">
          PROJECTS
        </span>
      </motion.h1>

      
      <div className="grid lg:grid-cols-3 gap-4 p-10 ">
        {projects.map((project, index) => (
          <AnimatedProjectCard
            key={index}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>

    </div>
  );
};

export default Page;
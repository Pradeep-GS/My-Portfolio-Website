"use client";

import { Terminals } from '@/components/Terminal';
import { motion } from 'framer-motion'
import { Download, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-tr from-[#11071F] via-transparent to-[#1A0B2E]" />
      <section className="relative w-full min-h-screen flex flex-col-reverse mt-10 lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-16 lg:py-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start text-center lg:text-left space-y-4 lg:pr-10 z-10 mt-5"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold"
          >
            <span className="text-white">
              Hi, I'm 
            </span>
          </motion.h1>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold"
          >
            <span className="bg-linear-to-r from-[#CBACF9] to-[#2a085d] bg-clip-text text-transparent">
              PRADEEP G.S
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-1xl sm:text-2xl lg:text-3xl text-white"
          >
            Developer & Editor
          </motion.h2>
          <a href="/pradeep.pdf" download className="px-6 py-4 border border-zinc-600 hover:bg-zinc-800 rounded-lg transition flex gap-3 my-4 sm:w-1/2">
            <Download/> <span>Downlode Resume</span>
          </a>
              
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex items-center justify-center min-h-100 lg:min-h-screen"
        >
          <Terminals/>
        </motion.div>
      </section>
    </div>
  )
}
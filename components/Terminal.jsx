"use client";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/ui/terminal'

export function Terminals() {
  return (
    <Terminal className="w-full h-full">

      <TypingAnimation>
        &gt; whoami
      </TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Full Stack Developer
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Blockchain Enthusiast
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Problem Solver
      </AnimatedSpan>

      <TypingAnimation>
        &gt; skills --list
      </TypingAnimation>

      <AnimatedSpan className="text-blue-500">
        → React / Next.js
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        → Node.js / Express
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        → Java / Python
      </AnimatedSpan>

      <TypingAnimation>
        &gt; current_status
      </TypingAnimation>

      <AnimatedSpan className="text-yellow-500 ml-2">
        → B.Tech Student
      </AnimatedSpan>


    </Terminal>
  )
}
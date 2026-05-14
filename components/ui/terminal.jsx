"use client";
import { Children, createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils"
import { Terminal as TerminalIcon } from 'lucide-react'

const SequenceContext = createContext(null)
const useSequence = () => useContext(SequenceContext)
const ItemIndexContext = createContext(null)
const useItemIndex = () => useContext(ItemIndexContext)

const motionElements = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  startOnView = false,
  ...props
}) => {
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, {
    amount: 0.3,
    once: true,
  })

  const sequence = useSequence()
  const itemIndex = useItemIndex()
  const [hasStarted, setHasStarted] = useState(false)
  
  useEffect(() => {
    if (!sequence || itemIndex === null) return
    if (!sequence.sequenceStarted) return
    if (hasStarted) return
    if (sequence.activeIndex === itemIndex) {
      setHasStarted(true)
    }
  }, [sequence?.activeIndex, sequence?.sequenceStarted, hasStarted, itemIndex])

  const shouldAnimate = sequence ? hasStarted : startOnView ? isInView : true

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: -5 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.3, delay: sequence ? 0 : delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      onAnimationComplete={() => {
        if (!sequence) return
        if (itemIndex === null) return
        sequence.completeItem(itemIndex)
      }}
      {...props}>
      {children}
    </motion.div>
  );
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  startOnView = true,
  ...props
}) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:")
  }

  const MotionComponent = motionElements[Component]

  const [displayedText, setDisplayedText] = useState("")
  const [started, setStarted] = useState(false)
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, {
    amount: 0.3,
    once: true,
  })

  const sequence = useSequence()
  const itemIndex = useItemIndex()

  useEffect(() => {
    if (sequence && itemIndex !== null) {
      if (!sequence.sequenceStarted) return
      if (started) return
      if (sequence.activeIndex === itemIndex) {
        setStarted(true)
      }
      return
    }

    if (!startOnView) {
      const startTimeout = setTimeout(() => setStarted(true), delay)
      return () => clearTimeout(startTimeout);
    }

    if (!isInView) return

    const startTimeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimeout);
  }, [
    delay,
    startOnView,
    isInView,
    started,
    sequence?.activeIndex,
    sequence?.sequenceStarted,
    itemIndex,
  ])

  useEffect(() => {
    if (!started) return

    let i = 0
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
        if (sequence && itemIndex !== null) {
          sequence.completeItem(itemIndex)
        }
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    };
  }, [children, duration, started])

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}>
      {displayedText}
      {started && displayedText.length < children.length && (
        <span className="inline-block w-0.5 h-4 bg-emerald-400 ml-0.5 animate-pulse" />
      )}
    </MotionComponent>
  );
}

export const Terminal = ({
  children,
  className,
  sequence = true,
  startOnView = true
}) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, {
    amount: 0.3,
    once: true,
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const sequenceHasStarted = sequence ? !startOnView || isInView : false

  const contextValue = useMemo(() => {
    if (!sequence) return null
    return {
      completeItem: (index) => {
        setActiveIndex((current) => (index === current ? current + 1 : current))
      },
      activeIndex,
      sequenceStarted: sequenceHasStarted,
    };
  }, [sequence, activeIndex, sequenceHasStarted])

  const wrappedChildren = useMemo(() => {
    if (!sequence) return children
    const array = Children.toArray(children)
    return array.map((child, index) => (
      <ItemIndexContext.Provider key={index} value={index}>
        {child}
      </ItemIndexContext.Provider>
    ));
  }, [children, sequence])

  const content = (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "w-full max-w-2xl mx-auto relative",
        className
      )}>
      
      {/* Main terminal */}
      <div className="relative bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl shadow-2xl overflow-hidden">
        
        {/* Terminal header */}
        <div className="border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-1.5 ml-2 text-zinc-500">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span className="text-xs">pradeepgs</span>
            </div>
          </div>
        </div>

        {/* Terminal content */}
        <pre className="p-5 font-mono text-sm">
          <code className="grid gap-1.5">
            {/* Prompt line */}
            <div className="flex items-center gap-2 text-zinc-600 text-xs mb-2">
              <span className="text-purple-400">➜</span>
              <span>~/portfolio</span>
            </div>
            
            {wrappedChildren}
            
            {/* Cursor line */}
            <div className="flex items-center gap-2 text-emerald-400/70 mt-3">
              <span className="text-zinc-600">$</span>
              <span className="w-1.5 h-4 bg-emerald-400/70 animate-pulse" />
            </div>
          </code>
        </pre>
      </div>
    </motion.div>
  )

  if (!sequence) return content

  return (
    <SequenceContext.Provider value={contextValue}>
      {content}
    </SequenceContext.Provider>
  );
}
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import CountdownTimer from '../components/CountdownTimer'
import MemoryGame from '../components/MemoryGame'
import { Heart, Stars } from 'lucide-react'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen bg-gradient-to-br from-pink-200 to-nude-200 overflow-hidden">
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,192,203,0.15) 0%, rgba(255,228,196,0) 50%)`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-24">
        <motion.div
          className="max-w-4xl w-full items-center justify-between font-serif bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <motion.div
            className="absolute -top-10 -left-10 text-pink-300 opacity-50"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Heart size={100} />
          </motion.div>
          <motion.div
            className="absolute -bottom-10 -right-10 text-nude-400 opacity-50"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Stars size={100} />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-pink-800 text-center relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Countdown
            <motion.span
              className="absolute -top-1 -right-1 text-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              💖
            </motion.span>
          </motion.h1>
          <CountdownTimer targetDate="2024-10-31T00:00:00" />
          <motion.p
            className="mt-8 text-xl md:text-2xl text-pink-600 italic text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            "Love never fails." - 1 Corinthians 13:8
          </motion.p>
          <MemoryGame />
        </motion.div>
      </div>
      <motion.div
        className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-300 to-transparent pointer-events-none"
        style={{ y, opacity }}
      />
    </main>
  )
}
'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <motion.div
      className="flex flex-col items-center mx-2 bg-pink-200 rounded-lg p-3 shadow-md"
      key={interval}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className="font-bold text-3xl md:text-4xl text-pink-700"
        key={value}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
      <span className="text-sm text-pink-600 capitalize">{interval}</span>
    </motion.div>
  ))

  return (
    <div className="text-xl md:text-2xl text-center"> {/* Added text-center here */}
    <p className="mb-6 text-nude-700">Building something for us</p>
    <div className="flex justify-center flex-wrap">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-pink-700 font-bold">Our day has arrived!</span>
      )}
    </div>
  </div>
  
  )
}
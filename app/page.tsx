'use client';

import { motion } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';
import FlowerBackground from '../components/FlowerBackground';
import MemoryGame from '../components/MemoryGame';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center relative overflow-hidden">
      <FlowerBackground />
      <motion.div
        className="z-10 max-w-5xl w-full items-center justify-between font-serif"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 text-nude-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Countdown
        </motion.h1>
        <CountdownTimer targetDate="2024-10-31T00:00:00" />
        <motion.p
          className="mt-8 text-2xl text-nude-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Building something special, just for us.
        </motion.p>
        <MemoryGame />
      </motion.div>
    </main>
  );
}

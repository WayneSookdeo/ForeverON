'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const emojis = ['❤️', '😊', '🌟', '🎉', '🌈', '🍀']

export default function MemoryGame() {
  const [cards, setCards] = useState<string[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [solved, setSolved] = useState<number[]>([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji) => emoji)
    setCards(shuffledCards)
    setFlipped([])
    setSolved([])
    setDisabled(false)
  }

  const handleClick = (index: number) => {
    if (flipped.length === 0) {
      setFlipped([index])
      return
    }

    if (flipped.length === 1) {
      setDisabled(true)
      if (index !== flipped[0]) {
        setFlipped([...flipped, index])
      }
      if (cards[flipped[0]] === cards[index]) {
        setSolved([...solved, flipped[0], index])
        setFlipped([])
        setDisabled(false)
      } else {
        setTimeout(() => {
          setFlipped([])
          setDisabled(false)
        }, 1000)
      }
    }
  }

  if (solved.length === cards.length) {
    return (
      <motion.div
        className="mt-12 p-6 bg-pink-100 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-pink-800 mb-4 text-center">Surprise!!!</h3>
        <p className="text-nude-700 mb-6 text-center">
          I just want to let you know how much I love you and appreciate you, Olivia Jubilee Chetty. I just want to thank God for you. He has blessed me so much with you and I can never imagine my life without you. You are more precious than any gem in this world, more valuable than anything God has ever created. You have been created so flawlessly by our God. I love you
        </p>
        <div className="flex justify-center">
          <button
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors text-lg font-semibold"
            onClick={initializeGame}
          >
            Play Again
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="mt-12 p-6 bg-pink-50 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-pink-800 mb-4 text-center">Hey there Beautiful</h3>
      <p className="text-nude-700 mb-6 text-center">Match the pairs to pass the time and for a surprise</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-md">
          {cards.map((card, index) => (
            <motion.button
              key={index}
              className={`w-16 h-16 md:w-20 md:h-20 text-2xl md:text-3xl flex items-center justify-center rounded-lg ${
                flipped.includes(index) || solved.includes(index)
                  ? 'bg-pink-300'
                  : 'bg-pink-500'
              }`}
              disabled={
                disabled || flipped.includes(index) || solved.includes(index)
              }
              onClick={() => handleClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {flipped.includes(index) || solved.includes(index) ? card : '?'}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
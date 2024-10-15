'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const emojis = ['❤️', '😊', '🌟', '🎉', '🌈', '🍀'];

const MemoryGame = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji) => emoji);
    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
  };

  const handleClick = (index: number) => {
    if (flipped.length === 0) {
      setFlipped([index]);
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true);
      if (index !== flipped[0]) {
        setFlipped([...flipped, index]);
      }
      if (cards[flipped[0]] === cards[index]) {
        setSolved([...solved, flipped[0], index]);
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  if (solved.length === cards.length) {
    return (
      <motion.div
        className="mt-8 p-4 bg-nude-100 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-nude-800 mb-4">Memory Game</h3>
        <p className="text-nude-700 mb-4">
          Congratulations! You've matched all the cards!
        </p>
        <button
          className="bg-nude-500 text-white px-4 py-2 rounded hover:bg-nude-600 transition-colors"
          onClick={initializeGame}
        >
          Play Again
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="mt-8 p-4 bg-nude-100 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-nude-800 mb-4">Memory Game</h3>
      <p className="text-nude-700 mb-4">Match the pairs to pass the time!</p>
      <div className="ml-8 grid grid-cols-3 gap-2">
        {cards.map((card, index) => (
          <motion.button
            key={index}
            className={`w-16 h-16 text-2xl flex items-center justify-center rounded-lg ${
              flipped.includes(index) || solved.includes(index)
                ? 'bg-nude-300'
                : 'bg-nude-500'
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
    </motion.div>
  );
};

export default MemoryGame;

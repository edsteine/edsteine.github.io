"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalSectionProps {
  title: string;
  commands: { command: string; output: string[] }[];
}

const TerminalSection: React.FC<TerminalSectionProps> = ({ title, commands }) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const currentCommand = commands[currentCommandIndex];

  useEffect(() => {
    if (isTyping) {
      const command = currentCommand.command;
      let i = 0;
      const typingInterval = setInterval(() => {
        setTypedText(command.substring(0, i + 1));
        i++;
        if (i === command.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => setShowOutput(true), 500);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }
  }, [isTyping, currentCommand]);

  const startTyping = () => {
    setIsTyping(true);
    setShowOutput(false);
    setTypedText('');
  };

  const nextCommand = () => {
    const nextIndex = (currentCommandIndex + 1) % commands.length;
    setCurrentCommandIndex(nextIndex);
    setShowOutput(false);
    setTypedText('');
    setTimeout(() => startTyping(), 200);
  };

  return (
    <motion.div
      className="bg-gray-900 rounded-lg p-4 font-mono text-sm shadow-2xl border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-400 text-xs">{title}</div>
        <div className="text-gray-500 text-xs">⌘ + K</div>
      </div>

      {/* Terminal content */}
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="text-green-400 mr-2">$</span>
          <span className="text-white">
            {typedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </div>

        {showOutput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {currentCommand.output.map((line, index) => (
              <motion.div
                key={index}
                className="text-gray-300 ml-2 text-xs leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {line}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Control buttons */}
      <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-700">
        <button
          onClick={startTyping}
          className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
          disabled={isTyping}
        >
          {isTyping ? 'Running...' : 'Run'}
        </button>
        <button
          onClick={nextCommand}
          className="px-3 py-1 bg-gray-600 text-white rounded text-xs hover:bg-gray-700 transition-colors"
        >
          Next Command
        </button>
      </div>
    </motion.div>
  );
};

export default TerminalSection;
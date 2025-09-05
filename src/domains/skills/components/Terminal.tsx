"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalSectionProps {
  title: string;
  commands: { command: string; output: string[] }[];
}

const TerminalSection: React.FC<TerminalSectionProps> = ({ title, commands }) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  const currentCommand = commands[currentCommandIndex];

  const runCommand = () => {
    setShowOutput(true);
  };

  const nextCommand = () => {
    const nextIndex = (currentCommandIndex + 1) % commands.length;
    setCurrentCommandIndex(nextIndex);
    setShowOutput(false);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm shadow-2xl border border-gray-700">
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
            {currentCommand.command}
          </span>
        </div>

        {showOutput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {currentCommand.output.map((line, index) => (
              <div
                key={index}
                className="text-gray-300 ml-2 text-xs leading-relaxed"
              >
                {line}
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Control buttons */}
      <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-700">
        <button
          onClick={runCommand}
          className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
          disabled={showOutput}
        >
          {showOutput ? 'Executed' : 'Run'}
        </button>
        <button
          onClick={nextCommand}
          className="px-3 py-1 bg-gray-600 text-white rounded text-xs hover:bg-gray-700 transition-colors"
        >
          Next Command
        </button>
      </div>
    </div>
  );
};

export default TerminalSection;
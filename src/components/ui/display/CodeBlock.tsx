"use client";

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  showLineNumbers?: boolean;
  animated?: boolean;
  autoType?: boolean;
  typingSpeed?: number;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  title = 'code.js',
  showLineNumbers = true,
  animated = true,
  autoType = false,
  typingSpeed = 50
}) => {
  const [displayedCode, setDisplayedCode] = useState(autoType ? '' : code);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(autoType);

  useEffect(() => {
    if (autoType && currentIndex < code.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(code.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (autoType && currentIndex >= code.length) {
      setIsTyping(false);
    }
    return undefined;
  }, [currentIndex, code, autoType, typingSpeed]);

  const startTyping = () => {
    setCurrentIndex(0);
    setDisplayedCode('');
    setIsTyping(true);
  };

  const resetCode = () => {
    setDisplayedCode(code);
    setCurrentIndex(code.length);
    setIsTyping(false);
  };

  
  const getSyntaxTokens = React.useMemo(() => {
    return (text: string) => {
      if (!text) return [];
      
      
      
      const patterns = [
        { regex: /(const|let|var|function|class|import|export|from|return|if|else|for|while)\b/, type: 'keyword' },
        { regex: /(['"`])(.*?)\1/, type: 'string' },
        { regex: /\b(\d+)\b/, type: 'number' },
        { regex: /(\/\/.*$|\/\*.*?\*\/)/, type: 'comment' },
        { regex: /([{}[\]();,.])/, type: 'punctuation' },
        { regex: /\b(true|false|null|undefined)\b/, type: 'boolean' }
      ];
      
      
      const words = text.split(/(\s+)/);
      
      return words.map(word => {
        for (const pattern of patterns) {
          if (pattern.regex.test(word)) {
            return { text: word, type: pattern.type };
          }
        }
        return { text: word, type: 'default' };
      });
    };
  }, []);
  
  const getTokenClassName = (type: string): string => {
    switch (type) {
      case 'keyword': return 'text-purple-400';
      case 'string': return 'text-green-400';
      case 'number': return 'text-yellow-400';
      case 'comment': return 'text-gray-400';
      case 'punctuation': return 'text-blue-300';
      case 'boolean': return 'text-red-400';
      default: return 'text-gray-100';
    }
  };

  const lines = displayedCode.split('\n');

  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700"
      initial={animated ? { opacity: 0, y: 20 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm font-mono">{title}</span>
          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">{language}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          {autoType && (
            <>
              <button
                onClick={startTyping}
                className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-colors"
                disabled={isTyping}
              >
                {isTyping ? 'Typing...' : 'Run'}
              </button>
              <button
                onClick={resetCode}
                className="text-xs bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded transition-colors"
              >
                Reset
              </button>
            </>
          )}
          <div className="text-xs text-gray-400 flex items-center">
            <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-2 animate-pulse"></span>
            Active
          </div>
        </div>
      </div>

      {}
      <div className="p-0 font-mono text-sm">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="flex"
            initial={animated ? { opacity: 0, x: -20 } : {}}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.05 }}
          >
            {showLineNumbers && (
              <div className="select-none text-gray-500 text-right pr-4 pl-4 py-1 bg-gray-800 border-r border-gray-700 min-w-[3rem]">
                {index + 1}
              </div>
            )}
            <div className="flex-1 px-4 py-1 text-gray-100 leading-6 hover:bg-gray-800/50">
              {line ? (
                getSyntaxTokens(line).map((token, tokenIndex) => (
                  <span key={tokenIndex} className={getTokenClassName(token.type)}>
                    {token.text}
                  </span>
                ))
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div
            className="inline-block w-2 h-5 bg-white ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </div>

      {}
      <div className="px-4 py-2 bg-gray-800 border-t border-gray-700 flex justify-between items-center text-xs text-gray-400">
        <span>Lines: {lines.length}</span>
        <span>Language: {language}</span>
        <span>UTF-8</span>
      </div>
    </motion.div>
  );
};

export default CodeBlock;
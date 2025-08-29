"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: string;
  value: string | number;
  label: string;
  description?: string;
  color: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  value, 
  label, 
  description, 
  color, 
  delay = 0 
}) => {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-${color}-500 hover:shadow-xl transition-shadow duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`text-3xl bg-${color}-100 dark:bg-${color}-900/30 p-3 rounded-full`}>
            {icon}
          </div>
          <div>
            <motion.div 
              className={`text-3xl font-bold text-${color}-600 dark:text-${color}-400`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.2, type: "spring", stiffness: 100 }}
            >
              {value}
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold">{label}</p>
          </div>
        </div>
      </div>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

const ProjectStats: React.FC = () => {
  const stats = [
    {
      icon: '👥',
      value: '100K+',
      label: 'Daily Users Served',
      description: 'Applications serving over 100,000 daily active users across multiple sectors including enterprise, insurance, and government.',
      color: 'blue',
      delay: 0
    },
    {
      icon: '⚡',
      value: '99.9%',
      label: 'System Uptime',
      description: 'Achieved exceptional uptime across mission-critical applications through robust architecture and monitoring.',
      color: 'green',
      delay: 0.1
    },
    {
      icon: '🎯',
      value: '95%',
      label: 'On-Time Delivery',
      description: 'Consistent project delivery rate while leading cross-functional teams and managing complex requirements.',
      color: 'purple',
      delay: 0.2
    },
    {
      icon: '🚀',
      value: '1M+',
      label: 'Daily Transactions',
      description: 'Microservices architecture handling over 1 million daily transactions with optimal performance.',
      color: 'orange',
      delay: 0.3
    },
    {
      icon: '👨‍💻',
      value: '12+',
      label: 'Team Members Led',
      description: 'Successfully led and mentored development teams of 12+ engineers across multiple projects.',
      color: 'indigo',
      delay: 0.4
    },
    {
      icon: '📈',
      value: '85-96%',
      label: 'Performance Improvement',
      description: 'Achieved significant performance optimizations across database queries, API responses, and mobile rendering.',
      color: 'red',
      delay: 0.5
    }
  ];

  const projectMetrics = [
    { name: 'Mobile Apps Built', value: 15, icon: '📱' },
    { name: 'Enterprise Systems', value: 8, icon: '🏢' },
    { name: 'Years Experience', value: 9, icon: '⏳' },
    { name: 'Technologies Mastered', value: 25, icon: '⚙️' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-cyan-500 font-mono text-lg">const</span>{' '}
          <span className="text-yellow-500">metrics</span>{' '}
          <span className="text-gray-400">=</span>{' '}
          <span className="text-green-500">[</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Quantified impact and achievements from 9+ years of enterprise-level development
        </p>
      </motion.div>

      {/* Main Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Metrics Bar */}
      <motion.div 
        className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          <span className="text-purple-500 font-mono">{'}'}</span> Quick Stats Overview
        </h4>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projectMetrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <div className="text-4xl mb-2">{metric.icon}</div>
              <motion.div 
                className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {metric.value}+
              </motion.div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {metric.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technology Impact Chart */}
      <motion.div 
        className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="text-green-500 mr-2">📊</span>
          Technology Impact Distribution
        </h4>
        
        <div className="space-y-4">
          {[
            { tech: 'Mobile Development (Kotlin/Flutter)', percentage: 35, color: 'bg-green-500' },
            { tech: 'Backend Systems (Spring Boot/Node.js)', percentage: 30, color: 'bg-blue-500' },
            { tech: 'Frontend Development (React/Angular)', percentage: 20, color: 'bg-purple-500' },
            { tech: 'DevOps & Architecture (AWS/Docker)', percentage: 15, color: 'bg-orange-500' }
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.tech}
                </span>
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <motion.div
                  className={`h-2 rounded-full ${item.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectStats;
// Animated Section - Single Responsibility: Handle section animations
import React from 'react';
import { motion, Variants } from "framer-motion";

const SECTION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  'aria-label'?: string;
  variant?: 'default' | 'immediate';
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  id, 
  'aria-label': ariaLabel,
  variant = 'default'
}: AnimatedSectionProps) {
  const motionProps = variant === 'immediate' 
    ? { initial: "hidden", animate: "visible", variants: SECTION_VARIANTS }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.1 }, variants: SECTION_VARIANTS };

  return (
    <motion.section
      id={id}
      className={className}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
}
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return { initial: { y: 50 }, animate: { y: 0 } };
      case 'down':
        return { initial: { y: -50 }, animate: { y: 0 } };
      case 'left':
        return { initial: { x: 50 }, animate: { x: 0 } };
      case 'right':
        return { initial: { x: -50 }, animate: { x: 0 } };
      default:
        return { initial: { y: 50 }, animate: { y: 0 } };
    }
  };
  
  const variants = {
    initial: { opacity: 0, ...getDirectionVariants().initial },
    animate: { 
      opacity: 1, 
      ...getDirectionVariants().animate, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay 
      } 
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
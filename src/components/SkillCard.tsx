import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-50 text-primary-700 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  );
};

export default SkillCard;
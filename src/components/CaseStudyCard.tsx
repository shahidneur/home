import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  subtitle,
  description,
  image,
  tags,
  index,
}) => {
  return (
    <motion.article 
      className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-3 py-1 bg-slate-100 text-primary-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-primary-600 mb-3">{subtitle}</p>
        <p className="text-slate-600 mb-4">{description}</p>
        
        <div className="flex justify-end">
          <Link 
            to={`/case-study/${id}`}
            className="flex items-center text-primary-700 font-medium hover:text-primary-900 transition-colors"
          >
            <motion.span whileHover={{ x: 5 }} className="flex items-center">
              View Case Study
              <ArrowRight size={18} className="ml-1" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default CaseStudyCard;
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : ''}`}>
      <h2 className="font-semibold mb-3 text-primary-900">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
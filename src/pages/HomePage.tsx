import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, PencilRuler, Figma, Users, LightbulbIcon } from 'lucide-react';
import CaseStudyCard from '../components/CaseStudyCard';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

const HomePage: React.FC = () => {
  const caseStudies = [
    {
      id: 'university-mobile-app',
      title: 'University Mobile App',
      subtitle: 'Student Experience Redesign',
      description: 'Modernized the university mobile app with a focus on aesthetics and usability, resulting in significantly improved student engagement.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Mobile App', 'UI/UX Design', 'Education']
    },
    {
      id: 'university-cms',
      title: 'University CMS',
      subtitle: 'Content Management System',
      description: 'Developed a comprehensive content management system that streamlines student access to academic resources and information.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Web App', 'Education', 'UX Research']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
        <div className="container-custom">
          <div className="max-w-2xl">
            <motion.h1 
              className="font-medium mb-4 text-primary-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              UX Designer crafting intuitive digital experiences
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#case-studies" className="button-primary">
                View My Work
              </a>
              <a href="/about" className="button-secondary">
                About Me
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                  <Users size={20} className="text-primary-700" />
                </div>
                <h3 className="text-lg font-medium mb-2">Research</h3>
                <p className="text-sm text-slate-600">Understanding user needs and behaviors</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                  <LightbulbIcon size={20} className="text-primary-700" />
                </div>
                <h3 className="text-lg font-medium mb-2">Ideation</h3>
                <p className="text-sm text-slate-600">Generating creative solutions</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                  <Figma size={20} className="text-primary-700" />
                </div>
                <h3 className="text-lg font-medium mb-2">Design</h3>
                <p className="text-sm text-slate-600">Creating intuitive interfaces</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                  <PencilRuler size={20} className="text-primary-700" />
                </div>
                <h3 className="text-lg font-medium mb-2">Iteration</h3>
                <p className="text-sm text-slate-600">Refining based on feedback</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-slate-50">
        <div className="container-custom">
          <SectionHeading 
            title="Selected Work"
            subtitle="Recent projects that showcase my approach to design challenges"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                index={index}
                id={study.id}
                title={study.title}
                subtitle={study.subtitle}
                description={study.description}
                image={study.image}
                tags={study.tags}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Breadcrumbs from '../components/Breadcrumbs';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  impact: string;
  tags: string[];
  process: {
    title: string;
    description: string;
    image: string;
  }[];
}

const caseStudies: Record<string, CaseStudy> = {
  'university-mobile-app': {
    id: 'university-mobile-app',
    title: 'University Mobile App',
    subtitle: 'Student Experience Redesign',
    description: 'A modern redesign of the university mobile app focusing on enhanced aesthetics and user experience.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    challenge: 'The existing university mobile app was outdated, with poor user engagement and frequent complaints about navigation and visual appeal. Students found it difficult to access important information quickly.',
    solution: 'Through a year-long design thinking process, we completely reimagined the app with modern aesthetics and intuitive navigation, focusing on the most frequently used features.',
    impact: 'The redesign achieved 85% student satisfaction, 40% increase in daily active users, and received recognition from university leadership for its innovative approach.',
    tags: ['Mobile App', 'UI/UX Design', 'Education'],
    process: [
      {
        title: 'Empathize',
        description: 'Conducted extensive user research through surveys, interviews, and observation sessions with students to understand their needs, pain points, and usage patterns.',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Define',
        description: 'Synthesized research findings to identify key pain points and opportunities for improvement. Created user personas and journey maps to guide the design process.',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Ideate',
        description: 'Organized workshops with stakeholders to generate innovative solutions. Used techniques like crazy eights and design studios to explore multiple directions.',
        image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Prototype',
        description: 'Created low and high-fidelity prototypes to test different navigation patterns and visual designs. Iteratively refined the designs based on feedback.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Test',
        description: 'Conducted usability testing sessions with students to validate the new design. Gathered feedback through beta testing program with a select group of users.',
        image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  'university-cms': {
    id: 'university-cms',
    title: 'University CMS',
    subtitle: 'Content Management System',
    description: 'A comprehensive content management system that revolutionizes how students access and interact with university resources.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    challenge: 'Students struggled with accessing course materials, checking results, and managing university-related tasks through multiple disconnected systems.',
    solution: 'Developed a unified platform using UX Lean methodology to centralize all academic resources and streamline student workflows.',
    impact: 'Reduced administrative queries by 60%, increased student satisfaction to 90%, and improved course material accessibility by 75%.',
    tags: ['Web App', 'Education', 'UX Research'],
    process: [
      {
        title: 'Problem Definition',
        description: 'Used analytics and user feedback to identify key pain points in existing systems. Created problem statements and success metrics.',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Solution Hypothesis',
        description: 'Developed hypotheses about potential solutions based on user needs. Created an MVP roadmap focusing on core features.',
        image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Rapid Experimentation',
        description: 'Built and tested quick prototypes to validate assumptions. Used A/B testing to optimize key workflows.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Validated Learning',
        description: 'Collected and analyzed user feedback and metrics to validate solutions. Made data-driven decisions for feature improvements.',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  }
};

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudies[id] : null;

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudy.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-sm px-3 py-1 bg-white text-primary-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-medium mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-primary-700">{caseStudy.description}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12">
        <div className="container-custom">
          <AnimatedSection>
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedSection>
              <div>
                <h3 className="text-xl font-medium mb-4">The Challenge</h3>
                <p className="text-slate-600">{caseStudy.challenge}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div>
                <h3 className="text-xl font-medium mb-4">The Solution</h3>
                <p className="text-slate-600">{caseStudy.solution}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="text-xl font-medium mb-4">The Impact</h3>
                <p className="text-slate-600">{caseStudy.impact}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-3xl font-medium mb-12">Design Process</h2>
          <div className="space-y-20">
            {caseStudy.process.map((step, index) => (
              <AnimatedSection key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-2xl font-medium">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudyPage;
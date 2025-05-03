import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Lightbulb, 
  Globe, 
  Palette, 
  Book, 
  MessageSquare,
  Award
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';

const AboutPage: React.FC = () => {
  const skills = [
    {
      title: 'User Research',
      description: 'Conducting comprehensive user research to inform design decisions.',
      icon: <Lightbulb size={22} />
    },
    {
      title: 'UX Strategy',
      description: 'Developing strategic approaches to design challenges and product vision.',
      icon: <Workflow size={22} />
    },
    {
      title: 'UI Design',
      description: 'Creating visually appealing and intuitive user interfaces.',
      icon: <Palette size={22} />
    },
    {
      title: 'Information Architecture',
      description: 'Organizing content and functionality in a way that feels natural to users.',
      icon: <Globe size={22} />
    },
    {
      title: 'Design Systems',
      description: 'Building scalable design systems that ensure consistency across products.',
      icon: <Book size={22} />
    },
    {
      title: 'Usability Testing',
      description: 'Testing with real users to validate designs and identify improvements.',
      icon: <MessageSquare size={22} />
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
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.h1 
              className="font-medium mb-6 text-primary-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-primary-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a UX Designer with 5+ years of experience creating user-centered digital experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="aspect-square w-full max-w-lg mx-auto lg:mx-0 overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-medium text-primary-900">My Journey</h2>
                
                <p className="text-slate-700">
                  I'm passionate about solving complex problems through design thinking and creating digital experiences that positively impact people's lives.
                </p>
                
                <p className="text-slate-700">
                  With a background in both design and psychology, I bring a unique perspective to understanding user behavior and creating intuitive, accessible, and delightful experiences.
                </p>
                
                <p className="text-slate-700">
                  I've had the privilege of working with startups, agencies, and established companies across various industries including healthcare, finance, education, and e-commerce.
                </p>
                
                <div className="pt-4">
                  <a href="#contact" className="button-primary">Get in Touch</a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <SectionHeading 
            title="Skills & Expertise"
            subtitle="A combination of analytical thinking and creative problem-solving"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                index={index}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Professional Experience"
            subtitle="My journey working with teams to create meaningful products"
          />
          
          <div className="space-y-12">
            <AnimatedSection className="border-l-4 border-primary-200 pl-6">
              <div className="relative">
                <span className="absolute -left-9 top-1 w-3 h-3 rounded-full bg-primary-500"></span>
                <h3 className="text-xl font-medium mb-1">Senior UX Designer</h3>
                <p className="text-primary-600 mb-2">FinTech Solutions Inc. • 2021 - Present</p>
                <p className="text-slate-600">
                  Leading the UX strategy and design for a suite of financial applications. Collaborated with product managers, engineers, and stakeholders to deliver user-centered solutions that increased user engagement by 35%.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="border-l-4 border-primary-200 pl-6" delay={0.1}>
              <div className="relative">
                <span className="absolute -left-9 top-1 w-3 h-3 rounded-full bg-primary-500"></span>
                <h3 className="text-xl font-medium mb-1">UX/UI Designer</h3>
                <p className="text-primary-600 mb-2">Design Agency XYZ • 2018 - 2021</p>
                <p className="text-slate-600">
                  Designed user experiences for clients across various industries. Conducted user research, created wireframes, prototypes, and high-fidelity designs. Worked in an agile environment with cross-functional teams.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="border-l-4 border-primary-200 pl-6" delay={0.2}>
              <div className="relative">
                <span className="absolute -left-9 top-1 w-3 h-3 rounded-full bg-primary-500"></span>
                <h3 className="text-xl font-medium mb-1">UI Designer</h3>
                <p className="text-primary-600 mb-2">Tech Startup • 2016 - 2018</p>
                <p className="text-slate-600">
                  Responsible for designing and implementing the visual identity of the company's products. Created style guides and design systems to ensure consistency across all platforms.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Education & Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <SectionHeading 
            title="Education & Certifications"
            subtitle="Continuous learning to stay at the forefront of design"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Book size={22} className="text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Master's in Human-Computer Interaction</h3>
                    <p className="text-primary-600">University of Design • 2014 - 2016</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Focused on user research methodologies, interaction design, and cognitive psychology.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Book size={22} className="text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Bachelor's in Graphic Design</h3>
                    <p className="text-primary-600">Design Institute • 2010 - 2014</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Studied visual communication, typography, and digital design principles.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Award size={22} className="text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Certified UX Professional</h3>
                    <p className="text-primary-600">Nielsen Norman Group • 2018</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Comprehensive certification covering UX research, design principles, and methodology.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Award size={22} className="text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Design Leadership Program</h3>
                    <p className="text-primary-600">Design Leaders Institute • 2020</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Focused on leading design teams, design operations, and stakeholder management.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <AnimatedSection className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Let's create something amazing together</h2>
            <p className="text-xl text-primary-100 mb-8">
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-900 font-medium rounded-md hover:bg-primary-50 transition-colors">
              Get in Touch
            </a>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
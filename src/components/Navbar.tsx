import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll listener to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 text-primary-800 font-medium text-xl"
          >
            <Palette size={24} className="text-primary-700" />
            <span>Shahid Ahmad</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Work
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <a href="#contact" className="button-primary">Contact</a>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-primary-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} py-3`}>
              Work
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} py-3`}>
              About
            </NavLink>
            <a href="#contact" className="button-primary w-full text-center">Contact</a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
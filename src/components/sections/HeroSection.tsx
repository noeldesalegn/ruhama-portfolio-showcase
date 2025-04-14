
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(120,119,198,0.2),transparent_60%)]"></div>
      
      <div className="container px-4 md:px-6 py-10 md:py-20 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Hi, I'm <span className="gradient-text">Ruhama Bekele</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Full Stack Developer & Software Engineering Student
        </h2>
        
        <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          I build responsive, performant web and mobile applications with React, Node.js, 
          and TypeScript. Currently studying Software Engineering at Dire Dawa University.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button asChild>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              View My Work
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <a 
              href="https://drive.google.com/uc?export=download&id=YOUR_RESUME_ID" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </div>
        
        <div className="flex space-x-4 mt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <a 
            href="https://github.com/ruhamabek" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ruhama-bekele" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

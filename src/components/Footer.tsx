
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer"
            >
              <span className="gradient-text">Ruhama.dev</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Full Stack Developer & Software Engineering Student
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ruhama Bekele. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/ruhamabek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ruhama-bekele"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
          
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="p-2 bg-primary text-primary-foreground rounded-full shadow-md hover:bg-primary/90 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

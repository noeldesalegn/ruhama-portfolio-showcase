
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const Index = () => {
  useEffect(() => {
    // Initialize animation on scroll
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((element) => {
        observer.observe(element);
      });
    };

    animateElements();
    
    // Add title
    document.title = "Ruhama Bekele | Software Engineer";
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;

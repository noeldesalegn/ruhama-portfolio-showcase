
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            I'm a passionate Software Engineer with a focus on full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Software Engineering Student & Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a 3rd-year Software Engineering student at Dire Dawa University with 1 year of experience
              building web and mobile applications using modern technologies like React, Node.js, and TypeScript.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I specialize in creating responsive, user-friendly applications and am passionate about solving
              real-world problems through technology. I'm constantly learning new technologies and improving
              my skills in data structures and algorithms.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Dire Dawa, Ethiopia</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Software Engineering</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-700 dark:text-gray-300">1+ Year Experience</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Open to Work</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="https://github.com/ruhamabek" target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/ruhama-bekele" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">My Approach</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I believe in writing clean, maintainable code and creating intuitive user experiences.
                  I approach each project with a focus on performance, accessibility, and best practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Current Focus</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I'm currently focusing on improving my skills in Data Structures and Algorithms through LeetCode,
                  with the goal of joining Africa to Silicon Valley (A2SV). I'm also expanding my knowledge in backend
                  development and database design.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">Web Development</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">Backend Systems</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">Data Structures</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">Problem Solving</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">Mobile Apps</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

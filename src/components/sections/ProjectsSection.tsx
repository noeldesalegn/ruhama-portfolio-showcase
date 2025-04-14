
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  category: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "KidCare Hub",
    description: "A role-based platform connecting parents and caregivers, featuring user authentication, real-time chat, and service booking.",
    image: "https://images.unsplash.com/photo-1611250282006-4484dd3fba6f?q=80&w=500&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    github: "https://github.com/ruhamabek/kidcare-hub",
    demo: "https://kidcare-hub.vercel.app",
    category: ["web", "featured"]
  },
  {
    id: 2,
    title: "Clearance Management System",
    description: "A digital system to streamline university clearance processes, replacing paper-based workflows with a user-friendly web application.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/ruhamabek/clearance-system",
    category: ["web", "featured"]
  },
  {
    id: 3,
    title: "Skill Swap Platform",
    description: "A platform where users can exchange skills and services, developed during a hackathon. Includes user profiles, skill matching, and messaging.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop",
    tags: ["MERN", "TypeScript", "Tailwind CSS", "Redux"],
    github: "https://github.com/ruhamabek/skill-swap",
    demo: "https://skill-swap-platform.netlify.app",
    category: ["web", "featured"]
  },
  {
    id: 4,
    title: "Food Ordering Website",
    description: "A responsive website for ordering food online with features like menu browsing, cart management, and order tracking.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=500&auto=format&fit=crop",
    tags: ["React", "Firebase", "Tailwind CSS", "Stripe"],
    github: "https://github.com/ruhamabek/food-order",
    category: ["web"]
  },
  {
    id: 5,
    title: "Amazon Clone Frontend",
    description: "A frontend clone of Amazon's e-commerce platform with product listings, search functionality, and shopping cart features.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=500&auto=format&fit=crop",
    tags: ["React", "CSS", "Context API"],
    github: "https://github.com/ruhamabek/amazon-clone",
    category: ["web"]
  }
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Projects</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Here are some of the projects I've built. Each one has helped me develop different skills and solve unique challenges.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            onClick={() => setFilter('all')}
            className="mb-2"
          >
            All Projects
          </Button>
          <Button 
            variant={filter === 'featured' ? 'default' : 'outline'} 
            onClick={() => setFilter('featured')}
            className="mb-2"
          >
            Featured
          </Button>
          <Button 
            variant={filter === 'web' ? 'default' : 'outline'} 
            onClick={() => setFilter('web')}
            className="mb-2"
          >
            Web Apps
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button asChild size="sm">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild variant="outline">
            <a 
              href="https://github.com/ruhamabek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

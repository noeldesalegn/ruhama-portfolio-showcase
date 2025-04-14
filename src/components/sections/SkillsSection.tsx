
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Layout, Terminal, Server, Palette } from 'lucide-react';

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: ["TypeScript", "JavaScript", "SQL", "Dart", "HTML/CSS"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ["React", "Redux", "Next.js", "Tailwind CSS", "Shadcn UI", "Flutter"]
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "Socket.io"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
  },
  {
    title: "Tools & Other",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Jest", "Data Structures & Algorithms"]
  },
  {
    title: "Design & UI/UX",
    icon: <Palette className="w-6 h-6 text-primary" />,
    skills: ["Figma", "Responsive Design", "UI/UX Principles", "Accessibility"]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Skills</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            I've developed a diverse set of technical skills through my education and project work.
            Here's what I bring to the table:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

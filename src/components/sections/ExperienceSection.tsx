
import React from 'react';
import { CalendarDays, Award, BookOpen, LucideIcon } from 'lucide-react';

type TimelineItem = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  category: 'education' | 'achievement';
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Software Engineering",
    subtitle: "Dire Dawa University",
    date: "2021 - Present",
    description: "Currently in my 3rd year of studying Software Engineering, focusing on systems design, algorithms, and full-stack development.",
    icon: <BookOpen />,
    category: 'education'
  },
  {
    id: 2,
    title: "SkillSwap Hackathon",
    subtitle: "Team Lead & Developer",
    date: "2023",
    description: "Led a team in developing a skill-exchange platform during a 48-hour hackathon. Built with MERN stack and TypeScript.",
    icon: <Award />,
    category: 'achievement'
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    subtitle: "LeetCode & A2SV Preparation",
    date: "2023 - Present",
    description: "Actively practicing DSA problems on LeetCode with the goal of joining Africa to Silicon Valley (A2SV) program.",
    icon: <CalendarDays />,
    category: 'education'
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            My educational journey and key achievements that have shaped my development as a software engineer.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:translate-x-[-0.5px]"></div>

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative mb-12">
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center transform translate-x-[-50%] z-10 text-white">
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <div className="flex items-center mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        item.category === 'education' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' 
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                      }`}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <h4 className="text-gray-600 dark:text-gray-400 mb-2">{item.subtitle}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


import React from 'react';

const Skills = () => {
  const skillCategories = [
  {
    title: 'Backend (Python)',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'Django', level: 65 },
      { name: 'REST APIs', level: 65 }
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'AWS (EC2, ECR, ECS)', level: 55 },
      { name: 'Docker & Docker Compose', level: 60 },
      { name: 'CI/CD (Jenkins)', level: 55 },
      { name: 'Terraform', level: 50 }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 55 },
      { name: 'CSS', level: 50 },
      { name: 'JavaScript', level: 55 }
    ]
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'PostgreSQL', level: 55 },
      { name: 'MySQL', level: 50 },
      { name: 'Git & GitHub', level: 60 },
      { name: 'Linux', level: 55 }
    ]
  }
];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-purple-600"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

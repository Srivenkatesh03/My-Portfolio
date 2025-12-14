
import React from 'react';
import { Infinity, Code, Globe, Server, Database } from 'lucide-react';


const About = () => {
  const interests = [
  { icon: Infinity, title: 'DevOps', description: 'Automation & Reliability' },
  { icon: Server, title: 'Backend Development', description: 'Django • REST APIs' },
  { icon: Code, title: 'Web Developer', description: 'Full-Stack Applications' },
  { icon: Globe, title: 'Cloud Computing', description: 'Scalable Infrastructure' },
  { icon: Database, title: 'Database Systems', description: 'SQL • Data Modeling' }
];

  const techStack = [
  // Programming & Web
  'JavaScript', 'Python',
  'HTML5', 'CSS3', 'Django',

  // DevOps & Cloud
  'AWS', 'EC2', 'ECR', 'ECS',
  'Docker', 'Docker Compose',
  'Jenkins', 'CI/CD',
  'Terraform', 'Linux',

  // Databases
  'SQL', 'MySQL', 'PostgreSQL',

  // AI / ML
  'TensorFlow', 'OpenCV',

  // Tools & Design
  'Git', 'GitHub', 'Postman',
  'Figma', 'Canva',
  'Photoshop', 'Adobe Illustrator', 'Adobe XD'
];


  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6" style={{ textAlign: 'justify' }}>
                  I am a Python Full-Stack Developer with a strong focus on backend development using Django and practical experience in DevOps practices. I specialize in building scalable, maintainable web applications while ensuring efficient deployment, automation, and system reliability. My approach combines clean backend architecture, well-structured APIs, and streamlined delivery pipelines to support modern, production-ready applications.
                </p>
                
                <p style={{ textAlign: 'justify' }}>
                  In DevOps, I focus on automating development workflows and infrastructure to improve speed and reliability. I have experience with CI/CD pipelines, containerization, and infrastructure automation using tools such as Docker, Jenkins, Git, and cloud services on AWS. I emphasize best practices in version control, deployment automation, and environment consistency to reduce downtime and deployment risk.
                </p>

              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <interest.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;

import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  // Handle clicks outside modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectedProject !== null && modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    }

    if (selectedProject !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject]);

  const codeProjects = [
    {
      id: 1,
      title: 'Smart Vehicle Parking Management System',
      shortDescription: 'A application for space detection and parking management',
      fullDescription: 'Smart Vehicle Parking System is an AI-powered solution that uses computer vision for real-time vehicle detection, tracking algorithms (e.g., DeepSORT) for monitoring vehicles, and offers an intuitive interface for parking management. It detects open spaces, tracks vehicles, and provides analytics on parking usage.',
      image: '/smart_parking.png',
      techStack: ['Python', 'TKinter', 'OpenCV', 'Pillow', 'NumPy','YOLO','Deepsort','PyTorch','SciPy','XGBoost','Matplotlib'],
      githubUrl: 'https://github.com/Srivenkatesh03/Smart_Parking_System.git',
      features: [
        'Real-time detection of occupied and free parking spaces',
        'Vehicle tracking and counting using YOLO and DeepSORT',
        'Visual interface built with Tkinter',
        'Support for multiple video sources including webcams and video files',
        'Customizable parking space setup through a graphical interface',
        'Logging and statistics for parking usage',
      ]
    },
    {
      id: 2,
      title: 'CI/CD Pipeline with Github Actions & Docker',
      shortDescription: 'Automated build and deployment pipeline for a web application',
      fullDescription: 'Designed and implemented a complete CI/CD pipeline using Github Actions, Docker, and AWS. The pipeline automates code checkout, build, testing, image creation, and deployment to cloud infrastructure.',
      image: '/acti.png',
      techStack: ['Github Actions', 'Docker', 'AWS EC2', 'Git', 'Linux'],
      githubUrl: 'https://github.com/Srivenkatesh03/AWS-EC2-deploy.git',
      features: [
        'Automated CI/CD pipeline using Github Actions',
        'Docker image build and versioning',
        'Deployment to AWS EC2',
        'Webhook-based pipeline triggers',
        'Rollback-ready deployment structure'
      ]
    },
    {
      id: 3,
      title: 'Infrastructure as Code with Terraform',
      shortDescription: 'AWS infrastructure provisioning using Terraform',
      fullDescription: 'Provisioned AWS infrastructure using Terraform, including EC2 instances, security groups, and networking components. Focused on repeatability, version control, and infrastructure automation.',
      image: '/image.png',
      techStack: ['Terraform', 'AWS', 'EC2', 'VPC', 'Linux'],
      githubUrl: 'https://github.com/Srivenkatesh03/AWS_ECR_ECS.git',
      features: [
        'Reusable Terraform modules',
        'State management and variables',
        'Automated EC2 provisioning',
        'Security group configuration',
        'Infrastructure version control'
      ]
    },
    {
  id: 4,
  title: 'Student Management System (Django)',
  shortDescription: 'A web-based application for managing student records, attendance, and academic performance',
  fullDescription: 'The Student Management System is a Django-based web application designed to manage student information, academic records, and attendance efficiently. It provides role-based access control, secure authentication, and an intuitive interface for administrators to add, update, and monitor student data. The system supports subject-wise marks, automated result calculation, attendance percentage tracking, and data export features for reporting and analysis.',
  image: '/django-pro.png',
  techStack: [
    'Python',
    'Django',
    'HTML',
    'CSS',
    'Bootstrap',
    'SQLite',
    'JavaScript'
  ],
  githubUrl: 'https://github.com/Srivenkatesh03/Student_Management_System.git',
  features: [
    'Secure authentication with login and logout functionality',
    'CRUD operations for student records with image upload support',
    'Department and year-based student classification',
    'Subject-wise marks management with automatic total and percentage calculation',
    'Attendance tracking with percentage computation',
    'Search and pagination for efficient student listing',
    'Role-based access control for administrative actions',
    'CSV export of student details and academic records'
  ]
}

    
  ];

  const selectedProjectData = codeProjects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {codeProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-medium">{project.title}</h4>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && selectedProjectData && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div
                ref={modalRef}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {selectedProjectData.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={selectedProjectData.image}
                        alt={selectedProjectData.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {selectedProjectData.fullDescription}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {selectedProjectData.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProjectData.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      {selectedProjectData.githubUrl && (
                        <a
                          href={selectedProjectData.githubUrl}
                          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Eye, Mail, ExternalLink, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const viewResume = () => {
    window.open('/SRIVENKATESH R.pdf', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Srivenkatesh
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            DevOps Engineer | Python Full-Stack Developer (Django)
          </p>

          <p className="text-lg text-gray-500 mb-6 max-w-2xl mx-auto">
            I design and deploy scalable Django-based applications with automated CI/CD pipelines.
            Focused on cloud infrastructure, containerization, and reliable production systems.
          </p>

          <p className="text-sm text-gray-500 mb-12">
            Docker • Jenkins • AWS • Terraform • Django • REST APIs
          </p>

          {/* CTA Buttons - Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={viewResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <Eye size={20} />
              View Resume
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 border border-gray-300 hover:scale-105"
            >
              <Mail size={20} />
              Contact Me
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-blue-600 hover:text-blue-700 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <ExternalLink size={20} />
              View Projects
            </button>
          </div>

          {/* Social Links - Secondary Row */}
          <div className="flex gap-6 justify-center items-center">
            <a
              href="https://github.com/Srivenkatesh03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors hover:scale-110 duration-200"
            >
              <Github size={22} />
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/srivenkatesh49175"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors hover:scale-110 duration-200"
            >
              <Linkedin size={22} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
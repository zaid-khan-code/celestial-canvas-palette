import { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, ArrowRight, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'UI/UX' },
    { id: 'ai', label: 'AI/ML' },
  ];

  const projects = [
    {
      id: 1,
      title: 'ECommerce Platform',
      description: 'A modern, scalable e-commerce solution with AI-powered recommendations, real-time inventory management, and seamless payment integration.',
      image: '/api/placeholder/600/400',
      category: 'web',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      featured: true,
      year: '2024',
      status: 'Live',
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 2,
      title: 'AI Task Manager',
      description: 'Intelligent task management app that uses machine learning to prioritize tasks, predict completion times, and optimize workflows.',
      image: '/api/placeholder/600/400',
      category: 'ai',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      featured: true,
      year: '2024',
      status: 'In Development',
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial analytics.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Blockchain'],
      featured: false,
      year: '2023',
      status: 'Live',
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 4,
      title: 'Design System',
      description: 'Comprehensive design system with 200+ components, documentation, and Figma library for enterprise-level applications.',
      image: '/api/placeholder/600/400',
      category: 'design',
      tags: ['Figma', 'Storybook', 'TypeScript', 'Tailwind'],
      featured: false,
      year: '2023',
      status: 'Live',
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media managers with real-time data visualization, automated reporting, and team collaboration.',
      image: '/api/placeholder/600/400',
      category: 'web',
      tags: ['Vue.js', 'D3.js', 'Express', 'Redis'],
      featured: false,
      year: '2023',
      status: 'Live',
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness app with workout planning, nutrition tracking, progress analytics, and social features.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      tags: ['Flutter', 'Firebase', 'TensorFlow', 'HealthKit'],
      featured: false,
      year: '2022',
      status: 'Live',
      links: {
        live: '#',
        github: '#',
      },
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, from complex web applications to innovative mobile solutions.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`glass-card group hover:scale-105 transition-all duration-500 reveal ${index === 1 ? 'lg:mt-12' : ''}`}>
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-primary h-64">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-white/80">
                      <Calendar size={16} />
                      <span className="text-sm">{project.year}</span>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.links.live}
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                      <a
                        href={project.links.github}
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300"
                      >
                        <Github size={16} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted/30 rounded-full text-sm font-medium hover:bg-muted/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Section */}
        <div className="reveal">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">All Projects</h3>
            
            {/* Filter Buttons */}
            <div className="flex items-center space-x-2 glass p-2 rounded-2xl">
              <Filter size={16} className="text-muted-foreground" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-gradient-primary text-white shadow-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.filter(p => !p.featured).map((project, index) => (
              <div key={project.id} className="glass-card group hover:scale-105 transition-all duration-500 delay-100" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-secondary h-48">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex space-x-2">
                    <a
                      href={project.links.live}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ExternalLink size={14} className="text-white" />
                    </a>
                    <a
                      href={project.links.github}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <Github size={14} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted/20 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 reveal">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new challenges and bring innovative ideas to life.
            </p>
            <button className="btn-premium">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
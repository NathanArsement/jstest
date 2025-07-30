import React, { useState, useEffect } from "react";
import { 
  Terminal, 
  Code, 
  Briefcase, 
  User, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  FileText, 
  Folder, 
  Monitor, 
  Smartphone, 
  Database, 
  Server, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  X, 
  Maximize2, 
  Minimize, 
  ExternalLink 
} from "lucide-react";

const App = () => {
  const [activeApp, setActiveApp] = useState(null);
  const [minimizedApps, setMinimizedApps] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleApp = (appName) => {
    if (activeApp === appName) {
      setActiveApp(null);
      setMinimizedApps([]);
    } else {
      setActiveApp(appName);
      setMinimizedApps(minimizedApps.filter(app => app !== appName));
    }
  };

  const minimizeApp = (appName) => {
    if (!minimizedApps.includes(appName)) {
      setMinimizedApps([...minimizedApps, appName]);
    }
    setActiveApp(null);
  };

  const restoreApp = (appName) => {
    setMinimizedApps(minimizedApps.filter(app => app !== appName));
    setActiveApp(appName);
  };

  const closeApp = (appName) => {
    setActiveApp(activeApp === appName ? null : activeApp);
    setMinimizedApps(minimizedApps.filter(app => app !== appName));
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true, 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const portfolioData = {
    personal: {
      name: "Alex Johnson",
      title: "Full Stack Developer & UI/UX Designer",
      email: "alex.johnson@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      bio: "Passionate full-stack developer with 5+ years of experience creating elegant, user-centered digital experiences. Specialized in React, Node.js, and modern design systems.",
      skills: ["React", "Node.js", "TypeScript", "Python", "MongoDB", "AWS", "Docker", "GraphQL", "UI/UX Design", "Responsive Design"]
    },
    projects: [
      {
        id: 1,
        name: "E-Commerce Platform",
        category: "Web Development",
        description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://placehold.co/400x250/6366f1/ffffff?text=E-Commerce+Platform",
        demo: "https://example.com/ecommerce",
        github: "https://github.com/example/ecommerce"
      },
      {
        id: 2,
        name: "Health & Fitness App",
        category: "Mobile Development",
        description: "Mobile application for tracking workouts, nutrition, and health metrics with social features.",
        technologies: ["React Native", "Firebase", "Redux", "Apple Health API"],
        image: "https://placehold.co/400x250/10b981/ffffff?text=Fitness+App",
        demo: "https://example.com/fitness",
        github: "https://github.com/example/fitness-app"
      },
      {
        id: 3,
        name: "Data Analytics Dashboard",
        category: "Data Science",
        description: "Interactive dashboard for visualizing complex data sets with real-time updates and predictive analytics.",
        technologies: ["Python", "Django", "PostgreSQL", "D3.js", "Machine Learning"],
        image: "https://placehold.co/400x250/f59e0b/ffffff?text=Analytics+Dashboard",
        demo: "https://example.com/analytics",
        github: "https://github.com/example/analytics"
      },
      {
        id: 4,
        name: "Design System",
        category: "UI/UX Design",
        description: "Comprehensive design system with component library, style guide, and accessibility standards.",
        technologies: ["Figma", "React", "Storybook", "Accessibility"],
        image: "https://placehold.co/400x250/ec4899/ffffff?text=Design+System",
        demo: "https://example.com/design-system",
        github: "https://github.com/example/design-system"
      }
    ],
    experience: [
      {
        company: "Tech Innovations Inc.",
        position: "Senior Full Stack Developer",
        duration: "2020 - Present",
        description: "Lead development of enterprise web applications, mentor junior developers, and implement modern architecture patterns."
      },
      {
        company: "Digital Solutions LLC",
        position: "Frontend Developer",
        duration: "2018 - 2020",
        description: "Developed responsive web applications, improved performance by 40%, and implemented new UI features."
      },
      {
        company: "Startup Ventures",
        position: "Full Stack Developer",
        duration: "2016 - 2018",
        description: "Built MVP products for startups, worked across the entire tech stack, and collaborated with product teams."
      }
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "Master of Science in Computer Science",
        year: "2016",
        description: "Specialized in Human-Computer Interaction and Software Engineering"
      },
      {
        institution: "University of California",
        degree: "Bachelor of Science in Computer Science",
        year: "2014",
        description: "Graduated with honors, member of ACM"
      }
    ]
  };

  const MacWindow = ({ title, icon: Icon, children, onClose, onMinimize, onMaximize }) => (
    <div className="bg-gray-50 rounded-t-lg border border-gray-200 shadow-2xl w-full max-w-4xl mx-auto overflow-hidden">
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <button 
              onClick={onClose}
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors flex items-center justify-center"
            >
              <X size={8} className="text-white opacity-0 hover:opacity-100" />
            </button>
            <button 
              onClick={onMinimize}
              className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center"
            >
              <Minimize size={8} className="text-white opacity-0 hover:opacity-100" />
            </button>
            <button 
              onClick={onMaximize}
              className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors flex items-center justify-center"
            >
              <Maximize2 size={8} className="text-white opacity-0 hover:opacity-100" />
            </button>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <Icon size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700">{title}</span>
          </div>
        </div>
        <div className="text-xs text-gray-500 font-mono">
          {formatTime(currentTime)}
        </div>
      </div>
      <div className="bg-white min-h-96 max-h-96 overflow-y-auto">
        {children}
      </div>
    </div>
  );

  const ResumeApp = () => (
    <MacWindow 
      title="Resume" 
      icon={FileText}
      onClose={() => closeApp('resume')}
      onMinimize={() => minimizeApp('resume')}
      onMaximize={() => {}}
    >
      <div className="p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{portfolioData.personal.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{portfolioData.personal.title}</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>{portfolioData.personal.email}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>{portfolioData.personal.phone}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Briefcase size={20} className="mr-2 text-blue-600" />
              Experience
            </h2>
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium text-gray-800">{exp.position}</h3>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Code size={20} className="mr-2 text-green-600" />
              Skills & Education
            </h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-3">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.personal.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {portfolioData.education.map((edu, index) => (
              <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <span className="text-sm text-gray-500">{edu.year}</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MacWindow>
  );

  const PortfolioApp = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];
    const filteredProjects = selectedCategory === 'All' 
      ? portfolioData.projects 
      : portfolioData.projects.filter(p => p.category === selectedCategory);

    return (
      <MacWindow 
        title="Portfolio" 
        icon={Folder}
        onClose={() => closeApp('portfolio')}
        onMinimize={() => minimizeApp('portfolio')}
        onMaximize={() => {}}
      >
        <div className="p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Portfolio</h1>
            <p className="text-gray-600">Showcasing my best work and projects</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MacWindow>
    );
  };

  const AboutApp = () => {
    const [expanded, setExpanded] = useState(false);

    return (
      <MacWindow 
        title="About Me" 
        icon={User}
        onClose={() => closeApp('about')}
        onMinimize={() => minimizeApp('about')}
        onMaximize={() => {}}
      >
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                AJ
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{portfolioData.personal.name}</h1>
              <p className="text-xl text-blue-600 font-medium mb-6">{portfolioData.personal.title}</p>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {portfolioData.personal.bio}
                </p>
                
                <div className={`${expanded ? '' : 'line-clamp-3'} transition-all duration-300`}>
                  <p className="text-gray-700 leading-relaxed">
                    With a passion for creating seamless digital experiences, I've spent the last five years 
                    developing applications that solve real-world problems. My approach combines technical 
                    excellence with user-centered design principles to deliver products that are both 
                    functional and beautiful.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    I specialize in full-stack development with a focus on modern JavaScript frameworks, 
                    cloud infrastructure, and responsive design. When I'm not coding, you can find me 
                    contributing to open-source projects, speaking at tech conferences, or mentoring 
                    aspiring developers.
                  </p>
                </div>
                
                <button 
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                >
                  <span>{expanded ? 'Show Less' : 'Read More'}</span>
                  {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </MacWindow>
    );
  };

  const TerminalApp = () => {
    const [commandHistory, setCommandHistory] = useState([
      'Welcome to Portfolio Terminal v1.0',
      'Type "help" to see available commands',
      '> '
    ]);

    const handleCommand = (e) => {
      if (e.key === 'Enter') {
        const input = e.target.value.trim();
        if (input) {
          const newHistory = [...commandHistory];
          newHistory[newHistory.length - 1] = `> ${input}`;
          
          let response = '';
          switch (input.toLowerCase()) {
            case 'help':
              response = 'Available commands: help, projects, skills, contact, clear';
              break;
            case 'projects':
              response = `Projects: ${portfolioData.projects.map(p => p.name).join(', ')}`;
              break;
            case 'skills':
              response = `Skills: ${portfolioData.personal.skills.join(', ')}`;
              break;
            case 'contact':
              response = `Contact: ${portfolioData.personal.email} | ${portfolioData.personal.phone}`;
              break;
            case 'clear':
              setCommandHistory(['> ']);
              return;
            default:
              response = `Command not found: ${input}. Type "help" for available commands.`;
          }
          
          newHistory.push(response, '> ');
          setCommandHistory(newHistory);
          e.target.value = '';
        }
      }
    };

    return (
      <MacWindow 
        title="Terminal" 
        icon={Terminal}
        onClose={() => closeApp('terminal')}
        onMinimize={() => minimizeApp('terminal')}
        onMaximize={() => {}}
      >
        <div className="bg-black text-green-400 font-mono text-sm p-4 h-96 overflow-y-auto">
          {commandHistory.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
          <div className="flex">
            <span className="mr-2">></span>
            <input 
              type="text" 
              className="bg-transparent border-none outline-none text-green-400 flex-1"
              onKeyDown={handleCommand}
              autoFocus
            />
          </div>
        </div>
      </MacWindow>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Desktop Background */}
      <div className="fixed inset-0 bg-[url('https://placehold.co/1920x1080/e0e7ff/6366f1?text=Mac+OS+Desktop')] bg-cover bg-center opacity-10"></div>
      
      {/* Dock */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-2xl px-4 py-2 shadow-2xl border border-gray-200 flex space-x-4">
        {[
          { name: 'resume', label: 'Resume', icon: FileText },
          { name: 'portfolio', label: 'Portfolio', icon: Folder },
          { name: 'about', label: 'About', icon: User },
          { name: 'terminal', label: 'Terminal', icon: Terminal }
        ].map(app => (
          <div key={app.name} className="flex flex-col items-center">
            <button
              onClick={() => toggleApp(app.name)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 ${
                activeApp === app.name 
                  ? 'bg-blue-500 text-white shadow-lg scale-110' 
                  : 'bg-white/50 text-gray-700 hover:bg-white/80'
              } ${minimizedApps.includes(app.name) ? 'opacity-50' : ''}`}
            >
              <app.icon size={20} />
            </button>
            <span className="text-xs text-gray-600 mt-1">{app.label}</span>
          </div>
        ))}
      </div>

      {/* Menu Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-2 flex items-center justify-between z-50">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm font-medium text-gray-700">PortfolioOS</span>
        </div>
        
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <span>Wi-Fi</span>
          <span>Battery 87%</span>
          <span className="font-mono">{formatTime(currentTime)}</span>
        </div>
      </div>

      {/* Active Applications */}
      <div className="pt-16 px-8 pb-24">
        {activeApp === 'resume' && !minimizedApps.includes('resume') && <ResumeApp />}
        {activeApp === 'portfolio' && !minimizedApps.includes('portfolio') && <PortfolioApp />}
        {activeApp === 'about' && !minimizedApps.includes('about') && <AboutApp />}
        {activeApp === 'terminal' && !minimizedApps.includes('terminal') && <TerminalApp />}
        
        {/* Welcome Screen */}
        {!activeApp && (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-800 mb-4">Welcome</h1>
              <p className="text-xl text-gray-600 mb-8">Click on an app in the dock to get started</p>
              <div className="flex justify-center space-x-8 text-gray-500">
                <div className="flex flex-col items-center">
                  <FileText size={48} className="mb-2 opacity-70" />
                  <span>Resume</span>
                </div>
                <div className="flex flex-col items-center">
                  <Folder size={48} className="mb-2 opacity-70" />
                  <span>Portfolio</span>
                </div>
                <div className="flex flex-col items-center">
                  <User size={48} className="mb-2 opacity-70" />
                  <span>About</span>
                </div>
                <div className="flex flex-col items-center">
                  <Terminal size={48} className="mb-2 opacity-70" />
                  <span>Terminal</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Minimized Apps Indicator */}
      {minimizedApps.length > 0 && (
        <div className="fixed top-20 right-8 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200">
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-gray-500" />
            <span className="text-sm text-gray-600">
              {minimizedApps.length} app{minimizedApps.length > 1 ? 's' : ''} minimized
            </span>
            <button 
              onClick={() => restoreApp(minimizedApps[0])}
              className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors"
            >
              Restore
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
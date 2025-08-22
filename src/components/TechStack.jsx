import React, { useEffect, useState } from 'react';
import { Sparkles, Star, Zap, Cpu, Database, Shield, Cloud, FileText, BarChart3, Globe, Lock, Code } from 'lucide-react';

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('tech-stack');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    { 
      name: 'React.js', 
      category: 'Frontend Framework', 
      color: 'from-blue-500 to-blue-600', 
      icon: Cpu,
      description: 'Modern UI development'
    },
    { 
      name: 'Node.js', 
      category: 'Runtime Environment', 
      color: 'from-green-500 to-green-600', 
      icon: Globe,
      description: 'Server-side execution'
    },
    { 
      name: 'MongoDB', 
      category: 'Database System', 
      color: 'from-emerald-500 to-emerald-600', 
      icon: Database,
      description: 'NoSQL data storage'
    },
    { 
      name: 'Express.js', 
      category: 'Web Framework', 
      color: 'from-purple-500 to-purple-600', 
      icon: Code,
      description: 'API development'
    },
    { 
      name: 'Firebase', 
      category: 'Authentication', 
      color: 'from-orange-500 to-orange-600', 
      icon: Shield,
      description: 'Secure user management'
    },
    { 
      name: 'Cloudinary', 
      category: 'Media Management', 
      color: 'from-pink-500 to-pink-600', 
      icon: Cloud,
      description: 'Image optimization'
    },
    { 
      name: 'ExcelJS', 
      category: 'File Generation', 
      color: 'from-yellow-500 to-yellow-600', 
      icon: FileText,
      description: 'Spreadsheet creation'
    },
    { 
      name: 'jsPDF', 
      category: 'Document Generation', 
      color: 'from-red-500 to-red-600', 
      icon: BarChart3,
      description: 'PDF generation'
    }
  ];

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-1/3 left-1/4 animate-pulse-slow">
          <Star className="w-4 h-4 text-blue-400/40" />
        </div>
        <div className="absolute top-2/3 right-1/4 animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <Star className="w-3 h-3 text-purple-400/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6 hover-lift glow-effect">
            <Sparkles className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-sm font-semibold text-blue-400">Technology Stack</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Built with{' '}
            <span className="gradient-text text-glow">Modern Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our jewelry management system is built using cutting-edge technologies for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="glass-effect p-6 rounded-2xl text-center hover-lift group relative overflow-hidden h-full">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Premium icon with enhanced styling */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg relative overflow-hidden`}>
                    <tech.icon className="text-white" size={32} />
                    
                    {/* Subtle inner glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-20 blur-sm`}></div>
                    
                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-bl-2xl`}></div>
                  </div>
                  
                  {/* Technology name */}
                  <div className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </div>
                  
                  {/* Category */}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-2">
                    {tech.category}
                  </div>
                  
                  {/* Description */}
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {tech.description}
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technical Features */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass-effect rounded-3xl p-12 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-8 text-center">
                Technical Capabilities
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg relative overflow-hidden">
                    <Zap className="text-white" size={32} />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-20 blur-sm"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">RESTful API</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    Modern API architecture with middleware-based authentication
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg relative overflow-hidden">
                    <Sparkles className="text-white" size={32} />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-20 blur-sm"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">File Management</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    USB printer integration, barcode generation, and image handling
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg relative overflow-hidden">
                    <Star className="text-white" size={32} />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-20 blur-sm"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">Security</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    Enterprise-grade security with role-based access control
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
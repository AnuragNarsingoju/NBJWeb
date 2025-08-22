import React, { useEffect, useState } from 'react';
import { Gem, Calculator, Database, BarChart3, Users, Shield, Smartphone, FileText, CreditCard, Clock, Sparkles, Star } from 'lucide-react';

const Features = () => {
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

    const element = document.getElementById('features');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Gem,
      title: 'Gold & Silver Inventory',
      description: 'Complete inventory management for gold and silver items with weight, purity, and stone details tracking.',
      color: 'from-blue-500 to-blue-600',
      delay: '0s'
    },
    {
      icon: Calculator,
      title: 'Financial Calculations',
      description: 'Advanced gold and silver pricing with stone weight calculations and percentage-based pricing models.',
      color: 'from-purple-500 to-purple-600',
      delay: '0.1s'
    },
    {
      icon: Database,
      title: 'Barcode & Labeling',
      description: 'Automated label generation, barcode management, and USB printer integration for efficient operations.',
      color: 'from-pink-500 to-pink-600',
      delay: '0.2s'
    },
    {
      icon: BarChart3,
      title: 'Reporting & Analytics',
      description: 'Comprehensive reports with Excel export, sales analytics, and detailed financial summaries.',
      color: 'from-green-500 to-green-600',
      delay: '0.3s'
    },
    {
      icon: CreditCard,
      title: 'Money Lender Management',
      description: 'Complete Girivi system with transaction tracking, search, date tracking, and revenue analysis.',
      color: 'from-yellow-500 to-yellow-600',
      delay: '0.4s'
    },
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Karigar management system with attendance tracking, worker profiles, and role-based access control.',
      color: 'from-red-500 to-red-600',
      delay: '0.5s'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Professional invoice generation, template management, and image-based inventory search.',
      color: 'from-indigo-500 to-indigo-600',
      delay: '0.6s'
    },
    {
      icon: Shield,
      title: 'Security & Access Control',
      description: 'Role-based access control, user authentication, and secure session management.',
      color: 'from-teal-500 to-teal-600',
      delay: '0.7s'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-friendly interface with modern UI/UX and loading animations for all devices.',
      color: 'from-orange-500 to-orange-600',
      delay: '0.8s'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Live inventory tracking, stock monitoring, and instant price updates across all items.',
      color: 'from-cyan-500 to-cyan-600',
      delay: '0.9s'
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
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
        <div className="absolute bottom-1/3 left-1/3 animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <Star className="w-5 h-5 text-pink-400/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6 hover-lift glow-effect">
            <Sparkles className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-sm font-semibold text-blue-400">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Powerful Features for{' '}
            <span className="gradient-text text-glow">Jewelry Business</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage your jewelry business efficiently, from inventory tracking to customer management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: feature.delay }}
            >
              <div className="glass-effect p-8 rounded-2xl hover-lift group h-full relative overflow-hidden">
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex-1">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-bl-2xl transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
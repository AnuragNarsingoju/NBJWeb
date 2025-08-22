import React, { useEffect, useState } from 'react';
import { Sparkles, Star, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
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

    const element = document.getElementById('how-it-works');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'System Setup',
      description: 'Quick installation and configuration of the NBJ Jewelry Management System.',
      color: 'from-blue-500 to-blue-600',
      delay: '0s'
    },
    {
      number: '02',
      title: 'Data Migration',
      description: 'Seamless transfer of existing inventory and customer data to the new system.',
      color: 'from-purple-500 to-purple-600',
      delay: '0.2s'
    },
    {
      number: '03',
      title: 'Team Training',
      description: 'Comprehensive training sessions for your staff to ensure smooth operations.',
      color: 'from-green-500 to-green-600',
      delay: '0.4s'
    },
    {
      number: '04',
      title: 'Go Live',
      description: 'Launch your enhanced jewelry business operations with full system capabilities.',
      color: 'from-pink-500 to-pink-600',
      delay: '0.6s'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
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
            <span className="text-sm font-semibold text-blue-400">Getting Started</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Get Started in{' '}
            <span className="gradient-text text-glow">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your journey to transforming your jewelry business starts here with our simple setup process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: step.delay }}
            >
              <div className="glass-effect p-8 rounded-2xl hover-lift group relative overflow-hidden text-center">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Step number */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <span className="text-2xl font-black text-white">{step.number}</span>
                  </div>
                  
                  {/* Step title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  {/* Step description */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Arrow indicator */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:block">
                      <ArrowRight className="w-6 h-6 text-gray-500" />
                    </div>
                  )}
                </div>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-bl-2xl transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Begin?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Start your transformation journey today and experience the power of our jewelry management system.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover-lift shadow-lg group">
                <span className="flex items-center">
                  Get Started Now
                  <CheckCircle className="ml-2 group-hover:scale-110 transition-transform" size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
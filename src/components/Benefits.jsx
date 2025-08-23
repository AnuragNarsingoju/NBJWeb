import React, { useEffect, useState } from 'react';
import { Clock, DollarSign, Users, Shield, BarChart3, Zap, Sparkles, Star, ArrowRight } from 'lucide-react';

const Benefits = () => {
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

    const element = document.getElementById('benefits');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: 'Operational Efficiency',
      description: 'Streamlined inventory management processes and automated calculations reducing manual errors.',
      color: 'from-blue-500 to-blue-600',
      delay: '0s'
    },
    {
      icon: DollarSign,
      title: 'Financial Control',
      description: 'Real-time financial tracking, accurate pricing calculations, and comprehensive audit trails.',
      color: 'from-green-500 to-green-600',
      delay: '0.1s'
    },
    {
      icon: Users,
      title: 'Better Customer Service',
      description: 'Quick inventory searches, professional invoice generation, and efficient order processing.',
      color: 'from-purple-500 to-purple-600',
      delay: '0.2s'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Role-based access control, complete audit trails, and enterprise-grade security protocols.',
      color: 'from-red-500 to-red-600',
      delay: '0.3s'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Detailed analytics, comprehensive reporting, and data-driven business insights.',
      color: 'from-yellow-500 to-yellow-600',
      delay: '0.4s'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Live inventory tracking, instant price updates, and immediate stock monitoring.',
      color: 'from-pink-500 to-pink-600',
      delay: '0.5s'
    }
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-1/4 left-1/3 animate-pulse-slow">
          <Star className="w-4 h-4 text-green-400/40" />
        </div>
        <div className="absolute top-3/4 right-1/3 animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <Star className="w-3 h-3 text-blue-400/40" />
        </div>
        <div className="absolute bottom-1/4 left-2/3 animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <Star className="w-5 h-5 text-purple-400/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6 hover-lift glow-effect">
            <Sparkles className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-sm font-semibold text-blue-400">Why Choose NBJ</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Transform Your Jewelry Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the key benefits that will revolutionize your jewelry business operations and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: benefit.delay }}
            >
              <div className="glass-effect p-8 rounded-2xl hover-lift group h-full relative overflow-hidden">
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <benefit.icon className="text-white" size={36} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-center leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-bl-2xl transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative overflow-hidden rounded-3xl p-12">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Floating sparkles */}
              <div className="absolute top-1/4 left-1/4 animate-pulse-slow">
                <Star className="w-6 h-6 text-white/30" />
              </div>
              <div className="absolute bottom-1/4 right-1/4 animate-pulse-slow" style={{ animationDelay: '1s' }}>
                <Star className="w-4 h-4 text-white/30" />
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-white mb-6">
                Ready to Transform Your Jewelry Business?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join jewelry businesses already using our system to boost their success and efficiency.
              </p>
              <button className="group bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-lg hover-lift shadow-2xl overflow-hidden relative" onClick={() => window.location.href = '#contact'}>
                <span className="relative z-10 flex items-center">
                  Schedule a Demo Now
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                </span>
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

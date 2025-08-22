import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Gem, Calculator, Database, Sparkles, Star, Zap } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Only calculate scroll progress when section is in view
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          // Calculate scroll progress within the section (0 to 1)
          const scrollProgress = Math.max(0, Math.min(1, 
            (windowHeight - sectionTop) / (windowHeight + sectionHeight)
          ));
          
          setScrollY(scrollProgress);
        } else {
          // Reset when section is not in view
          setScrollY(0);
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements with controlled scroll parallax */}
      <div className="absolute inset-0">
        {/* Floating orbs with controlled scroll movement */}
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translateX(${scrollY * -50}px) translateY(${scrollY * 25}px)`
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" 
          style={{ 
            animationDelay: '2s',
            transform: `translateX(${scrollY * 50}px) translateY(${scrollY * -15}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float" 
          style={{ 
            animationDelay: '4s',
            transform: `translateX(${scrollY * -40}px) translateY(${scrollY * 20}px)`
          }}
        ></div>
        
        {/* Additional floating elements with controlled scroll movement */}
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-500/10 rounded-full blur-2xl animate-float" 
          style={{ 
            animationDelay: '1s',
            transform: `translateX(${scrollY * 30}px) translateY(${scrollY * -10}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl animate-float" 
          style={{ 
            animationDelay: '3s',
            transform: `translateX(${scrollY * -20}px) translateY(${scrollY * 30}px)`
          }}
        ></div>
        
        {/* Sparkle effects with controlled scroll movement */}
        <div 
          className="absolute top-1/3 left-1/3 animate-pulse-slow"
          style={{
            transform: `translateX(${scrollY * -15}px) translateY(${scrollY * 10}px)`
          }}
        >
          <Star className="w-6 h-6 text-blue-400/60" />
        </div>
        <div 
          className="absolute top-2/3 right-1/3 animate-pulse-slow" 
          style={{ 
            animationDelay: '1s',
            transform: `translateX(${scrollY * 20}px) translateY(${scrollY * -15}px)`
          }}
        >
          <Star className="w-4 h-4 text-purple-400/60" />
        </div>
        <div 
          className="absolute bottom-1/3 left-2/3 animate-pulse-slow" 
          style={{ 
            animationDelay: '2s',
            transform: `translateX(${scrollY * -25}px) translateY(${scrollY * 20}px)`
          }}
        >
          <Star className="w-5 h-5 text-pink-400/60" />
        </div>
      </div>

      {/* Mouse-following gradient */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
        }}
      ></div>

      {/* Main content with controlled scroll animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{marginTop: '40px'}}>
        <div 
          className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            transform: `translateY(${scrollY * -25}px) scale(${1 + scrollY * 0.02})`
          }}
        >
          {/* Badge with controlled scroll movement */}
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-8 hover-lift glow-effect"
            style={{
              transform: `translateX(${scrollY * -10}px)`
            }}
          >
            <Sparkles className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-sm font-semibold text-blue-400">Enterprise-Grade Solution</span>
          </div>

          {/* Main headline with controlled scroll movement */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8"
            style={{
              transform: `translateY(${scrollY * -15}px)`
            }}
          >
            <span className="text-white">NBJ Jewelry</span>
            <br />
            <span className="gradient-text text-glow">Management System</span>
          </h1>
          
          {/* Subtitle with controlled scroll movement */}
          <p 
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{
              transform: `translateY(${scrollY * -10}px)`
            }}
          >
            A comprehensive, enterprise-grade jewelry management platform designed to revolutionize 
            <span className="text-blue-400 font-medium"> inventory management</span>, 
            <span className="text-purple-400 font-medium"> sales tracking</span>, and 
            <span className="text-pink-400 font-medium"> business operations</span> for jewelry businesses.
          </p>

          {/* CTA Buttons with controlled scroll movement */}
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            style={{
              transform: `translateY(${scrollY * -20}px)`
            }}
          >
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl hover-lift shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center text-lg">
                Start Free Trial
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </button>
            
            <button className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover-lift glass-effect backdrop-blur-xl group">
              <span className="flex items-center">
                <Zap className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Core Features Grid with controlled scroll movement */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{
              transform: `translateY(${scrollY * -15}px)`
            }}
          >
            {[
              {
                icon: Gem,
                title: 'Gold & Silver',
                description: 'Complete Inventory Management',
                color: 'from-blue-400 to-blue-600',
                delay: '0s',
                direction: 'left'
              },
              {
                icon: Calculator,
                title: 'Financial Tools',
                description: 'Advanced Pricing & Calculations',
                color: 'from-purple-400 to-purple-600',
                delay: '0.2s',
                direction: 'right'
              },
              {
                icon: Database,
                title: 'Barcode System',
                description: 'Automated Label & Tracking',
                color: 'from-pink-400 to-pink-600',
                delay: '0.4s',
                direction: 'left'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`transform transition-all duration-700 h-full ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ 
                  transitionDelay: feature.delay
                  // Removed scroll-based movement - cards stay in place
                }}
              >
                <div className="glass-effect p-8 rounded-2xl hover-lift group relative overflow-hidden h-full flex flex-col">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg flex-shrink-0`}>
                    <feature.icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors text-center flex-shrink-0">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-center flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with controlled scroll movement */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 15}px)`
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

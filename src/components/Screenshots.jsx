import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Star, Monitor, Smartphone, Tablet, Zap, ArrowRight, CheckCircle, Play } from 'lucide-react';

const Screenshots = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const sectionRef = useRef(null);

  const screens = [
    {
      title: 'Dashboard Overview',
      description: 'Complete business overview with key metrics, recent transactions, and quick actions at your fingertips.',
      longDescription: 'Get a comprehensive view of your jewelry business with real-time analytics, sales performance metrics, and quick access to essential functions. Monitor your daily sales, track inventory levels, and manage customer interactions all from one intuitive dashboard.',
      icon: Monitor,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20',
      features: ['Real-time Analytics', 'Business Metrics', 'Quick Actions', 'Sales Overview'],
      imageUrl: 'https://www.apple.com/v/iphone-16-pro/f/images/overview/photographic-styles/aesthetics__e28ydb357gcy_xsmall_2x.jpg'
    },
    {
      title: 'POS Interface',
      description: 'Intuitive point-of-sale interface designed for jewelry stores with fast checkout and payment processing.',
      longDescription: 'Streamline your sales process with our elegant POS interface. Process transactions quickly, handle multiple payment methods, generate professional receipts, and manage complex jewelry sales with ease.',
      icon: Smartphone,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20',
      features: ['Fast Checkout', 'Payment Processing', 'Receipt Generation', 'Tax Calculation'],
      imageUrl: 'https://www.apple.com/in/iphone-16-pro/images/overview/photographic-styles/megapixels__dhiskrxv388y_xsmall_2x.jpg'
    },
    {
      title: 'Inventory Management',
      description: 'Comprehensive inventory tracking with detailed product information, photos, and real-time stock levels.',
      longDescription: 'Keep perfect track of your precious inventory with detailed product catalogs, high-resolution photo management, barcode scanning, and automated reorder alerts. Never lose track of a single piece again.',
      icon: Tablet,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20',
      features: ['Stock Tracking', 'Product Photos', 'Barcode Scanning', 'Reorder Alerts'],
      imageUrl: 'https://www.apple.com/v/iphone-16-pro/f/images/overview/photographic-styles/aesthetics__e28ydb357gcy_xsmall_2x.jpg'
    },
    {
      title: 'Customer Management',
      description: 'Build lasting relationships with detailed customer profiles, purchase history, and personalized service tracking.',
      longDescription: 'Create meaningful customer relationships with comprehensive profiles, purchase history tracking, preference management, and communication logs. Provide personalized service that keeps customers coming back.',
      icon: Zap,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-500/20 to-pink-600/20',
      features: ['Customer Profiles', 'Purchase History', 'Preferences', 'Communication Logs'],
      imageUrl: 'https://www.apple.com/v/iphone-16-pro/f/images/overview/photographic-styles/aesthetics__e28ydb357gcy_xsmall_2x.jpg'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        progress = Math.abs(rect.top) / (sectionHeight - windowHeight);
        progress = Math.max(0, Math.min(1, progress));
        
        const screenProgress = progress * (screens.length - 1);
        const newCurrentScreen = Math.round(screenProgress);
        
        if (newCurrentScreen !== currentScreen && newCurrentScreen >= 0 && newCurrentScreen < screens.length) {
          setCurrentScreen(newCurrentScreen);
        }
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [currentScreen, screens.length]);

  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  return (
    <div className="bg-black">
      <section 
        ref={sectionRef} 
        className="relative h-[500vh] bg-black"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-[28rem] h-[28rem] bg-gradient-to-bl from-green-500/15 via-blue-500/10 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center h-full">
                
                {/* Left Side - Screen Content */}
                <div className="order-2 lg:order-1 space-y-8">
                  {screens.map((screen, index) => (
                    <div
                      key={index}
                      className={`transform transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        index === currentScreen 
                          ? 'opacity-100 translate-x-0 scale-100' 
                          : index < currentScreen 
                            ? 'opacity-0 -translate-x-12 -translate-y-12 scale-95' 
                            : 'opacity-0 translate-x-12 -translate-y-12 scale-95'
                      }`}
                      style={{
                        position: index === currentScreen ? 'relative' : 'absolute',
                        top: index !== currentScreen ? '50%' : 'auto',
                        transform: index !== currentScreen ? 'translateY(-50%)' : 'none'
                      }}
                    >
                      <div className="space-y-8">
                        {/* Icon and Title */}
                        <div className="flex items-center space-x-6 mb-8">
                          <div className={`relative w-20 h-20 bg-gradient-to-br ${screen.color} rounded-3xl flex items-center justify-center shadow-2xl shadow-black/25`}>
                            <screen.icon className="text-white" size={28} />
                          </div>
                          <div className="space-y-3">
                            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-sm font-semibold text-gray-200 tracking-wide">Feature {index + 1}</span>
                            </div>
                            <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                {screen.title}
                              </span>
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="hidden md:block text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light tracking-wide">
                          {screen.longDescription}
                        </p>

                        {/* Features Grid */}
                        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                          {screen.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex} 
                              className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15 transition-all duration-300"
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-sm lg:text-base text-gray-200 font-medium tracking-wide">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Side - Phone Mockup */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="relative w-80 h-[640px] transform hover:scale-105 transition-transform duration-700 ease-out">
                      {/* Phone Frame */}
                     {/* Screen */}
                     <div className="absolute inset-4 rounded-[3rem] overflow-hidden shadow-inner ring-1 ring-white/10 " style={{zIndex: 99999}}>
                      {screens.map((screen, index) => (
                        <img
                          key={screen.imageUrl}
                          src={screen.imageUrl}
                          alt={screen.title}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out rounded-[3rem] 
                            ${index === currentScreen ? 'opacity-100' : 'opacity-0'}`}
                        />
                      ))}

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/20"></div>

                      {/* Status bar, overlays, etc. */}
                    </div>
                                            
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${screens[currentScreen]?.bgColor} rounded-[3.5rem] blur-3xl scale-110 transition-all duration-1000 opacity-40 animate-pulse`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${screens[currentScreen]?.color} rounded-[3.5rem] blur-2xl scale-105 transition-all duration-1000 opacity-20`}></div>
                    </div>

                    {/* Progress indicator */}
                    <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                      <div className="flex flex-col space-y-6 bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                        {screens.map((_, index) => (
                          <div
                            key={index}
                            className={`w-1 h-12 rounded-full transition-all duration-500 relative overflow-hidden ${
                              index === currentScreen 
                                ? `bg-gradient-to-b ${screens[currentScreen].color} shadow-lg` 
                                : 'bg-gray-600/50'
                            }`}
                          >
                            {index === currentScreen && (
                              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Features Section */}
      <section className="lg:hidden bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {screens.map((screen, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${screen.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <screen.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-2">
                      <span className="text-xs font-medium text-gray-300">Feature {index + 1}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">{screen.title}</h4>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {screen.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-black py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-[2.5rem] p-16 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/8 to-pink-500/5"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-lg">
                <Sparkles className="w-6 h-6 text-blue-400 mr-3 animate-pulse" />
                <span className="text-base font-semibold text-blue-400 tracking-wide">Ready to Transform Your Business?</span>
              </div>
              
              <h3 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Experience the Full Platform
                </span>
              </h3>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
                Schedule a personalized demo to see how our comprehensive jewelry management system can streamline your operations and boost your sales.
              </p>
              <button className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-12 py-6 rounded-3xl transition-all duration-500 hover:scale-110 hover:shadow-2xl group text-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center">
                  <Play className="mr-4 group-hover:scale-125 transition-transform duration-500" size={24} />
                  Schedule Your Demo
                  <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform duration-500" size={24} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Screenshots;
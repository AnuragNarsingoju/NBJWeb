import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, Star, Monitor, Smartphone, Tablet, Zap, ArrowRight, CheckCircle, Play } from 'lucide-react';

const Screenshots = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const sectionRef = useRef(null);
  const titleTimeoutRef = useRef(null);

  const screens = [
    {
  "title": "Gold Management System",
  "description": "A simple and complete solution to manage gold stock, sales, purchases, billing, and payments all in one place.",
  "icon": Star,
  "color": "from-yellow-500 to-yellow-600",
  "bgColor": "from-yellow-500/20 to-yellow-600/20",
  "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "features": [
    {
      "title": "Gold Entry",
      "description": "Add gold items quickly using barcode scanning or enter details manually with full control over pricing and charges.",
      "icon": Star,
      "color": "from-yellow-500 to-yellow-600",
      "bgColor": "from-yellow-500/20 to-yellow-600/20",
      "details": [
        "Add gold items by scanning a barcode – the system will automatically calculate weight and price.",
        "Manually enter or update details like weight, price, and making charges if needed.",
        "Easily edit or correct details anytime before completing the sale."
      ]
    },
    {
      "title": "Old Gold Purchase",
      "description": "Buy old gold from customers and adjust its value against their new purchase bill automatically.",
      "icon": Star,
      "color": "from-amber-500 to-amber-600",
      "bgColor": "from-amber-500/20 to-amber-600/20",
      "details": [
        "Accept old gold from customers as part of a new purchase.",
        "The system deducts the value of old gold from the customer’s total bill instantly, reducing the amount they pay."
      ]
    },
    {
      "title": "Bills & Invoices",
      "description": "Easily generate the exact type of bill your customer needs – estimation, retail, or GST included.",
      "icon": Star,
      "color": "from-blue-500 to-blue-600",
      "bgColor": "from-blue-500/20 to-blue-600/20",
      "details": [
        "Choose the type of bill that fits your customer’s requirement.",
        "Estimation Bill: Gives a rough idea of cost before purchase.",
        "Retail Bill: A standard bill without GST details.",
        "GST Bill: A full bill with GST details for customers who request it."
      ]
    },
    {
      "title": "Smart Payment",
      "description": "Collect payments instantly with auto-generated UPI QR codes for each transaction.",
      "icon": Star,
      "color": "from-green-500 to-green-600",
      "bgColor": "from-green-500/20 to-green-600/20",
      "details": [
        "A UPI QR code is automatically created based on the total bill amount.",
        "Customers can simply scan the QR code on their phone and pay instantly."
      ]
    },
    {
      "title": "Sales & Stock Management",
      "description": "Keep track of every sale with customer details and get real-time stock updates automatically.",
      "icon": Star,
      "color": "from-purple-500 to-purple-600",
      "bgColor": "from-purple-500/20 to-purple-600/20",
      "details": [
        "Each sale is recorded with customer name, item details, date, and time automatically.",
        "The sold item is removed from stock instantly so you always know your current inventory."
      ]
    },
    {
      "title": "Returns",
      "description": "Easily manage returns and keep your inventory accurate with automatic stock adjustments.",
      "icon": Star,
      "color": "from-red-500 to-red-600",
      "bgColor": "from-red-500/20 to-red-600/20",
      "details": [
        "If a customer returns an item, just mark it as returned in the system.",
        "The item is automatically added back to your stock so inventory remains correct."
      ]
    }
  ]
},
    {
      title: "Transaction Processing",
      description: "Streamlined gold transactions and billing",
      icon: Smartphone,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-500/20 to-orange-600/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      features: [
        {
          title: "Old Gold Purchase",
          description: "Purchase old gold from customers with automatic value deduction from new purchases.",
          icon: Smartphone,
          color: "from-orange-500 to-orange-600",
          bgColor: "from-orange-500/20 to-orange-600/20",
          details: [
            "The system allows you to purchase old gold from customers.",
            "The value of the old gold will be deducted directly from the new purchase amount, so the customer pays less."
          ]
        },
        {
          title: "Bills & Invoices",
          description: "Generate different types of bills including estimation, retail, and GST bills based on customer needs.",
          icon: Tablet,
          color: "from-green-500 to-green-600",
          bgColor: "from-green-500/20 to-green-600/20",
          details: [
            "You can provide different types of bills depending on customer needs.",
            "Estimation Bill: A rough cost idea for the customer before purchase.",
            "Retail Bill: A normal sales bill without GST.",
            "GST Bill: A bill with GST details for customers who request it."
          ]
        }
      ]
    },
    {
      title: "Payment Solutions",
      description: "Modern payment processing and UPI integration",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-600/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      features: [
        {
          title: "Smart Payment",
          description: "Generate UPI QR codes for instant mobile payments with seamless transaction processing.",
          icon: Zap,
          color: "from-blue-500 to-blue-600",
          bgColor: "from-blue-500/20 to-blue-600/20",
          details: [
            "The system can show a UPI QR code based on the final price entered.",
            "Customers just scan the QR code and pay instantly from their mobile UPI apps."
          ]
        }
      ]
    },
    {
      title: "Inventory Management",
      description: "Real-time stock tracking and sales management",
      icon: Monitor,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-600/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      features: [
        {
          title: "Sales & Stock Management",
          description: "Automatic customer and item tracking with real-time inventory updates.",
          icon: Monitor,
          color: "from-purple-500 to-purple-600",
          bgColor: "from-purple-500/20 to-purple-600/20",
          details: [
            "Every time you sell an item, the system saves the customer details, item details, and the date and time of the purchase automatically.",
            "The sold item will be removed from stock so you always know what is available in the shop."
          ]
        }
      ]
    },
    {
      title: "Customer Service",
      description: "Efficient return processing and customer support",
      icon: Smartphone,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-500/20 to-red-600/20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      features: [
        {
          title: "Returns",
          description: "Streamlined return process with automatic stock restoration and inventory management.",
          icon: Smartphone,
          color: "from-red-500 to-red-600",
          bgColor: "from-red-500/20 to-red-600/20",
          details: [
            "If a customer returns an item, the system makes it very easy to handle.",
            "The returned item will be automatically added back to the stock so your inventory stays correct."
          ]
        }
      ]
    }
  ];

  // Clear all timeouts
  const clearAllTimeouts = useCallback(() => {
    if (titleTimeoutRef.current) {
      clearTimeout(titleTimeoutRef.current);
      titleTimeoutRef.current = null;
    }
  }, []);

  // Enhanced timeout clearing function
  const clearAllTimers = useCallback(() => {
    clearAllTimeouts();
    // Clear any other potential timers
    if (titleTimeoutRef.current) {
      clearTimeout(titleTimeoutRef.current);
      titleTimeoutRef.current = null;
    }
  }, [clearAllTimeouts]);

  // Title cycling animation effect - Fixed to cycle through all features smoothly
  useEffect(() => {
    if (currentScreen >= 0 && currentScreen < screens.length) {
      clearAllTimers();
      
      const currentScreenData = screens[currentScreen];
      
      if (!currentScreenData || !currentScreenData.features || currentScreenData.features.length === 0) {
        return;
      }
      
      // Reset to first feature when screen changes
      setCurrentTitleIndex(0);

      const cycleTitle = (titleIndex = 0) => {
        if (titleIndex >= currentScreenData.features.length) {
          // When reaching the end, wait a bit then restart from beginning
          titleTimeoutRef.current = setTimeout(() => {
            setCurrentTitleIndex(0);
            cycleTitle(0); // Restart infinite loop
          }, 3000); // Wait 3 seconds before restarting
          return;
        }

        setCurrentTitleIndex(titleIndex);
        
        titleTimeoutRef.current = setTimeout(() => {
          cycleTitle(titleIndex + 1);
        }, 4000); // Hold each title for 4 seconds (minimum 3 seconds as requested)
      };

      // Start cycling with a delay
      const startDelay = setTimeout(() => {
        cycleTitle(0);
      }, 1500);

      // Cleanup function to clear both timers
      return () => {
        clearTimeout(startDelay);
        clearAllTimers();
      };
    }

    return () => {
      clearAllTimers();
    };
  }, [currentScreen, clearAllTimers]);

  // Cleanup effect when component unmounts
  useEffect(() => {
    return () => {
      clearAllTimers();
    };
  }, [clearAllTimers]);

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
          // Reset title index when screen changes to ensure proper counting
          setCurrentTitleIndex(0);
        }
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 32); // Increased throttle for smoother performance
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

  // Get current feature for dynamic styling - Now based on current screen
  const getCurrentFeature = () => {
    if (screens[currentScreen]) {
      return screens[currentScreen];
    }
    return screens[0];
  };

  // Get current video feature - Now uses single video per screen
  const getCurrentVideoFeature = () => {
    if (screens[currentScreen]) {
      return screens[currentScreen];
    }
    return screens[0];
  };

  const currentFeature = getCurrentFeature();
  const currentVideoFeature = getCurrentVideoFeature();

  return (
    <div className="bg-black">
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .bg-300\% {
          background-size: 300% 300%;
        }
      `}</style>
      <section 
        id="screenshots"
        ref={sectionRef} 
        className="relative h-[500vh] bg-black"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background Elements - Now changes based on current screen (main feature list) */}
          <div className="absolute inset-0">
            <div className={`absolute top-1/4 left-0 w-[32rem] h-[32rem] bg-gradient-to-br ${currentFeature?.color ? currentFeature.color.replace('from-', 'from-').replace('to-', 'to-') + '/15' : 'from-blue-500/15'} via-purple-500/10 to-pink-500/15 rounded-full blur-3xl animate-pulse transition-all duration-1000`}></div>
            <div className={`absolute bottom-1/4 right-0 w-[28rem] h-[28rem] bg-gradient-to-bl ${currentFeature?.color ? currentFeature.color.replace('from-', 'from-').replace('to-', 'to-') + '/15' : 'from-green-500/15'} via-blue-500/10 to-purple-500/15 rounded-full blur-3xl animate-pulse transition-all duration-1000`} style={{ animationDelay: '2s' }}></div>
            
            {/* Additional modern background elements */}
            <div className={`absolute top-1/3 right-1/4 w-[20rem] h-[20rem] bg-gradient-to-br ${currentFeature?.color ? currentFeature.color.replace('from-', 'from-').replace('to-', 'to-') + '/10' : 'from-cyan-500/10'} via-blue-500/8 to-purple-500/10 rounded-full blur-2xl animate-pulse transition-all duration-1000`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute bottom-1/3 left-1/4 w-[16rem] h-[16rem] bg-gradient-to-tr ${currentFeature?.color ? currentFeature.color.replace('from-', 'from-').replace('to-', 'to-') + '/12' : 'from-yellow-500/12'} via-orange-500/8 to-red-500/12 rounded-full blur-2xl animate-pulse transition-all duration-1000`} style={{ animationDelay: '3s' }}></div>
            
            {/* Floating geometric shapes */}
            <div className={`absolute top-20 right-20 w-4 h-4 bg-gradient-to-r ${currentFeature?.color ? currentFeature.color.replace('from-', 'from-').replace('to-', 'to-') : 'from-cyan-400 to-blue-500'} rounded-full animate-bounce opacity-60 transition-all duration-1000`} style={{ animationDelay: '0s' }}></div>
            <div className={`absolute top-40 left-32 w-3 h-3 bg-gradient-to-r ${currentFeature?.color ? currentFeature.color.replace('from-', 'from-').replace('to-', 'to-') : 'from-pink-400 to-purple-500'} rounded-full animate-bounce opacity-60 transition-all duration-1000`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute bottom-32 right-32 w-2 h-2 bg-gradient-to-r ${currentFeature?.color ? currentFeature.color.replace('from-', 'from-').replace('to-', 'to-') : 'from-yellow-400 to-orange-500'} rounded-full animate-bounce opacity-60 transition-all duration-1000`} style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center h-full">
                
                {/* Left Side - Screen Content */}
                <div className="order-2 lg:order-1 space-y-8 flex flex-col justify-center">
                  {screens.map((screenArray, index) => (
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
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                          <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${currentFeature?.color || 'from-blue-500 to-purple-600'} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl shadow-black/25 transition-all duration-1000`}>
                            {currentFeature?.icon ? 
                              React.createElement(currentFeature.icon, { className: "text-white", size: currentFeature.icon === Star ? 24 : 20 }) :
                              <Star className="text-white" size={24} />
                            }
                          </div>
                          <div className="space-y-3">
                            <div className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wide">
                                {currentFeature?.features?.[currentTitleIndex]?.title || `Feature ${currentTitleIndex + 1}`} - {currentTitleIndex + 1}/{screens[currentScreen]?.features?.length || 0}
                              </span>
                            </div>
                            <h3 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight min-h-[3rem] sm:min-h-[4rem] flex items-center">
                              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transition-all duration-500">
                                {currentFeature?.features?.[currentTitleIndex]?.title || 'Loading...'}
                              </span>
                            </h3>
                          </div>
                        </div>

                        {/* Main Feature Highlight */}
                        <div className="hidden lg:block max-w-4xl xl:max-w-5xl">
                          <div className={`relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-br from-black/60 via-black/40 to-black/60 border border-white/10 backdrop-blur-3xl min-h-[280px] lg:min-h-[320px] transition-all duration-1000 hover:scale-105 shadow-2xl shadow-black/50 group`}>
                            {/* Animated background mesh */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
                            <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/15 via-transparent to-yellow-500/15 animate-pulse" style={{ animationDelay: '1s' }}></div>
                            
                            {/* Floating orbs */}
                            <div className="absolute top-6 sm:top-8 right-8 sm:right-12 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-60 blur-sm" style={{ animationDelay: '0s' }}></div>
                            <div className="absolute top-16 sm:top-20 right-6 sm:right-8 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce opacity-60 blur-sm" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-10 w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-60 blur-sm" style={{ animationDelay: '1s' }}></div>
                            
                            {/* Glowing border on hover */}
                            <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 p-6 lg:p-8">
                              {/* Single Feature Display with Horizontal Scroll */}
                              <div className="relative overflow-hidden">
                                <div className="flex transition-transform duration-1500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" 
                                     style={{ transform: `translateX(-${currentTitleIndex * 100}%)` }}>
                                  {currentFeature?.features && currentFeature.features.map((item, itemIndex) => (
                                    <div key={itemIndex} className="w-full flex-shrink-0 px-2">
                                      <div className="bg-gradient-to-br from-gray-900/90 via-black/70 to-gray-800/90 rounded-[2rem] p-6 border border-white/30 backdrop-blur-3xl relative overflow-hidden shadow-xl group/feature transition-all duration-1000 ring-2 ring-blue-400/50 shadow-blue-400/20 shadow-2xl">
                                        {/* Multi-layered animated background */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${item.bgColor || 'from-blue-500/20 to-purple-600/20'} opacity-15 animate-pulse`}></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                                        
                                        {/* Active indicator */}
                                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 via-purple-400 to-transparent opacity-80 animate-pulse"></div>
                                        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-cyan-400 via-pink-400 to-transparent opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 via-purple-400 to-transparent opacity-80 animate-pulse"></div>
                                        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 via-pink-400 to-transparent opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        
                                        <div className="relative z-10">
                                          {/* Feature header with icon and title */}
                                          <div className="flex items-start space-x-4 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 scale-110 shadow-blue-400/30 transition-all duration-1000">
                                              {item.icon ? 
                                                React.createElement(item.icon, { className: "text-white", size: 24 }) :
                                                <Star className="text-white" size={24} />
                                              }
                                            </div>
                                            <div className="flex-1">
                                              <h4 className="text-xl font-bold mb-2 text-white scale-105 transition-all duration-1000">
                                                {item.title}
                                              </h4>
                                              <p className="text-sm text-gray-200 transition-all duration-1000">
                                                {item.description}
                                              </p>
                                            </div>
                                          </div>
                                          
                                          {/* Features list */}
                                          <div className="space-y-3">
                                            {item.details && item.details.map((detail, detailIndex) => (
                                              <div key={detailIndex} className="flex items-start space-x-3 text-sm opacity-100 translate-x-0 transition-all duration-1000" 
                                                   style={{ transitionDelay: `${detailIndex * 100}ms` }}>
                                                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse scale-125 transition-all duration-1000"></div>
                                                <span className="text-gray-200 font-medium transition-all duration-1000">
                                                  {detail}
                                                </span>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Progress indicator */}
                              <div className="flex justify-center mt-6 lg:mt-8">
                                <div className="flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm shadow-lg">
                                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                                  <span className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide">
                                    {currentTitleIndex + 1} of {screens[currentScreen]?.features?.length || 0} features
                                  </span>
                                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-pink-400 to-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Side - Phone Mockup */}
                <div
                  className="order-1 lg:order-2 flex justify-center items-center lg:ml-[200px]"
                  style={{ marginTop: '100px' }}
                >
                  <div className="relative">
                    <div className="relative w-72 sm:w-80 h-[576px] sm:h-[640px] transform hover:scale-105 transition-transform duration-700 ease-out">
                      {/* Phone Frame */}
                      {/* Screen - Now shows single video per screen */}
                      <div className="absolute inset-4 rounded-[3rem] overflow-hidden shadow-inner ring-1 ring-white/10" style={{zIndex: 99999}}>
                        {/* Show video for current screen - single video per screen */}
                        {currentVideoFeature && (
                          <video
                            key={`screen-${currentScreen}`}
                            src={currentVideoFeature.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="absolute inset-0 w-full h-full object-cover rounded-[3rem] transition-all duration-1000"
                            onError={(e) => {
                              // Fallback to a gradient background if video fails to load
                              e.target.style.display = 'none';
                              const fallback = document.createElement('div');
                              fallback.className = `absolute inset-0 bg-gradient-to-br ${currentVideoFeature.color || 'from-blue-500 to-purple-600'} rounded-[3rem] flex items-center justify-center`;
                              fallback.innerHTML = `
                                <div class="text-center">
                                  <div class="w-16 h-16 bg-gradient-to-br ${currentVideoFeature.color || 'from-blue-500 to-purple-600'} rounded-2xl flex items-center justify-center mb-4 mx-auto">
                                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                  </div>
                                  <div class="text-white font-semibold">${currentVideoFeature.title}</div>
                                  <div class="text-white/70 text-sm mt-2">Feature Demo</div>
                                </div>
                              `;
                              e.target.parentNode.appendChild(fallback);
                            }}
                          />
                        )}

                        {/* Loading placeholder */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] flex items-center justify-center transition-opacity duration-500 ${
                          currentVideoFeature?.videoUrl ? 'opacity-0' : 'opacity-100'
                        }`}>
                          <div className="text-center">
                            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
                            <div className="text-white text-sm font-medium">Loading Demo...</div>
                          </div>
                        </div>

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                                            
                      {/* Glow effect - Now changes based on current screen */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${currentVideoFeature?.bgColor || 'from-blue-500/20 to-purple-600/20'} rounded-[3.5rem] blur-3xl scale-110 transition-all duration-1000 opacity-40 animate-pulse`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${currentVideoFeature?.color || 'from-blue-500 to-purple-600'} rounded-[3.5rem] blur-2xl scale-105 transition-all duration-1000 opacity-20`}></div>
                    </div>

                    {/* Progress indicator */}
                    <div className="absolute -right-8 sm:-right-12 top-1/2 transform -translate-y-1/2">
                      <div className="flex flex-col space-y-4 sm:space-y-6 bg-black/40 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/10">
                        {screens.map((_, index) => (
                          <div
                            key={index}
                            className={`w-1 h-8 sm:h-12 rounded-full transition-all duration-500 relative overflow-hidden ${
                              index === currentScreen 
                                ? `bg-gradient-to-b ${currentFeature?.color || 'from-blue-500 to-purple-600'} shadow-lg` 
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
      <section className="lg:hidden bg-black py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            {screens.map((screenData, screenIndex) => (
              <div key={screenIndex} className={`space-y-4 sm:space-y-6 transition-all duration-500 ${
                screenIndex === currentScreen ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
              }`}>
                {screenIndex === currentScreen && (
                  <div className="relative overflow-hidden">
                    <div className="flex transition-transform duration-1500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" 
                         style={{ transform: `translateX(-${currentTitleIndex * 100}%)` }}>
                      {screenData.features && screenData.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="w-full flex-shrink-0 px-2">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                            <div className="w-6 h-6 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg scale-110 shadow-blue-400/30 transition-all duration-1000">
                              {item.icon ? 
                                React.createElement(item.icon, { className: "text-white", size: 20 }) :
                                <Star className="text-white" size={20} />
                              }
                            </div>
                            <div>
                              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 mb-2">
                                <span className="text-xs font-medium text-gray-300">
                                  {item.title} - {itemIndex + 1}/{screenData.features.length}
                                </span>
                              </div>
                              <h4 className="text-xl sm:text-2xl font-bold text-white scale-105 transition-all duration-1000">{item.title}</h4>
                            </div>
                          </div>
                          
                          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-black/60 via-black/40 to-black/60 border border-white/10 backdrop-blur-3xl min-h-[200px] sm:min-h-[240px] transition-all duration-1000 hover:scale-105 shadow-2xl shadow-black/50 group ring-2 ring-blue-400/50 shadow-blue-400/20">
                            {/* Animated background mesh */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
                            <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/15 via-transparent to-yellow-500/15 animate-pulse" style={{ animationDelay: '1s' }}></div>
                            
                            {/* Floating orbs */}
                            <div className="absolute top-4 sm:top-6 right-6 sm:right-8 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-60 blur-sm" style={{ animationDelay: '0s' }}></div>
                            <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce opacity-60 blur-sm" style={{ animationDelay: '0.5s' }}></div>
                            
                            {/* Glowing border on hover */}
                            <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 p-4 sm:p-6">
                              <div className="bg-gradient-to-br from-black/50 via-gray-900/40 to-black/50 rounded-[1rem] sm:rounded-[1.5rem] p-4 sm:p-6 border border-white/30 backdrop-blur-2xl relative overflow-hidden shadow-inner">
                                {/* Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor || 'from-blue-500/20 to-purple-600/20'} opacity-15 animate-pulse`}></div>
                                
                                <div className="relative z-10">
                                  <p className="text-base sm:text-lg font-medium text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                                    {item.description}
                                  </p>
                                  
                                  {/* Features list */}
                                  <div className="space-y-2 sm:space-y-3">
                                    {item.details && item.details.map((detail, detailIndex) => (
                                      <div key={detailIndex} className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm opacity-100 translate-x-0 transition-all duration-1000" 
                                           style={{ transitionDelay: `${detailIndex * 100}ms` }}>
                                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 animate-pulse scale-125 transition-all duration-1000"></div>
                                        <span className="text-gray-200 font-medium transition-all duration-1000">{detail}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-black py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-[2rem] lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/8 to-pink-500/5"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 sm:mb-8 shadow-lg">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 sm:mr-3 animate-pulse" />
                <span className="text-sm sm:text-base font-semibold text-blue-400 tracking-wide">Ready to Transform Your Business?</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Experience the Full Platform
                </span>
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
                Schedule a personalized demo to see how our comprehensive jewelry management system can streamline your operations and boost your sales.
              </p>
              <button className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl lg:rounded-3xl transition-all duration-500 hover:scale-110 hover:shadow-2xl group text-lg sm:text-xl overflow-hidden shadow-2xl" onClick={() => window.location.href = '#contact'}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center">
                  <Play className="mr-3 sm:mr-4 group-hover:scale-125 transition-transform duration-500" size={20} />
                  Schedule Your Demo
                  <ArrowRight className="ml-3 sm:ml-4 group-hover:translate-x-2 transition-transform duration-500" size={20} />
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

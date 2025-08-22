import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Gem, Sparkles, Star, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
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

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
        <div className="absolute bottom-1/3 left-2/3 animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <Star className="w-5 h-5 text-pink-400/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6 hover-lift glow-effect">
            <Sparkles className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-sm font-semibold text-blue-400">Get In Touch</span>
          </div>
          
          <div className="flex justify-center mb-4">
            <Gem className="w-16 h-16 text-blue-500" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Get in Touch with{' '}
            <span className="gradient-text text-glow">NBJ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your jewelry business? Contact us today to learn more about our comprehensive management system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-effect p-8 rounded-3xl relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-8 text-center">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-blue-400 mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent glass-effect text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-purple-400 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent glass-effect text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-pink-400 mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-white/20 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-transparent glass-effect text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-green-400 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-6 py-4 border-2 border-white/20 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent glass-effect text-white placeholder-gray-400 transition-all duration-300 resize-none"
                      placeholder="Tell us about your needs..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover-lift shadow-2xl group"
                  >
                    <span className="flex items-center justify-center text-lg">
                      <Send className="mr-3 group-hover:translate-x-1 transition-transform" size={20} />
                      Send Message
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div>
              <h3 className="text-3xl font-black text-white mb-6">
                Contact Information
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're here to help you get started with our jewelry management system. 
                Reach out to us for a personalized demo or any questions you may have.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Mail className="text-white" size={28} />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Email</h4>
                  <p className="text-blue-400 text-lg font-medium">support@nbjshop.in</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Phone className="text-white" size={28} />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Support Team</h4>
                  <p className="text-green-400 text-lg font-medium">NBJ Shop Support Team</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <MapPin className="text-white" size={28} />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">System Access</h4>
                  <p className="text-purple-400 text-lg font-medium leading-relaxed">
                    Contact your system administrator for access to the NBJ Jewelry Management System
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-effect p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-4 text-center">Business Hours</h4>
                <p className="text-gray-300 text-center leading-relaxed">
                  Our support team is available during business hours to assist you with any questions 
                  about our jewelry management system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

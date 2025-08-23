import React from 'react';
import { Gem, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2" >
            <div className="flex items-center space-x-2 mb-4" >
              <Gem className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl font-bold">NBJ Jewelry Management System</h1>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl text-center">
              A comprehensive, enterprise-grade jewelry management platform designed to revolutionize 
              inventory management, sales tracking, and business operations for jewelry businesses.
            </p>
           
          </div>
          
            
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NBJ Jewelry Management System. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Built with ❤️ by <span className="text-blue-400 font-semibold">Anurag Narsingoju</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            NBJ Jewelry Management System - Empowering jewelry businesses with technology-driven solutions
          </p>
          
          {/* Contact Information */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:contact@anuragnarsingoju.in" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                contact@anuragnarsingoju.in
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <a href="tel:+917660066656" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                +91 7660066656
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

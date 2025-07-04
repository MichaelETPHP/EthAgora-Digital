import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Send, Music, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 to-orange-600/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 bg-orange-50 rounded-3xl p-3 shadow-sm">
                  <img 
                    src="/EthAgora Digital Solution Logo-01.png" 
                    alt="EthAgora Digital Solutions" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-heading font-bold text-orange-600">EthAgora</span>
                  <span className="text-sm font-medium text-neutral-600">DIGITAL SOLUTIONS</span>
                </div>
              </div>
              
              <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
                Transform your digital presence with our comprehensive solutions. 
                We create strategies that engage, convert, and grow your brand.
              </p>
              
              {/* Social Media Links */}
              <div>
                <h4 className="text-neutral-900 font-semibold mb-4 text-lg">Connect With Us</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: Facebook, name: 'Facebook', color: 'hover:bg-blue-500' },
                    { icon: Instagram, name: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600' },
                    { icon: MessageCircle, name: 'WhatsApp', color: 'hover:bg-green-500' },
                    { icon: Send, name: 'Telegram', color: 'hover:bg-cyan-500' },
                    { icon: Music, name: 'TikTok', color: 'hover:bg-purple-600' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className={`group relative p-3 bg-neutral-100 text-neutral-600 rounded-2xl transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="font-heading font-bold text-xl mb-8 text-neutral-900">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Resources', path: '/resources' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="group flex items-center text-neutral-600 hover:text-orange-600 transition-all duration-300"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <h3 className="font-heading font-bold text-xl mb-8 text-neutral-900">Get In Touch</h3>
              <div className="space-y-6">
                <div className="group flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Mail className="h-5 w-5 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm mb-1">Email Us</p>
                    <a href="mailto:hello@ethagora.com" className="text-neutral-900 hover:text-orange-600 transition-colors font-medium">
                      hello@ethagora.com
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Phone className="h-5 w-5 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm mb-1">Call Us</p>
                    <a href="tel:+1555123456" className="text-neutral-900 hover:text-orange-600 transition-colors font-medium">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <MapPin className="h-5 w-5 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm mb-1">Visit Us</p>
                    <p className="text-neutral-900 font-medium">
                      123 Digital Street<br />
                      Innovation City, IC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-neutral-600">
              <span>© 2025 EthAgora Digital Solutions. Made with</span>
              <Heart className="h-4 w-4 text-orange-500" />
              <span>for digital excellence.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-500 hover:text-orange-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-orange-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-500 hover:text-orange-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
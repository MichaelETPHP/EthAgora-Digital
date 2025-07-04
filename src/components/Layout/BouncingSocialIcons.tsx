import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, MessageCircle, Send, Music } from 'lucide-react';

const BouncingSocialIcons = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  const socialIcons = [
    { 
      icon: Facebook, 
      color: 'from-blue-500 to-blue-600', 
      shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.4)]',
      size: 'w-12 h-12',
      iconSize: 'h-6 w-6'
    },
    { 
      icon: Instagram, 
      color: 'from-pink-500 to-purple-600', 
      shadow: 'shadow-[0_0_20px_rgba(236,72,153,0.4)]',
      size: 'w-14 h-14',
      iconSize: 'h-7 w-7'
    },
    { 
      icon: MessageCircle, 
      color: 'from-green-500 to-emerald-600', 
      shadow: 'shadow-[0_0_20px_rgba(34,197,94,0.4)]',
      size: 'w-10 h-10',
      iconSize: 'h-5 w-5'
    },
    { 
      icon: Send, 
      color: 'from-cyan-500 to-blue-500', 
      shadow: 'shadow-[0_0_20px_rgba(6,182,212,0.4)]',
      size: 'w-11 h-11',
      iconSize: 'h-5 w-5'
    },
    { 
      icon: Music, 
      color: 'from-purple-500 to-indigo-600', 
      shadow: 'shadow-[0_0_20px_rgba(147,51,234,0.4)]',
      size: 'w-9 h-9',
      iconSize: 'h-4 w-4'
    }
  ];

  const generateRandomPosition = (index: number) => {
    const positions = [
      { top: '15%', left: '5%' },
      { top: '25%', right: '8%' },
      { top: '45%', left: '3%' },
      { top: '65%', right: '5%' },
      { top: '85%', left: '7%' }
    ];
    return positions[index] || { top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` };
  };

  if (windowSize.width < 768) return null; // Hide on mobile for better UX

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {socialIcons.map((social, index) => {
        const position = generateRandomPosition(index);
        const animationDelay = `${index * 0.8}s`;
        const animationDuration = `${4 + Math.random() * 3}s`;
        
        return (
          <div
            key={index}
            className={`absolute ${social.size} pointer-events-auto cursor-pointer group opacity-15 hover:opacity-40 transition-opacity duration-300`}
            style={{
              ...position,
              animation: `bounce-float ${animationDuration} ease-in-out infinite`,
              animationDelay
            }}
          >
            <div className={`w-full h-full bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 ${social.shadow} hover:scale-110 transition-all duration-300 group-hover:animate-pulse`}>
              <social.icon className={`${social.iconSize} text-white`} />
            </div>
            
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
          </div>
        );
      })}
    </div>
  );
};

export default BouncingSocialIcons;
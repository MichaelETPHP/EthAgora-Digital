import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const SocialPlatforms = () => {
  const platforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'text-[#1877F2]',
      bgGradient: 'from-[#1877F2]/20 to-[#1877F2]/10',
      description: '2.9B+ users worldwide',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(24,119,242,0.3)]'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'text-[#E4405F]',
      bgGradient: 'from-[#E4405F]/20 to-[#F56040]/10',
      description: '2B+ monthly active users',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(228,64,95,0.3)]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'text-[#0A66C2]',
      bgGradient: 'from-[#0A66C2]/20 to-[#0A66C2]/10',
      description: '900M+ professionals',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(10,102,194,0.3)]'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      color: 'text-[#FF0000]',
      bgGradient: 'from-[#FF0000]/20 to-[#FF0000]/10',
      description: '2.7B+ logged-in users',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'text-[#1DA1F2]',
      bgGradient: 'from-[#1DA1F2]/20 to-[#1DA1F2]/10',
      description: '450M+ monthly users',
      hoverGlow: 'hover:shadow-[0_0_30px_rgba(29,161,242,0.3)]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-primary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-neutral-900 mb-6">
            We Manage All Major Platforms
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From Facebook to TikTok, we help you dominate every social platform 
            where your audience spends their time.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border border-white/50 ${platform.hoverGlow}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${platform.bgGradient} mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/30`}>
                  <platform.icon className={`h-8 w-8 ${platform.color}`} />
                </div>
                
                <h3 className="font-heading font-semibold text-neutral-900 mb-2 group-hover:text-neutral-800">
                  {platform.name}
                </h3>
                
                <p className="text-sm text-neutral-600 group-hover:text-neutral-700">
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          <div className="text-center group">
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-2xl mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
              <span className="text-2xl font-bold text-white">360°</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-heading font-semibold text-neutral-900 mb-2 text-xl">Complete Coverage</h3>
            <p className="text-neutral-600 leading-relaxed">Comprehensive management across all your social channels</p>
          </div>
          
          <div className="text-center group">
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 group-hover:shadow-glow-purple transition-all duration-300">
              <span className="text-2xl font-bold text-white">24/7</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-heading font-semibold text-neutral-900 mb-2 text-xl">Always Active</h3>
            <p className="text-neutral-600 leading-relaxed">Round-the-clock monitoring and engagement</p>
          </div>
          
          <div className="text-center group">
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-primary-500 rounded-2xl mx-auto mb-6 group-hover:shadow-glow-cyan transition-all duration-300">
              <span className="text-2xl font-bold text-white">ROI</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-heading font-semibold text-neutral-900 mb-2 text-xl">Proven Results</h3>
            <p className="text-neutral-600 leading-relaxed">Measurable growth and return on investment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialPlatforms;
import React, { useState } from 'react';
import { Target, Heart, MessageSquare, BarChart3, X } from 'lucide-react';

const ServicesHighlight = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Target,
      title: 'Digital Marketing and Brand Strategy',
      description: 'Comprehensive digital marketing strategies that build strong brand presence and drive business growth.',
      gradient: 'from-orange-500 to-orange-600',
      glowColor: 'glow-orange',
      details: {
        overview: 'Our digital marketing and brand strategy services help businesses establish a strong online presence and connect with their target audience effectively.',
        features: [
          'Brand positioning and messaging strategy',
          'Digital marketing campaign development',
          'Social media strategy and management',
          'Content marketing and SEO optimization',
          'Online reputation management',
          'Competitive analysis and market research'
        ],
        benefits: [
          'Increased brand awareness and recognition',
          'Higher engagement rates across digital platforms',
          'Improved customer acquisition and retention',
          'Better ROI on marketing investments',
          'Enhanced online visibility and search rankings'
        ]
      }
    },
    {
      icon: Heart,
      title: 'Public Health Promotion and Behavior Change (SBC) Communication',
      description: 'Strategic communication campaigns that promote public health awareness and drive positive behavior change.',
      gradient: 'from-orange-600 to-orange-700',
      glowColor: 'glow-orange',
      details: {
        overview: 'We specialize in creating impactful public health communication campaigns that educate communities and promote positive behavior change for better health outcomes.',
        features: [
          'Health behavior change campaign design',
          'Community engagement and outreach programs',
          'Educational content development',
          'Multi-channel communication strategies',
          'Cultural sensitivity and localization',
          'Impact measurement and evaluation'
        ],
        benefits: [
          'Increased health awareness in target communities',
          'Positive behavior change adoption',
          'Improved public health outcomes',
          'Enhanced community engagement',
          'Measurable impact on health indicators'
        ]
      }
    },
    {
      icon: MessageSquare,
      title: 'Strategic Communication Planning and Management',
      description: 'Comprehensive communication strategies that align with organizational goals and stakeholder needs.',
      gradient: 'from-orange-500 to-orange-700',
      glowColor: 'glow-orange',
      details: {
        overview: 'Our strategic communication planning services ensure your message reaches the right audience at the right time through the most effective channels.',
        features: [
          'Communication strategy development',
          'Stakeholder mapping and analysis',
          'Message development and testing',
          'Channel optimization and planning',
          'Crisis communication preparedness',
          'Internal and external communication alignment'
        ],
        benefits: [
          'Clear and consistent messaging across all channels',
          'Improved stakeholder relationships',
          'Enhanced organizational reputation',
          'Better crisis management capabilities',
          'Increased communication effectiveness'
        ]
      }
    },
    {
      icon: BarChart3,
      title: 'Digital Campaign Performance Analysis',
      description: 'Data-driven insights and comprehensive analytics to optimize your digital campaigns for maximum impact.',
      gradient: 'from-orange-400 to-orange-600',
      glowColor: 'glow-orange',
      details: {
        overview: 'We provide comprehensive analysis of your digital campaigns, offering actionable insights to improve performance and maximize your return on investment.',
        features: [
          'Real-time campaign monitoring and tracking',
          'Advanced analytics and reporting',
          'Performance optimization recommendations',
          'A/B testing and experimentation',
          'ROI measurement and attribution',
          'Custom dashboard development'
        ],
        benefits: [
          'Improved campaign performance and ROI',
          'Data-driven decision making',
          'Better understanding of audience behavior',
          'Optimized budget allocation',
          'Continuous improvement and growth'
        ]
      }
    }
  ];

  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
          {/* Header */}
          <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white rounded-t-3xl relative`}>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 p-4 rounded-2xl">
                <service.icon className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-heading font-bold">{service.title}</h2>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">{service.details.overview}</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">What We Offer</h3>
                <ul className="space-y-3">
                  {service.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <button className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full hover:shadow-glow-orange transition-all duration-300 transform hover:scale-105`}>
                Get Started with This Service
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-orange-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-neutral-900 mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your brand, 
            engage your audience, and drive meaningful business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-neutral-100 animate-fade-in-up overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedService(service)}
            >
              {/* Glassmorphism overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
              
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              <div className="absolute inset-[1px] bg-white rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:shadow-${service.glowColor} transition-all duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-300">
                  Learn more
                  <div className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </section>
  );
};

export default ServicesHighlight;
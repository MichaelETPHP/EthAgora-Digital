import React from 'react';
import { Download, FileText, CheckSquare, BookOpen, ArrowRight } from 'lucide-react';
import ParallaxHero from '../components/Shared/ParallaxHero';

const Resources = () => {
  const resources = [
    {
      type: 'Guide',
      title: 'The Complete Digital Marketing Strategy Guide',
      description: 'Step-by-step guide to creating a winning digital marketing strategy that drives results.',
      icon: BookOpen,
      downloadSize: '2.5 MB',
      pages: '45 pages',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      type: 'Checklist',
      title: 'Digital Campaign Planning Checklist',
      description: 'Never miss a step again with our comprehensive campaign planning checklist.',
      icon: CheckSquare,
      downloadSize: '1.2 MB',
      pages: '8 pages',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      type: 'Template',
      title: 'Digital Audit Template',
      description: 'Evaluate your current digital performance with our detailed audit template.',
      icon: FileText,
      downloadSize: '3.1 MB',
      pages: '12 pages',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      type: 'Guide',
      title: 'Brand Strategy Development 2025',
      description: 'Latest strategies and tactics to build a strong brand presence in the digital age.',
      icon: BookOpen,
      downloadSize: '1.8 MB',
      pages: '28 pages',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      type: 'Checklist',
      title: 'Communication Planning Checklist',
      description: 'Optimize your communication strategy for maximum impact and engagement.',
      icon: CheckSquare,
      downloadSize: '950 KB',
      pages: '6 pages',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      type: 'Template',
      title: 'Crisis Communication Plan Template',
      description: 'Be prepared for any communication crisis with our comprehensive response template.',
      icon: FileText,
      downloadSize: '2.2 MB',
      pages: '15 pages',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = [
    { name: 'All Resources', count: 6, active: true },
    { name: 'Guides', count: 2, active: false },
    { name: 'Checklists', count: 2, active: false },
    { name: 'Templates', count: 2, active: false }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Guide':
        return 'bg-orange-500 text-white';
      case 'Checklist':
        return 'bg-orange-600 text-white';
      case 'Template':
        return 'bg-orange-700 text-white';
      default:
        return 'bg-neutral-500 text-white';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxHero
        title="Free Resources"
        subtitle="Download our collection of free guides, checklists, and templates to boost your digital marketing efforts and drive better results."
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
        height="h-96"
      />

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  category.active
                    ? 'bg-orange-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <resource.icon className="h-5 w-5 text-orange-500" />
                    <span className="text-sm text-neutral-500">{resource.pages} • {resource.downloadSize}</span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  
                  <button className="w-full flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200">
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Get More Resources
          </h2>
          <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
            Subscribe to our newsletter and get access to exclusive resources, 
            industry insights, and the latest digital marketing trends.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-neutral-500 mt-3">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-orange-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our team can create custom resources and strategies tailored specifically to your business needs.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-medium rounded-lg hover:bg-neutral-100 transition-all duration-200 transform hover:scale-105 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Contact Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Resources;
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Target,
  Heart,
  MessageSquare,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import ParallaxHero from '../components/Shared/ParallaxHero'

const Services = () => {
  const navigate = useNavigate()
  const services = [
    {
      icon: Target,
      title: 'Digital Marketing and Brand Strategy',
      description:
        'Comprehensive digital marketing strategies that build strong brand presence and drive business growth.',
      features: [
        'Brand positioning and messaging strategy',
        'Digital marketing campaign development',
        'Social media strategy and management',
        'Content marketing and SEO optimization',
        'Online reputation management',
        'Competitive analysis and market research',
      ],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Heart,
      title: 'Public Health Promotion and Behavior Change (SBC) Communication',
      description:
        'Strategic communication campaigns that promote public health awareness and drive positive behavior change.',
      features: [
        'Health behavior change campaign design',
        'Community engagement and outreach programs',
        'Educational content development',
        'Multi-channel communication strategies',
        'Cultural sensitivity and localization',
        'Impact measurement and evaluation',
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: MessageSquare,
      title: 'Strategic Communication Planning and Management',
      description:
        'Comprehensive communication strategies that align with organizational goals and stakeholder needs.',
      features: [
        'Communication strategy development',
        'Stakeholder mapping and analysis',
        'Message development and testing',
        'Channel optimization and planning',
        'Crisis communication preparedness',
        'Internal and external communication alignment',
      ],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: BarChart3,
      title: 'Digital Campaign Performance Analysis',
      description:
        'Data-driven insights and comprehensive analytics to optimize your digital campaigns for maximum impact.',
      features: [
        'Real-time campaign monitoring and tracking',
        'Advanced analytics and reporting',
        'Performance optimization recommendations',
        'A/B testing and experimentation',
        'ROI measurement and attribution',
        'Custom dashboard development',
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-50',
    },
  ]

  const packages = [
    {
      name: 'Starter',
      price: 'ETB 999',
      period: '/month',
      description:
        'Perfect for small businesses getting started with digital solutions',
      features: [
        '2 digital platforms',
        '12 content pieces per month',
        'Basic analytics reporting',
        'Community management (business hours)',
        'Monthly strategy consultation',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: 'ETB 1,999',
      period: '/month',
      description: 'Comprehensive solution for growing businesses',
      features: [
        '4 digital platforms',
        '24 content pieces per month',
        'Advanced analytics & reporting',
        '24/7 community management',
        'Paid advertising management',
        'Weekly strategy calls',
        'Custom content creation',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited platforms',
        'Unlimited content creation',
        'Dedicated account manager',
        'Advanced automation',
        'Custom reporting dashboards',
        'Priority support',
        'Strategic consulting',
      ],
      popular: false,
    },
  ]

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        title='Our Services'
        subtitle='Comprehensive digital solutions designed to elevate your brand, engage your audience, and drive meaningful business results.'
        backgroundImage='https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920'
        height='h-96'
      />

      {/* Services Details */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='space-y-20'>
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div
                  className={`animate-fade-in-up ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div
                    className={`inline-flex p-3 rounded-lg ${service.bgColor} ${service.color} mb-6`}
                  >
                    <service.icon className='h-8 w-8' />
                  </div>

                  <h2 className='text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mb-4'>
                    {service.title}
                  </h2>

                  <p className='text-xl text-neutral-600 leading-relaxed mb-8'>
                    {service.description}
                  </p>

                  <ul className='space-y-3'>
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center space-x-3'
                      >
                        <CheckCircle className={`h-5 w-5 ${service.color}`} />
                        <span className='text-neutral-700'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`animate-fade-in ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <div
                    className={`${service.bgColor} rounded-2xl p-8 shadow-lg`}
                  >
                    <img
                      src={
                        index === 0
                          ? '/img/Digital Marketing and Brand Strategy.jpg'
                          : index === 1
                          ? '/img/Public Health.jpg'
                          : index === 2
                          ? '/img/Strategic communication.jpg'
                          : index === 3
                          ? '/img/Digital Campaign.jpg'
                          : 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
                      }
                      alt={service.title}
                      className='w-full rounded-lg'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className='py-20 bg-neutral-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16 animate-fade-in-up'>
            <h2 className='text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mb-4'>
              Choose Your Package
            </h2>
            <p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed'>
              Select the perfect plan for your business needs. All packages
              include our core services with varying levels of support and
              features.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg relative animate-fade-in-up ${
                  pkg.popular
                    ? 'ring-2 ring-orange-500 transform scale-105'
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium'>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-heading font-bold text-neutral-900 mb-2'>
                    {pkg.name}
                  </h3>
                  <div className='flex items-baseline justify-center mb-4'>
                    <span className='text-4xl font-bold text-orange-600'>
                      {pkg.price}
                    </span>
                    {pkg.period && (
                      <span className='text-neutral-600 ml-1'>
                        {pkg.period}
                      </span>
                    )}
                  </div>
                  <p className='text-neutral-600'>{pkg.description}</p>
                </div>

                <ul className='space-y-3 mb-8'>
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center space-x-3'
                    >
                      <CheckCircle className='h-5 w-5 text-orange-500' />
                      <span className='text-neutral-700'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => {
                    if (pkg.name === 'Enterprise') {
                      navigate('/contact')
                    } else {
                      navigate('/contact', { state: { focusFirstName: true } })
                    }
                  }}
                >
                  {pkg.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 bg-orange-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl lg:text-4xl font-heading font-bold text-white mb-6 animate-fade-in-up'>
            Ready to Get Started?
          </h2>
          <p
            className='text-xl text-orange-100 mb-8 animate-fade-in-up'
            style={{ animationDelay: '0.2s' }}
          >
            Let's discuss which service package is right for your business
            goals.
          </p>
          <button
            className='inline-flex items-center px-8 py-4 bg-white text-orange-600 font-medium rounded-lg hover:bg-neutral-100 transition-all duration-200 transform hover:scale-105 shadow-lg animate-fade-in-up'
            style={{ animationDelay: '0.4s' }}
          >
            Schedule a Consultation
            <ArrowRight className='ml-2 h-5 w-5' />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Services

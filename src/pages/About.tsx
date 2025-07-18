import React from 'react'
import {
  Users,
  Target,
  Award,
  Heart,
  ArrowRight,
  CheckCircle,
  Globe,
  Lightbulb,
  TrendingUp,
} from 'lucide-react'
import ParallaxHero from '../components/Shared/ParallaxHero'

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      image:
        'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '10+ years in digital marketing with expertise in social media strategy and brand building.',
    },
    {
      name: 'Maria Garcia',
      role: 'Creative Director',
      image:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning creative professional specializing in visual storytelling and brand identity.',
    },
    {
      name: 'David Kim',
      role: 'Head of Analytics',
      image:
        'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Data scientist turned social media analyst, helping brands make informed decisions.',
    },
    {
      name: 'Lisa Chen',
      role: 'Community Manager',
      image:
        'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in community building and engagement with a passion for authentic connections.',
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description:
        'Every strategy we create is designed to deliver measurable results and ROI for our clients.',
    },
    {
      icon: Heart,
      title: 'Authentic Engagement',
      description:
        'We believe in building genuine connections between brands and their communities.',
    },
    {
      icon: Award,
      title: 'Creative Excellence',
      description:
        'Our team combines creativity with data to produce content that resonates and converts.',
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description:
        'We work as an extension of your team, ensuring alignment with your business goals.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'Understanding your unique needs and goals',
    },
    {
      step: '02',
      title: 'Strategy',
      desc: 'Crafting tailored digital solutions',
    },
    {
      step: '03',
      title: 'Execution',
      desc: 'Implementing with precision and creativity',
    },
    {
      step: '04',
      title: 'Analysis',
      desc: 'Measuring impact and optimizing results',
    },
  ]

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        title='About EthAgora'
        subtitle='Bridging Innovation and Impact in the Digital Age. We create digital spaces where ideas, people, and purpose converge to spark growth and transformation.'
        backgroundImage='https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920'
        height='h-96'
      />

      {/* Introduction with Stats */}
      <section className='py-20 bg-white relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-medium mb-6'>
              Smart Solutions for a Digital World
            </div>
            <h2 className='text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-6'>
              We Create Digital Spaces Where Ideas Thrive
            </h2>
            <p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed'>
              EthAgora Digital Solutions is a results-driven digital
              communication and marketing firm dedicated to helping businesses,
              corporates, and non-profits thrive in the digital age.
            </p>
          </div>

          {/* Stats Grid */}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
            <div className='text-center'>
              <div
                className='text-5xl font-heading font-bold mb-2'
                style={{ color: '#f6971f' }}
              >
                150+
              </div>
              <div className='text-neutral-600'>Projects Completed</div>
            </div>
            <div className='text-center'>
              <div
                className='text-5xl font-heading font-bold mb-2'
                style={{ color: '#f6971f' }}
              >
                50+
              </div>
              <div className='text-neutral-600'>Happy Clients</div>
            </div>
            <div className='text-center'>
              <div
                className='text-5xl font-heading font-bold mb-2'
                style={{ color: '#f6971f' }}
              >
                98%
              </div>
              <div className='text-neutral-600'>Client Satisfaction</div>
            </div>
            <div className='text-center'>
              <div
                className='text-5xl font-heading font-bold mb-2'
                style={{ color: '#f6971f' }}
              >
                5+
              </div>
              <div className='text-neutral-600'>Years Experience</div>
            </div>
          </div>

          {/* Our Name Story */}
          <div
            className='rounded-3xl p-12 text-center'
            style={{
              background:
                'linear-gradient(135deg, #ef610f22 0%, #ef610f11 100%)',
            }}
          >
            <h3 className='text-3xl font-heading font-bold text-neutral-900 mb-6'>
              The Story Behind Our Name
            </h3>
            <div className='max-w-3xl mx-auto'>
              <p className='text-lg text-neutral-700 mb-4'>
                <span
                  className='text-2xl font-bold'
                  style={{ color: '#ef610f' }}
                >
                  EthAgora
                </span>{' '}
                blends "Eth" for Ethiopia and "Agora," the ancient Greek word
                for a public gathering space.
              </p>
              <p className='text-neutral-600'>
                It reflects our vision of creating dynamic digital spaces where
                ideas, people, and purpose converge to spark growth and
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Cards Layout */}
      <section className='py-20 bg-neutral-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mb-4'>
              Why We're Your Ideal Choice
            </h2>
            <p className='text-xl text-neutral-600'>
              We connect innovation with impact—delivering locally grounded,
              globally aligned solutions
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='flex items-start space-x-4'>
                <div
                  className='p-3 rounded-xl'
                  style={{ backgroundColor: '#f6971f22' }}
                >
                  <Lightbulb className='h-8 w-8' style={{ color: '#f6971f' }} />
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-heading font-bold text-neutral-900 mb-4'>
                    Fusion of Digital Innovation and Social Impact
                  </h3>
                  <p className='text-neutral-600 leading-relaxed'>
                    EthAgora uniquely blends cutting-edge digital marketing with
                    deep expertise in social behavior change—empowering brands,
                    NGOs, and public institutions to not only grow online but
                    also drive meaningful, real-world change.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='flex items-start space-x-4'>
                <div
                  className='p-3 rounded-xl'
                  style={{ backgroundColor: '#f6971f22' }}
                >
                  <Globe className='h-8 w-8' style={{ color: '#f6971f' }} />
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-heading font-bold text-neutral-900 mb-4'>
                    Local Insight, Global Standards
                  </h3>
                  <p className='text-neutral-600 leading-relaxed'>
                    Rooted in Ethiopian context yet aligned with international
                    best practices, EthAgora delivers culturally resonant
                    campaigns and strategies that speak to local audiences while
                    meeting global communication benchmarks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Design */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
            <div className='bg-neutral-900 text-white p-12 lg:p-16 rounded-l-3xl'>
              <div className='max-w-lg'>
                <h3 className='text-3xl font-heading font-bold mb-6'>
                  Our Mission
                </h3>
                <p className='text-neutral-300 text-lg leading-relaxed'>
                  To provide cutting-edge digital communication and marketing
                  solutions tailored to the unique needs of businesses, public
                  institutions, and non-profits, ensuring meaningful engagement
                  and sustainable growth.
                </p>
              </div>
            </div>

            <div
              className='text-white p-12 lg:p-16 rounded-r-3xl'
              style={{ backgroundColor: '#f6971f' }}
            >
              <div className='max-w-lg'>
                <h3 className='text-3xl font-heading font-bold mb-6'>
                  Our Vision
                </h3>
                <p className='text-orange-100 text-lg leading-relaxed'>
                  To guide organizations and businesses through the evolving
                  digital landscape with communication that informs, inspires,
                  and drives real-world outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className='py-20 bg-neutral-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mb-4'>
              Our Flawless Process
            </h2>
            <p className='text-xl text-neutral-600'>
              Every project follows a proven, collaborative journey from vision
              to results.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Custom process steps with notes */}
            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300'>
                <div
                  className='text-6xl font-heading font-bold mb-4'
                  style={{ color: '#f6971f22' }}
                >
                  01
                </div>
                <h3 className='text-xl font-heading font-bold text-neutral-900 mb-2'>
                  Discovery
                </h3>
                <p className='text-neutral-600 mb-2'>
                  Understanding your unique needs and goals
                </p>
                <p className='text-sm text-neutral-500'>
                  This is where it all begins. In the discovery phase, we take
                  the time to deeply understand your brand, goals, audience, and
                  pain points. Through collaborative discussions and research,
                  we uncover insights that lay the foundation for a strategy
                  aligned with your vision and market needs.
                </p>
              </div>
              <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
                <ArrowRight
                  className='h-8 w-8'
                  style={{ color: '#f6971f55' }}
                />
              </div>
            </div>
            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300'>
                <div
                  className='text-6xl font-heading font-bold mb-4'
                  style={{ color: '#f6971f22' }}
                >
                  02
                </div>
                <h3 className='text-xl font-heading font-bold text-neutral-900 mb-2'>
                  Strategy
                </h3>
                <p className='text-neutral-600 mb-2'>
                  Crafting tailored digital solutions
                </p>
                <p className='text-sm text-neutral-500'>
                  With clarity from the discovery phase, we craft a custom
                  digital strategy tailored to your brand’s unique challenges
                  and objectives. Whether it's a social media campaign, content
                  roadmap, or full digital transformation, we design scalable
                  and data-informed solutions that position you for success.
                </p>
              </div>
              <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
                <ArrowRight
                  className='h-8 w-8'
                  style={{ color: '#f6971f55' }}
                />
              </div>
            </div>
            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300'>
                <div
                  className='text-6xl font-heading font-bold mb-4'
                  style={{ color: '#f6971f22' }}
                >
                  03
                </div>
                <h3 className='text-xl font-heading font-bold text-neutral-900 mb-2'>
                  Execution
                </h3>
                <p className='text-neutral-600 mb-2'>
                  Implementing with precision and creativity
                </p>
                <p className='text-sm text-neutral-500'>
                  Ideas come to life in this phase. Our team brings the strategy
                  to action—developing engaging content, launching campaigns,
                  and managing digital platforms with precision and creativity.
                  We focus on quality, timeliness, and impact to ensure your
                  brand makes a powerful impression.
                </p>
              </div>
              <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
                <ArrowRight
                  className='h-8 w-8'
                  style={{ color: '#f6971f55' }}
                />
              </div>
            </div>
            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300'>
                <div
                  className='text-6xl font-heading font-bold mb-4'
                  style={{ color: '#f6971f22' }}
                >
                  04
                </div>
                <h3 className='text-xl font-heading font-bold text-neutral-900 mb-2'>
                  Analysis
                </h3>
                <p className='text-neutral-600 mb-2'>
                  Measuring impact and optimizing results
                </p>
                <p className='text-sm text-neutral-500'>
                  We don’t just launch and leave. In the analysis phase, we
                  track performance, measure impact, and gather actionable
                  insights. By analyzing results in real time, we refine our
                  approach and optimize for continuous improvement—so you get
                  better returns, every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Modern Grid */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mb-4'>
              Our Core Values
            </h2>
            <p className='text-xl text-neutral-600 max-w-3xl mx-auto'>
              These principles guide everything we do
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='group bg-neutral-50 rounded-2xl p-8 hover:bg-orange-50 transition-all duration-300'
                style={{
                  '--hover-bg': '#ef610f11',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ef610f11'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f9fafb'
                }}
              >
                <div className='flex items-start space-x-6'>
                  <div className='bg-white p-4 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300'>
                    <value.icon
                      className='h-8 w-8'
                      style={{ color: '#f6971f' }}
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-heading font-semibold text-neutral-900 mb-3'>
                      {value.title}
                    </h3>
                    <p className='text-neutral-600 leading-relaxed'>
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Modern Cards */}
      <section className='py-20 bg-neutral-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mb-4'>
              Our Team
            </h2>
            <p className='text-xl text-neutral-600 max-w-3xl mx-auto'>
              For the time being, we will display only positions until all
              requirements are completed/filled.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Display only positions with emoji icons */}
            <div className='flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-8'>
              <span className='text-6xl mb-4'>👨‍💼</span>
              <p
                className='font-heading font-bold text-neutral-900 mb-2'
                style={{ color: '#f6971f' }}
              >
                CEO & Founder
              </p>
            </div>
            <div className='flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-8'>
              <span className='text-6xl mb-4'>🎨</span>
              <p
                className='font-heading font-bold text-neutral-900 mb-2'
                style={{ color: '#f6971f' }}
              >
                Creative Director
              </p>
            </div>
            <div className='flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-8'>
              <span className='text-6xl mb-4'>📊</span>
              <p
                className='font-heading font-bold text-neutral-900 mb-2'
                style={{ color: '#f6971f' }}
              >
                Head of Analytics
              </p>
            </div>
            <div className='flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-8'>
              <span className='text-6xl mb-4'>🤝</span>
              <p
                className='font-heading font-bold text-neutral-900 mb-2'
                style={{ color: '#f6971f' }}
              >
                Community Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section
        className='relative py-24 overflow-hidden'
        style={{
          background: 'linear-gradient(135deg, #ef610f 0%, #d45a15 100%)',
        }}
      >
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20'></div>

        <div className='relative z-10 max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-4xl lg:text-5xl font-heading font-bold text-white mb-6'>
            Ready to Transform Your Digital Presence?
          </h2>
          <p className='text-xl text-white/90 mb-10'>
            Let's create something extraordinary together
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              className='inline-flex items-center justify-center px-8 py-4 bg-white font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-200 transform hover:scale-105 shadow-xl'
              style={{ color: '#ef610f' }}
            >
              Start Your Journey
              <ArrowRight className='ml-2 h-5 w-5' />
            </button>
            <button className='inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200'>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

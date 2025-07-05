import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  Zap,
  Sparkles,
  Star,
} from 'lucide-react'

const Hero = () => {
  return (
    <section className='relative min-h-screen overflow-hidden flex items-center'>
      {/* Background Video/Image with Overlay */}
      <div className='absolute inset-0'>
        {/* High-quality background image with parallax effect */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-fixed transform scale-110 opacity-30'
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        ></div>

        {/* Multiple gradient overlays for depth */}
        <div className='absolute inset-0 bg-gradient-to-br from-orange-900/80 via-orange-800/70 to-orange-900/80'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-600/85 via-orange-500/75 to-orange-700/85'></div>
      </div>

      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float'></div>
        <div
          className='absolute top-40 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute bottom-20 left-1/3 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '4s' }}
        ></div>
        <div
          className='absolute top-1/2 right-1/4 w-64 h-64 bg-orange-600/15 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '1s' }}
        ></div>

        {/* Floating particles */}
        <div
          className='absolute top-1/4 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-float'
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className='absolute top-3/4 right-1/3 w-3 h-3 bg-orange-300/80 rounded-full animate-float'
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div
          className='absolute top-1/2 left-1/6 w-1 h-1 bg-orange-400/70 rounded-full animate-float'
          style={{ animationDelay: '2.5s' }}
        ></div>
        <div
          className='absolute bottom-1/3 right-1/5 w-2 h-2 bg-orange-500/60 rounded-full animate-float'
          style={{ animationDelay: '3.5s' }}
        ></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div className='text-center lg:text-left animate-fade-in-up'>
            <div className='inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-8 border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-glass'>
              <Sparkles className='h-4 w-4 mr-2' />
              #1 Digital Solutions Agency
              <Star className='h-4 w-4 ml-2 text-yellow-300' />
            </div>

            <h1 className='text-4xl lg:text-6xl font-heading font-bold text-white leading-tight mb-8'>
              Empower Your Brand with <br />
              <span className='text-5xl lg:text-7xl bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent animate-gradient font-black'>
                EthAgora Digital
              </span>
            </h1>

            <p className='text-xl text-white/90 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0'>
              Drive engagement, build communities, and grow your brand with our
              comprehensive digital solutions that deliver measurable results.
            </p>

            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12 justify-center lg:justify-start'>
              <Link
                to='/contact'
                className='group relative inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 border border-white/30 shadow-glass'
              >
                <span className='relative z-10 flex items-center'>
                  Book a Free Consultation
                  <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                </span>
              </Link>

              <button className='group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md shadow-glass'>
                <Play className='mr-2 h-5 w-5 group-hover:scale-110 transition-transform' />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0'>
              <div className='text-center lg:text-left group'>
                <div className='text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300'>
                  500+
                </div>
                <div className='text-sm text-white/80'>Happy Clients</div>
              </div>
              <div className='text-center lg:text-left group'>
                <div className='text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300'>
                  95%
                </div>
                <div className='text-sm text-white/80'>Success Rate</div>
              </div>
              <div className='text-center lg:text-left group'>
                <div className='text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300'>
                  24/7
                </div>
                <div className='text-sm text-white/80'>Support</div>
              </div>
            </div>
          </div>

          {/* Girl Image with Animations */}
          <div
            className='relative animate-fade-in'
            style={{ animationDelay: '0.3s' }}
          >
            <div className='relative'>
              {/* Main Girl Image */}
              <div className='relative group'>
                <img
                  src='/qq.png'
                  alt='EthAgora Digital Solutions Team Member'
                  className='fade-bottom w-full max-w-lg mx-auto h-auto object-contain transform transition-all duration-700 group-hover:scale-105 animate-bounce-gentle'
                />

                {/* Animated Glow Effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400/20 via-orange-500/30 to-orange-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow'></div>
              </div>

              {/* Floating Success Metrics */}
              <div className='absolute top-10 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-slide-up hover:shadow-xl transition-all duration-300 group border border-orange-100'>
                <div className='flex items-center space-x-3'>
                  <div className='bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-xl'>
                    <TrendingUp className='h-4 w-4 text-white' />
                  </div>
                  <div>
                    <div className='font-semibold text-gray-800 text-sm'>
                      Engagement
                    </div>
                    <div className='text-orange-600 font-bold text-lg'>
                      +247%
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='absolute top-32 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-slide-up hover:shadow-xl transition-all duration-300 group border border-orange-100'
                style={{ animationDelay: '0.2s' }}
              >
                <div className='flex items-center space-x-3'>
                  <div className='bg-gradient-to-r from-orange-600 to-orange-700 p-2 rounded-xl'>
                    <Users className='h-4 w-4 text-white' />
                  </div>
                  <div>
                    <div className='font-semibold text-gray-800 text-sm'>
                      Followers
                    </div>
                    <div className='text-orange-600 font-bold text-lg'>
                      +12.5K
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='absolute bottom-20 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-slide-up hover:shadow-xl transition-all duration-300 group border border-orange-100'
                style={{ animationDelay: '0.4s' }}
              >
                <div className='flex items-center space-x-3'>
                  <div className='bg-gradient-to-r from-orange-500 to-orange-700 p-2 rounded-xl'>
                    <Zap className='h-4 w-4 text-white' />
                  </div>
                  <div>
                    <div className='font-semibold text-gray-800 text-sm'>
                      ROI Growth
                    </div>
                    <div className='text-orange-600 font-bold text-lg'>
                      +189%
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-float shadow-[0_0_20px_rgba(249,115,22,0.4)]'></div>
              <div
                className='absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-float shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                style={{ animationDelay: '1s' }}
              ></div>
              <div
                className='absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-700 rounded-full animate-float shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                style={{ animationDelay: '2s' }}
              ></div>

              {/* Animated Ring Elements */}
              <div className='absolute top-1/4 right-1/4 w-16 h-16 border-2 border-orange-400/30 rounded-full animate-spin-slow'></div>
              <div
                className='absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-orange-500/40 rounded-full animate-spin-slow'
                style={{ animationDelay: '1.5s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

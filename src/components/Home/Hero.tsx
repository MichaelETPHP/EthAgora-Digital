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
        <div
          className='absolute inset-0'
          style={{ backgroundColor: '#f6971f', opacity: 0.85 }}
        ></div>
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
          <div
            className='text-center lg:text-left animate-fade-in-up hero-heading-animate'
            id='hero-heading-section'
          >
            <div className='inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-4 border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-glass'>
              <Sparkles className='h-4 w-4 mr-2' />
              Smart Solutions for a Digital World
              <Star className='h-4 w-4 ml-2 text-yellow-300' />
            </div>

            <h1 className='text-center mb-8' style={{ width: '100%' }}>
              <div className='block w-full text-left'>
                <span
                  className='text-4xl font-heading font-extrabold tracking-tight hero-slide-in hero-scroll-in'
                  id='hero-title-ethagora'
                  style={{
                    color: '#222',
                    fontWeight: 800,
                    fontSize: '66px',
                    lineHeight: '4.5rem',
                    display: 'inline-block',
                    animation: 'heroSlideIn 0.8s cubic-bezier(.4,2,.6,1) both',
                  }}
                >
                  EthAgora
                </span>
                <br />
                <span
                  className='text-4xl font-heading font-extrabold tracking-tight hero-slide-in hero-scroll-in'
                  id='hero-title-solutions'
                  style={{
                    color: '#222',
                    fontWeight: 800,
                    fontSize: '66px',
                    lineHeight: '4.5rem',
                    display: 'inline-block',
                    animation: 'heroSlideIn 0.8s cubic-bezier(.4,2,.6,1) both',
                    animationDelay: '0.15s',
                  }}
                >
                  DIGITAL SOLUTIONS
                </span>
              </div>
              <style>{`
                @keyframes heroSlideIn {
                  0% { opacity: 0; transform: translateX(-80px); }
                  100% { opacity: 1; transform: translateX(0); }
                }
                .hero-slide-in {
                  animation: heroSlideIn 0.8s cubic-bezier(.4,2,.6,1) both;
                }
                @keyframes heroScrollIn {
                  0% { opacity: 0; transform: translateY(60px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                .hero-scroll-in {
                  will-change: opacity, transform;
                }
                .hero-heading-animate {
                  animation: heroScrollIn 1.2s cubic-bezier(.4,2,.6,1) both;
                }
              `}</style>
              <script>{`
                // IntersectionObserver for scroll-triggered animation
                document.addEventListener('DOMContentLoaded', function() {
                  const titles = [
                    document.getElementById('hero-title-ethagora'),
                    document.getElementById('hero-title-solutions')
                  ];
                  const observer = new window.IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('hero-slide-in');
                      } else {
                        entry.target.classList.remove('hero-slide-in');
                      }
                    });
                  }, { threshold: 0.5 });
                  titles.forEach(el => { if (el) observer.observe(el); });
                });
              `}</script>
              {/* Pro Suggestion: For scroll animation, you can use IntersectionObserver to add/remove the .hero-scroll-in class on headings as they enter the viewport for a true scroll effect. For now, this applies on load. */}
              {/* Pro Suggestion: */}
              {/* For even more impact, consider adding a subtle text-shadow to the heading for depth, and a fade-in animation for the first load. Example: */}
              {/* style={{ textShadow: '0 2px 12px rgba(246,151,31,0.15)' }} */}
              <span
                className='block mt-4 text-xl lg:text-2xl font-medium tracking-wide'
                style={{ textAlign: 'left', color: '#fff' }}
              >
                Empower Your Brand and Services with EthAgora Digital Solutions
              </span>
              <br />
              <p
                className='mt-2 text-lg lg:text-xl font-normal tracking-wide text-white'
                style={{ textAlign: 'left' }}
              >
                Drive engagement, build communities, and grow your brand and
                services with our comprehensive digital solutions that deliver
                measurable results.
              </p>
            </h1>

            {/* <p className='text-xl text-white/90 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0'>
              Drive engagement, build communities, and grow your brand with our
              comprehensive digital solutions that deliver measurable results.
            </p> */}

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

              {/* Video Modal State & Handler */}
              {(() => {
                const [open, setOpen] = React.useState(false)
                return (
                  <>
                    <button
                      className='group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md shadow-glass'
                      onClick={() => setOpen(true)}
                    >
                      <Play className='mr-2 h-5 w-5 group-hover:scale-110 transition-transform' />
                      Watch Demo
                    </button>
                    {open && (
                      <div
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300'
                        style={{ animation: 'fadeIn .3s' }}
                      >
                        <div
                          className='absolute inset-0'
                          onClick={() => setOpen(false)}
                        />
                        <div className='relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-black via-slate-900 to-black animate-fade-in-up p-2 sm:p-4'>
                          <button
                            className='absolute top-2 right-2 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-lg'
                            onClick={() => setOpen(false)}
                            aria-label='Close video modal'
                          >
                            <svg
                              width='22'
                              height='22'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                          </button>
                          <div className='rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black/90'>
                            <iframe
                              src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&showinfo=0&modestbranding=1'
                              title='Demo Video'
                              allow='autoplay; encrypted-media'
                              allowFullScreen
                              className='w-[320px] h-[180px] sm:w-[400px] sm:h-[225px] md:w-[480px] md:h-[270px] lg:w-[560px] lg:h-[315px] border-none rounded-2xl bg-black'
                              style={{
                                boxShadow:
                                  '0 4px 32px 0 #f9731622, 0 1.5px 8px 0 #fff2',
                              }}
                            />
                          </div>
                        </div>
                        <style>{`
                        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                      `}</style>
                      </div>
                    )}
                  </>
                )
              })()}
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

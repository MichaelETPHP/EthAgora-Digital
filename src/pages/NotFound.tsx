import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, Smile, Zap } from 'lucide-react'

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center px-4'>
      <div className='max-w-2xl mx-auto text-center'>
        {/* Fun 404 Animation */}
        <div className='mb-8'>
          <div className='relative'>
            {/* Large 404 Text */}
            <h1 className='text-8xl lg:text-9xl font-heading font-black text-orange-500 mb-4 animate-bounce'>
              404
            </h1>

            {/* Floating Elements */}
            <div className='absolute top-4 left-4 animate-float'>
              <div className='w-4 h-4 bg-orange-400 rounded-full opacity-60'></div>
            </div>
            <div
              className='absolute top-8 right-8 animate-float'
              style={{ animationDelay: '1s' }}
            >
              <div className='w-3 h-3 bg-orange-300 rounded-full opacity-70'></div>
            </div>
            <div
              className='absolute bottom-4 left-1/4 animate-float'
              style={{ animationDelay: '2s' }}
            >
              <div className='w-2 h-2 bg-orange-500 rounded-full opacity-80'></div>
            </div>
            <div
              className='absolute bottom-8 right-1/4 animate-float'
              style={{ animationDelay: '0.5s' }}
            >
              <div className='w-5 h-5 bg-orange-200 rounded-full opacity-50'></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='space-y-6'>
          <div className='flex justify-center mb-6'>
            <div className='bg-white rounded-full p-4 shadow-lg'>
              <Search className='h-12 w-12 text-orange-500 animate-pulse' />
            </div>
          </div>

          <h2 className='text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mb-4'>
            Oops! Page Not Found
          </h2>

          <p className='text-xl text-neutral-600 mb-8 leading-relaxed'>
            Looks like this page decided to take a digital vacation!
            <br />
            <span className='text-orange-600 font-medium'>
              Don't worry, we'll help you find your way back.
            </span>
          </p>

          {/* Fun Stats */}
          <div className='bg-white rounded-2xl p-6 shadow-lg mb-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-orange-500 mb-1'>
                  404
                </div>
                <div className='text-sm text-neutral-600'>Pages Explored</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-orange-500 mb-1'>∞</div>
                <div className='text-sm text-neutral-600'>Possibilities</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-orange-500 mb-1'>
                  100%
                </div>
                <div className='text-sm text-neutral-600'>Fun Factor</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='space-y-4'>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/'
                className='inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg'
              >
                <Home className='mr-2 h-5 w-5' />
                Back to Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className='inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-xl border-2 border-orange-500 hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 shadow-lg'
              >
                <ArrowLeft className='mr-2 h-5 w-5' />
                Go Back
              </button>
            </div>
          </div>

          {/* Fun Message */}
          <div className='mt-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl p-6 border border-orange-300'>
            <div className='flex items-center justify-center space-x-2 mb-3'>
              <Smile className='h-6 w-6 text-orange-600' />
              <span className='text-lg font-semibold text-orange-800'>
                Fun Fact
              </span>
              <Zap className='h-6 w-6 text-orange-600' />
            </div>
            <p className='text-orange-700 text-sm leading-relaxed'>
              "404" was chosen as the error code because room 404 didn't exist
              at CERN, where the World Wide Web was invented. Just like this
              page!
              <span className='block mt-2 font-medium'>
                But hey, every wrong turn is just a new adventure in the digital
                world! 🚀
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div className='mt-8'>
            <p className='text-neutral-600 mb-4'>
              Or explore our popular pages:
            </p>
            <div className='flex flex-wrap justify-center gap-3'>
              <Link
                to='/services'
                className='px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors duration-200 text-sm'
              >
                Services
              </Link>
              <Link
                to='/about'
                className='px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors duration-200 text-sm'
              >
                About Us
              </Link>
              <Link
                to='/contact'
                className='px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors duration-200 text-sm'
              >
                Contact
              </Link>
              <Link
                to='/resources'
                className='px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors duration-200 text-sm'
              >
                Resources
              </Link>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  )
}

export default NotFound

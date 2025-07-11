import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link to='/' className='flex items-center space-x-3 group'>
              <div className='relative w-16 h-16 group-hover:scale-110 transition-all duration-300'>
                <img
                  src='/EthAgora Digital Solution Logo-01.png'
                  alt='EthAgora Digital Solutions'
                  className='w-full h-full object-contain'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <div className='flex flex-col'>
                <span
                  className='text-2xl font-heading font-bold transition-colors duration-300'
                  style={{ color: '#f6971f' }}
                >
                  EthAgora
                </span>
                <span
                  className='text-sm font-bold transition-colors duration-300'
                  style={{ color: '#f6971f' }}
                >
                  DIGITAL SOLUTIONS
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-lg ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-neutral-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full transition-all duration-300 ${
                      isActive(item.href)
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <Link
              to='/contact'
              className='relative inline-flex items-center px-8 py-3 bg-[#f6971f] text-white font-semibold rounded-full hover:bg-[#f6971f]/90 hover:shadow-[0_0_20px_rgba(246,151,31,0.4)] transition-all duration-300 transform hover:scale-105 overflow-hidden group border-2 border-[#f6971f] focus:outline-none focus:ring-2 focus:ring-[#f6971f] focus:ring-offset-2'
            >
              <span className='relative z-10'>Get Started</span>
              <div className='absolute inset-0 bg-[#f6971f] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 rounded-2xl text-neutral-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300'
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-neutral-200 rounded-b-3xl shadow-lg'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-2xl transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-neutral-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to='/contact'
                className='block px-3 py-2 mt-4 bg-[#f6971f] text-white text-center rounded-2xl font-medium hover:bg-[#f6971f]/90 hover:shadow-[0_0_20px_rgba(246,151,31,0.4)] transition-all duration-300 border-2 border-[#f6971f] focus:outline-none focus:ring-2 focus:ring-[#f6971f] focus:ring-offset-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

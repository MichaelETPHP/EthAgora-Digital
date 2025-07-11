import React from 'react'
import { Link } from 'react-router-dom'

import {
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
} from 'lucide-react'
import { SocialIcon } from 'react-social-icons'
import CookieConsentBanner from './CookieConsentBanner'

// FloatingChat: Modern floating chat button with flip/expand animation
function FloatingChat() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className='fixed z-50 bottom-8 right-8 flex flex-col items-end select-none'>
      {/* Reveal WhatsApp & Telegram icons with animation (now above the button) */}
      <div
        className={`flex flex-col-reverse items-end mb-2 space-y-0 space-y-reverse transition-all duration-300 ${
          open
            ? 'opacity-100 -translate-y-2 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className='flex flex-col gap-[1.5rem] items-center'>
          <SocialIcon
            url='https://wa.me/251976111222'
            network='whatsapp'
            bgColor='#25D366' // WhatsApp official color
            fgColor='#fff'
            style={{ height: 48, width: 48 }}
            className='transition-all duration-300 hover:scale-110 hover:shadow-lg'
            title='Chat on WhatsApp'
          />
          <SocialIcon
            url='https://t.me/ethagoradigital'
            network='telegram'
            bgColor='#229ED9' // Telegram official color
            fgColor='#fff'
            style={{ height: 48, width: 48 }}
            className='transition-all duration-300 hover:scale-110 hover:shadow-lg'
            title='Chat on Telegram'
          />
        </div>
      </div>
      {/* Main Chat Button */}
      <button
        aria-label='Open chat options'
        onClick={() => setOpen((v: boolean) => !v)}
        className={`rounded-full p-4 bg-orange-500/90 shadow-lg backdrop-blur-md border border-orange-300/40 hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none ${
          open ? 'rotate-x-180' : ''
        }`}
        style={{
          boxShadow: '0 8px 32px 0 rgba(255, 122, 0, 0.18)',
          perspective: '600px',
        }}
      >
        <svg
          className='h-7 w-7 text-white transition-transform duration-300'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
          style={{
            transform: open ? 'rotateX(180deg)' : 'none',
            transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)',
          }}
        >
          <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
        </svg>
      </button>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-gradient-to-br from-neutral-50 to-white font-[Inter,sans-serif]'>
      {/* Floating Chat Button with Flip Animation */}
      <FloatingChat />
      {/* Subtle Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 to-orange-600/10'></div>
      </div>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-16'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Company Info */}
            <div className='lg:col-span-5 space-y-8'>
              <div className='flex items-center space-x-6'>
                <div className='relative w-24 h-24 bg-white rounded-full p-3 shadow-sm border-2 border-black'>
                  <img
                    src='/EthAgora Digital Solution Logo-01.png'
                    alt='EthAgora Digital Solutions'
                    className='w-full h-full object-contain filter grayscale contrast-200'
                  />
                </div>
                <div className='flex flex-col'>
                  <span
                    className='text-4xl font-heading font-extrabold tracking-tight'
                    style={{ color: '#f6971f' }}
                  >
                    EthAgora
                  </span>
                  <span
                    className='text-xl font-bold tracking-wide'
                    style={{ color: '#222' }}
                  >
                    DIGITAL SOLUTIONS
                  </span>
                </div>
              </div>

              <p className='text-neutral-600 text-lg leading-relaxed max-w-md'>
                Transform your digital presence with our comprehensive
                solutions. We create strategies that engage, convert, and grow
                your brand.
              </p>

              {/* Social Media Links */}
              <div>
                <h4 className='text-neutral-900 font-semibold mb-4 text-lg'>
                  Connect With Us
                </h4>
                <div className='flex space-x-3'>
                  {[
                    'https://facebook.com/ethagoradigital',
                    'https://instagram.com/ethagoradigital',
                    'https://wa.me/251976111222',
                    'https://t.me/ethagoradigital',
                    'https://tiktok.com/@ethagoradigital',
                    'https://linkedin.com/company/ethagoradigital',
                    'https://youtube.com/@ethagoradigital',
                  ].map((url, index) => (
                    <SocialIcon
                      key={index}
                      url={url}
                      bgColor='#f6971f'
                      fgColor='#fff'
                      style={{ height: 40, width: 40 }}
                      className='transition-all duration-300 hover:scale-110 hover:shadow-lg'
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className='lg:col-span-3'>
              <h3 className='font-heading font-bold text-xl mb-8 text-neutral-900'>
                Quick Links
              </h3>
              <ul className='space-y-4'>
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Resources', path: '/resources' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Contact', path: '/contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className='group flex items-center text-neutral-600 hover:text-orange-600 transition-all duration-300'
                    >
                      <ArrowRight className='h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className='lg:col-span-4'>
              <h3 className='font-heading font-bold text-xl mb-8 text-neutral-900'>
                Get In Touch
              </h3>
              <div className='space-y-6'>
                <div className='group flex items-start space-x-4'>
                  <div className='bg-orange-100 p-3 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300'>
                    <Mail className='h-5 w-5 text-orange-600 group-hover:text-white' />
                  </div>
                  <div>
                    <p className='text-neutral-500 text-sm mb-1'>Email Us</p>
                    <a
                      href='mailto:hello@ethagora.com'
                      className='text-neutral-900 hover:text-orange-600 transition-colors font-medium'
                    >
                      hello@ethagora.com
                    </a>
                  </div>
                </div>

                <div className='group flex items-start space-x-4'>
                  <div className='bg-orange-100 p-3 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300'>
                    <Phone className='h-5 w-5 text-orange-600 group-hover:text-white' />
                  </div>
                  <div>
                    <p className='text-neutral-500 text-sm mb-1'>Call Us</p>
                    <a
                      href='tel:+1555123456'
                      className='text-neutral-900 hover:text-orange-600 transition-colors font-medium'
                    >
                      +251 976 111 222
                    </a>
                  </div>
                </div>

                <div className='group flex items-start space-x-4'>
                  <div className='bg-orange-100 p-3 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300'>
                    <MapPin className='h-5 w-5 text-orange-600 group-hover:text-white' />
                  </div>
                  <div>
                    <p className='text-neutral-500 text-sm mb-1'>Visit Us</p>
                    <p className='text-neutral-900 font-medium'>
                      Addis Ababa , Ethiopia
                      <br />
                      CMC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Help Section */}
        <div className='border-t border-neutral-200 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
            <div className='flex items-center space-x-2 text-neutral-600'>
              <span>© 2025 EthAgora Digital Solutions. Made with</span>
              <Heart className='h-4 w-4 text-orange-500' />
              <span>
                By{' '}
                <a
                  target='_blank'
                  href='https://www.instagram.com/m.i.c.h.a.e.l.t.a.y.e/'
                >
                  Michael . T
                </a>
              </span>
            </div>
            {/* Quick Help in Footer */}

            <div className='flex space-x-6 text-sm'>
              <a
                href='#'
                className='text-neutral-500 hover:text-orange-600 transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-neutral-500 hover:text-orange-600 transition-colors'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='text-neutral-500 hover:text-orange-600 transition-colors'
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Cookie Consent Banner */}
      <CookieConsentBanner />
    </footer>
  )
}

export default Footer

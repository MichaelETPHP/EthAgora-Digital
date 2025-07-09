import React from 'react'
import { Link } from 'react-router-dom'

import {
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Music,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  MessageSquare,
} from 'lucide-react'

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
        <a
          href='https://wa.me/251976111222'
          target='_blank'
          rel='noopener noreferrer'
          className='group rounded-full p-4 bg-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center'
          style={{ boxShadow: '0 8px 32px 0 rgba(16, 185, 129, 0.15)' }}
          aria-label='Chat on WhatsApp'
          title='Chat on WhatsApp'
        >
          <svg
            className='h-7 w-7 text-green-500 group-hover:text-green-600 transition-colors'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.18-1.62A12.08 12.08 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.7 0-3.37-.44-4.82-1.28l-.34-.2-3.67.96.98-3.58-.22-.36A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z' />
          </svg>
        </a>
        <a
          href='https://t.me/ethagoradigital'
          target='_blank'
          rel='noopener noreferrer'
          className='group rounded-full p-4 bg-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center'
          style={{ boxShadow: '0 8px 32px 0 rgba(14, 165, 233, 0.15)' }}
          aria-label='Chat on Telegram'
          title='Chat on Telegram'
        >
          <svg
            className='h-7 w-7 text-sky-500 group-hover:text-sky-600 transition-colors'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M22.998 5.833c-.083-.33-.326-.59-.646-.684l-20-6c-.32-.096-.664-.01-.9.224-.236.234-.32.578-.224.898l6 20c.09.32.35.563.684.646.08.02.16.03.24.03.25 0 .49-.09.68-.26l4.13-3.56 4.7 3.44c.17.13.38.19.59.19.13 0 .26-.03.38-.09.31-.15.51-.47.48-.82l-2.1-19.99zm-6.13 13.13l-3.7-2.7c-.18-.13-.42-.13-.6 0l-3.7 2.7 5.1-17.01 5.1 17.01z' />
          </svg>
        </a>
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
              <div className='flex items-center space-x-4'>
                <div className='relative w-16 h-16 bg-orange-50 rounded-3xl p-3 shadow-sm'>
                  <img
                    src='/EthAgora Digital Solution Logo-01.png'
                    alt='EthAgora Digital Solutions'
                    className='w-full h-full object-contain'
                  />
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-heading font-bold text-orange-600'>
                    EthAgora
                  </span>
                  <span className='text-sm font-medium text-neutral-600'>
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
                    {
                      icon: Facebook,
                      name: 'Facebook',
                      color: 'hover:bg-blue-500',
                    },
                    {
                      icon: Instagram,
                      name: 'Instagram',
                      color:
                        'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600',
                    },
                    {
                      icon: MessageCircle,
                      name: 'WhatsApp',
                      color: 'hover:bg-green-500',
                    },
                    {
                      icon: Send,
                      name: 'Telegram',
                      color: 'hover:bg-cyan-500',
                    },
                    {
                      icon: Music,
                      name: 'TikTok',
                      color: 'hover:bg-purple-600',
                    }, // Make sure this comma is here
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={`https://www.${social.name.toLowerCase()}.com`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={
                        'group relative p-3 bg-neutral-100 text-neutral-600 rounded-2xl transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg ' +
                        social.color
                      }
                    >
                      <social.icon className='h-6 w-6' />
                    </a>
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
    </footer>
  )
}

export default Footer

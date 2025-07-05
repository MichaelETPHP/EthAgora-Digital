import React, { useState, useEffect } from 'react'

interface LogoLoaderProps {
  onLoadComplete?: () => void
}

const LogoLoader: React.FC<LogoLoaderProps> = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [contentLoaded, setContentLoaded] = useState(false)

  useEffect(() => {
    // Preload the logo image
    const logoImg = new Image()
    logoImg.onload = () => {
      setLogoLoaded(true)
    }
    logoImg.onerror = () => {
      // Fallback: still mark as loaded even if image fails
      setLogoLoaded(true)
    }
    logoImg.src = '/EthAgora Digital Solution Logo-01.png'

    // Check if page content is loaded
    const checkContentLoaded = () => {
      if (document.readyState === 'complete') {
        setContentLoaded(true)
      }
    }

    // Listen for page load events
    if (document.readyState === 'complete') {
      setContentLoaded(true)
    } else {
      window.addEventListener('load', checkContentLoaded)
    }

    return () => {
      window.removeEventListener('load', checkContentLoaded)
    }
  }, [])

  useEffect(() => {
    // Start fade out animation when both logo and content are loaded
    if (logoLoaded && contentLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        if (onLoadComplete) {
          onLoadComplete()
        }
      }, 800) // Small delay to ensure smooth transition

      return () => clearTimeout(timer)
    }
  }, [logoLoaded, contentLoaded, onLoadComplete])

  if (!isLoading) {
    return null
  }

  return (
    <div
      className='logo-loader-overlay'
      role='progressbar'
      aria-label='Loading EthAgora Digital Solutions'
      aria-describedby='loading-description'
    >
      {/* Screen reader description */}
      <div id='loading-description' className='sr-only'>
        Please wait while EthAgora Digital Solutions website loads
      </div>

      {/* Main loader container */}
      <div className='logo-loader-container'>
        {/* Logo container with animation */}
        <div className='logo-loader-content'>
          {/* Logo image with fallback */}
          <div className='logo-loader-image flex items-center justify-center'>
            <div className='rounded-full bg-white p-2 shadow'>
              <img
                src='/favicon.jpg'
                alt='EthAgora Digital Solutions Logo'
                className='logo-img w-16 h-16 object-contain rounded-full'
                loading='eager'
                decoding='async'
              />
            </div>

            {/* Fallback logo using CSS if image fails */}
            <div className='logo-fallback' aria-hidden='true'>
              <div className='logo-icon'>
                <div className='logo-shape'></div>
              </div>
              <div className='logo-text'>
                <span className='logo-main'>EthAgora</span>
                <span className='logo-sub'>DIGITAL SOLUTIONS</span>
              </div>
            </div>
          </div>

          {/* Loading indicator */}
          <div className='loading-indicator' aria-hidden='true'>
            {/* Pulse animation */}
            <div className='pulse-ring'></div>
            <div className='pulse-ring pulse-ring-delay-1'></div>
            <div className='pulse-ring pulse-ring-delay-2'></div>

            {/* Spinner */}
            <div className='spinner'>
              <div className='spinner-inner'></div>
            </div>
          </div>

          {/* Loading text */}
          <div className='loading-text'>
            <span className='loading-dots'>Loading</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className='progress-container'>
          <div className='progress-bar'></div>
        </div>
      </div>
    </div>
  )
}

export default LogoLoader

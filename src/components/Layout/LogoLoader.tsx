import React, { useState, useEffect } from 'react'

interface LogoLoaderProps {
  onLoadComplete?: () => void
}

const LogoLoader: React.FC<LogoLoaderProps> = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [contentLoaded, setContentLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    'Initializing Digital Solutions...',
    'Crafting Your Experience...',
    'Loading Innovation...',
    'Almost Ready...',
  ]

  useEffect(() => {
    // Simulate realistic loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Slower start, faster middle, slower end (realistic loading curve)
        const increment = prev < 20 ? 2 : prev < 80 ? 4 : 1
        return Math.min(prev + increment, 100)
      })
    }, 50)

    // Cycle through loading texts
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length)
    }, 800)

    // Preload the logo image
    const logoImg = new Image()
    logoImg.onload = () => setLogoLoaded(true)
    logoImg.onerror = () => setLogoLoaded(true)
    logoImg.src = '/EthAgora Digital Solution Logo-01.png'

    // Check if page content is loaded
    const checkContentLoaded = () => {
      if (document.readyState === 'complete') {
        setContentLoaded(true)
      }
    }

    if (document.readyState === 'complete') {
      setContentLoaded(true)
    } else {
      window.addEventListener('load', checkContentLoaded)
    }

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
      window.removeEventListener('load', checkContentLoaded)
    }
  }, [])

  useEffect(() => {
    if (logoLoaded && contentLoaded && progress >= 100) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        if (onLoadComplete) {
          onLoadComplete()
        }
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [logoLoaded, contentLoaded, progress, onLoadComplete])

  if (!isLoading) {
    return null
  }

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden'
      style={{
        background:
          'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #0a0a0a 100%)',
      }}
    >
      {/* Animated background particles */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className='absolute top-1/4 left-1/4 w-20 h-20 border-2 border-white/10 rounded-full animate-spin'
          style={{ animationDuration: '10s' }}
        />
        <div
          className='absolute bottom-1/4 right-1/4 w-16 h-16 border-2 rotate-45 animate-pulse'
          style={{ borderColor: '#ef610f33' }}
        />
        <div
          className='absolute top-1/3 right-1/3 w-12 h-12 rounded-full animate-bounce'
          style={{
            background: 'linear-gradient(135deg, #ef610f33 0%, #ef610f55 100%)',
          }}
        />
      </div>

      {/* Main loader container */}
      <div className='relative z-10 text-center'>
        {/* Logo container with enhanced animations */}
        <div className='relative mb-8'>
          {/* Outer glow ring */}
          <div
            className='absolute inset-0 rounded-full opacity-20 animate-pulse scale-150'
            style={{
              background:
                'linear-gradient(135deg, #ef610f 0%, #ef610f 50%, #ef610f 100%)',
            }}
          />

          {/* Rotating border */}
          <div
            className='absolute inset-0 rounded-full border-4 border-transparent animate-spin'
            style={{
              background:
                'linear-gradient(135deg, #ef610f 0%, #ef610f 50%, #ef610f 100%)',
              animationDuration: '3s',
            }}
          >
            <div
              className='absolute inset-1 rounded-full'
              style={{
                background:
                  'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #0a0a0a 100%)',
              }}
            />
          </div>

          {/* Logo */}
          <div className='relative w-24 h-24 mx-auto rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transform transition-transform duration-300 hover:scale-110'>
            <img
              src='/favicon.jpg'
              alt='EthAgora Digital Solutions'
              className='w-16 h-16 object-contain rounded-full'
              loading='eager'
              decoding='async'
            />
          </div>

          {/* Pulse waves */}
          <div className='absolute inset-0 rounded-full border-2 border-white/30 animate-ping' />
          <div
            className='absolute inset-0 rounded-full border-2 animate-ping'
            style={{ borderColor: '#ef610f55', animationDelay: '0.5s' }}
          />
        </div>

        {/* Brand name with typewriter effect */}
        <div className='mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide'>
            <span
              className='bg-clip-text text-transparent'
              style={{
                background:
                  'linear-gradient(135deg, #ef610f 0%, #ff7f20 50%, #ef610f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              EthAgora
            </span>
          </h1>
          <p className='text-lg text-white/80 font-light tracking-wider'>
            DIGITAL SOLUTIONS
          </p>
        </div>

        {/* Dynamic loading text */}
        <div className='mb-8 h-6'>
          <p className='text-white/90 text-sm md:text-base font-medium transition-opacity duration-300'>
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Enhanced progress bar */}
        <div className='w-80 max-w-sm mx-auto mb-6'>
          <div className='relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm'>
            {/* Background glow */}
            <div
              className='absolute inset-0 rounded-full'
              style={{
                background:
                  'linear-gradient(135deg, #ef610f22 0%, #ef610f33 50%, #ef610f22 100%)',
              }}
            />

            {/* Progress fill */}
            <div
              className='absolute left-0 top-0 h-full rounded-full transition-all duration-300 ease-out'
              style={{
                width: `${progress}%`,
                background:
                  'linear-gradient(135deg, #ef610f 0%, #ff7f20 50%, #ef610f 100%)',
              }}
            />

            {/* Shimmer effect */}
            <div
              className='absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse'
              style={{
                left: `${Math.max(0, progress - 20)}%`,
                transition: 'left 0.3s ease-out',
              }}
            />
          </div>

          {/* Progress percentage */}
          <div className='flex justify-between items-center mt-2'>
            <span className='text-white/60 text-xs'>Loading...</span>
            <span className='text-white/90 text-sm font-medium'>
              {progress}%
            </span>
          </div>
        </div>

        {/* Interactive loading spinner */}
        <div className='relative w-12 h-12 mx-auto'>
          <div className='absolute inset-0 rounded-full border-4 border-white/20' />
          <div
            className='absolute inset-0 rounded-full border-4 border-transparent animate-spin'
            style={{ borderTopColor: '#ef610f' }}
          />
          <div
            className='absolute inset-2 rounded-full border-2 border-transparent animate-spin'
            style={{
              borderTopColor: '#ef610f',
              animationDirection: 'reverse',
              animationDuration: '1.5s',
            }}
          />
        </div>

        {/* Floating action hint */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-xs animate-bounce'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-white/40 rounded-full animate-pulse' />
            <span>Preparing your digital experience</span>
            <div className='w-2 h-2 bg-white/40 rounded-full animate-pulse' />
          </div>
        </div>
      </div>

      {/* Screen reader support */}
      <div className='sr-only'>
        <div
          role='progressbar'
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          Loading EthAgora Digital Solutions: {progress}% complete
        </div>
      </div>
    </div>
  )
}

export default LogoLoader

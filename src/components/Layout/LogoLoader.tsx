import React, { useState, useEffect, useRef } from 'react'

interface LogoLoaderProps {
  onLoadComplete?: () => void
}

const SNOWFLAKE_COUNT = 40

const LogoLoader: React.FC<LogoLoaderProps> = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [progress, setProgress] = useState(0)
  const snowRef = useRef<HTMLCanvasElement>(null)

  // Minimal loading simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + (prev < 80 ? 3 : 1)
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  // Fade out when loading is done
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setFadeOut(true), 300)
      setTimeout(() => {
        setIsLoading(false)
        if (onLoadComplete) onLoadComplete()
      }, 900)
    }
  }, [progress, onLoadComplete])

  // Snowfall/particle animation
  useEffect(() => {
    const canvas = snowRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    let snowflakes = Array.from({ length: SNOWFLAKE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.2 + Math.random() * 1.8,
      d: 0.5 + Math.random() * 1.5,
      o: 0.08 + Math.random() * 0.12,
      s: 0.5 + Math.random() * 0.7,
    }))

    let animationFrame: number
    function draw() {
      ctx.clearRect(0, 0, width, height)
      for (let flake of snowflakes) {
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.r, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(255,255,255,${flake.o})`
        ctx.shadowColor = '#fff'
        ctx.shadowBlur = 6
        ctx.fill()
        ctx.shadowBlur = 0
      }
      update()
      animationFrame = requestAnimationFrame(draw)
    }
    function update() {
      for (let flake of snowflakes) {
        flake.y += flake.d
        flake.x += Math.sin(flake.y / 30) * flake.s
        if (flake.y > height + 4) {
          flake.y = -4
          flake.x = Math.random() * width
        }
      }
    }
    draw()
    function handleResize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background:
          'radial-gradient(ellipse at 60% 40%, #181818 0%, #000 100%)',
      }}
    >
      {/* Snowfall/particle background */}
      <canvas
        ref={snowRef}
        className='absolute inset-0 w-full h-full block pointer-events-none select-none'
        style={{ zIndex: 1 }}
        aria-hidden='true'
      />

      {/* Centered minimalist orange spinner */}
      <div className='relative z-10 flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center'>
          <span
            className='block'
            style={{
              width: 64,
              height: 64,
              display: 'inline-block',
              borderRadius: '50%',
              boxShadow: '0 0 24px 2px #f9731655',
              background: 'rgba(0,0,0,0.08)',
            }}
          >
            <svg
              width='64'
              height='64'
              viewBox='0 0 64 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ display: 'block' }}
              aria-label='Loading'
            >
              <circle
                cx='32'
                cy='32'
                r='26'
                stroke='#f97316'
                strokeWidth='6'
                opacity='0.15'
              />
              <circle
                cx='32'
                cy='32'
                r='26'
                stroke='#f97316'
                strokeWidth='6'
                strokeLinecap='round'
                strokeDasharray='120 60'
                style={
                  {
                    filter: 'drop-shadow(0 0 8px #f9731688)',
                    transition: 'stroke-dashoffset 0.3s',
                    animation: 'spin 1.1s cubic-bezier(.6,.2,.4,1) infinite',
                    transformOrigin: 'center',
                  } as React.CSSProperties
                }
              />
              <style>{`
                @keyframes spin {
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </svg>
          </span>
        </div>
        {/* Progress text (optional, minimalist) */}
        <div className='mt-6 text-center'>
          <span
            className='text-white/70 text-xs tracking-widest font-light'
            style={{ letterSpacing: 2 }}
          >
            Loading... {progress}%
          </span>
        </div>

        {/* Animated EthAgora Digital text with background gradient animation */}
        <div className='mt-8'>
          <h1
            className='text-3xl md:text-4xl font-bold tracking-wide relative inline-block'
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundImage:
                'linear-gradient(270deg, #f97316, #fff, #f97316, #181818, #f97316)',
              backgroundSize: '200% 200%',
              animation: 'ethagora-gradient-move 3s ease-in-out infinite',
            }}
          >
            EthAgora DIGITAL SOLUTIONS
          </h1>
          <style>{`
            @keyframes ethagora-gradient-move {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
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

import React from 'react'

interface ParallaxHeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
  height?: string
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  title,
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920',
  height = 'h-96',
}) => {
  return (
    <section
      className={`relative ${height} overflow-hidden flex items-center justify-center`}
    >
      {/* Background Image with Parallax Effect */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-fixed transform scale-110'
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        ></div>

        {/* Multiple gradient overlays for depth */}
        <div
          className='absolute inset-0'
          style={{ backgroundColor: '#f6971f', opacity: 0.95 }}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float'></div>
        <div
          className='absolute top-20 right-20 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute bottom-10 left-1/3 w-40 h-40 bg-orange-400/15 rounded-full blur-3xl animate-float'
          style={{ animationDelay: '4s' }}
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
      </div>

      {/* Content */}
      <div className='relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1
          className='text-4xl lg:text-6xl font-heading font-extrabold leading-tight mb-6 animate-fade-in-up'
          style={{ color: '#fff' }}
        >
          {title}
        </h1>
        <p
          className='text-xl font-bold leading-relaxed max-w-2xl mx-auto animate-fade-in-up'
          style={{ color: '#fff', animationDelay: '0.2s' }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default ParallaxHero

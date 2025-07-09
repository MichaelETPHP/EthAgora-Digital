import React from 'react'
import {
  Download,
  FileText,
  CheckSquare,
  BookOpen,
  ArrowRight,
  FileAudio2,
  FileVideo2,
} from 'lucide-react'
import ParallaxHero from '../components/Shared/ParallaxHero'

const Resources = () => {
  const [resources, setResources] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    setLoading(true)
    fetch('https://yoyacoffee.com/wp-json/wp/v2/media?per_page=6')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch resources')
        return res.json()
      })
      .then((data) => {
        setResources(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Map WordPress mime types to display types and icons
  const mimeTypeToType = (mime: string) => {
    if (mime === 'application/pdf') return { type: 'PDF', icon: FileText }
    if (mime.startsWith('audio/')) return { type: 'Audio', icon: FileAudio2 }
    if (mime.startsWith('video/')) return { type: 'Video', icon: FileVideo2 }
    return { type: 'Other', icon: FileText }
  }

  const categories = [
    { name: 'All', value: 'All' },
    { name: 'PDFs', value: 'PDF' },
    { name: 'Audio', value: 'Audio' },
    { name: 'Video', value: 'Video' },
  ]
  const [activeType, setActiveType] = React.useState('All')

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'bg-orange-500 text-white'
      case 'Audio':
        return 'bg-blue-500 text-white'
      case 'Video':
        return 'bg-green-500 text-white'
      default:
        return 'bg-neutral-500 text-white'
    }
  }

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        title='Free Resources'
        subtitle='Download our collection of free guides, checklists, and templates to boost your digital marketing efforts and drive better results.'
        backgroundImage='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920'
        height='h-96'
      />

      {/* Categories Filter */}
      <section className='py-12 bg-white border-b border-neutral-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4 animate-fade-in-up'>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeType === category.value
                    ? 'bg-orange-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setActiveType(category.value)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {loading ? (
            <div className='flex flex-col items-center justify-center py-20'>
              <span className='inline-block mb-4'>
                <svg
                  className='animate-spin h-10 w-10 text-orange-500'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                  ></path>
                </svg>
              </span>
              <span className='text-xl text-orange-500 font-medium'>
                Loading resources...
              </span>
            </div>
          ) : error ? (
            <div className='text-center py-20 text-red-500'>
              Failed to load resources: {error}
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {resources
                .filter((resource) => {
                  const { type } = mimeTypeToType(resource.mime_type || '')
                  return activeType === 'All' || type === activeType
                })
                .map((resource, index) => {
                  const { type, icon: Icon } = mimeTypeToType(
                    resource.mime_type || ''
                  )
                  return (
                    <div
                      key={resource.id || index}
                      className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up'
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Thumbnail, AI description, or video thumbnail */}
                      <div className='relative h-48 overflow-hidden bg-neutral-100 flex items-center justify-center'>
                        {resource.media_type === 'image' ? (
                          <img
                            src={resource.source_url}
                            alt={resource.title?.rendered || 'Resource'}
                            className='w-full h-full object-cover'
                          />
                        ) : resource.media_type === 'video' ? (
                          // Show video thumbnail if available, else fallback
                          resource?.media_details?.image_meta?.thumb ? (
                            <img
                              src={resource.media_details.image_meta.thumb}
                              alt={
                                resource.title?.rendered || 'Video thumbnail'
                              }
                              className='w-full h-full object-cover'
                            />
                          ) : (
                            <div className='flex flex-col items-center justify-center w-full h-full'>
                              <FileVideo2 className='h-16 w-16 text-orange-400 opacity-60 mb-2' />
                              <span className='text-xs text-neutral-500'>
                                No video thumbnail
                              </span>
                            </div>
                          )
                        ) : (
                          // For non-image, non-video: show AI image description
                          <div className='flex flex-col items-center justify-center w-full h-full'>
                            <Icon className='h-16 w-16 text-orange-400 opacity-60 mb-2' />
                            <span className='text-xs text-neutral-500 text-center px-2'>
                              {/* Sample AI image description */}
                              {resource.title?.rendered
                                ? `AI-generated image: ${resource.title.rendered}`
                                : 'AI-generated image: Digital resource illustration'}
                            </span>
                          </div>
                        )}
                        <div className='absolute top-4 left-4'>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                              type
                            )}`}
                          >
                            {type}
                          </span>
                        </div>
                      </div>
                      {/* Content */}
                      <div className='p-6'>
                        <div className='flex items-center space-x-2 mb-4'>
                          <Icon className='h-5 w-5 text-orange-500' />
                          <span className='text-sm text-neutral-500'>
                            {resource.mime_type?.split('/')[1]?.toUpperCase() ||
                              ''}
                          </span>
                        </div>
                        <h3 className='text-xl font-heading font-semibold text-neutral-900 mb-3'>
                          {resource.title?.rendered || 'Untitled'}
                        </h3>
                        <a
                          href={resource.source_url}
                          className='w-full flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200 mt-4'
                          download
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Download className='mr-2 h-4 w-4' />
                          Download
                        </a>
                      </div>
                    </div>
                  )
                })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='py-20 bg-neutral-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up'>
          <h2 className='text-3xl lg:text-4xl font-heading font-bold text-neutral-900 mb-4'>
            Get More Resources
          </h2>
          <p className='text-xl text-neutral-600 mb-8 leading-relaxed'>
            Subscribe to our newsletter and get access to exclusive resources,
            industry insights, and the latest digital marketing trends.
          </p>

          <div className='max-w-md mx-auto'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
              />
              <button className='px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap'>
                Subscribe
              </button>
            </div>
            <p className='text-sm text-neutral-500 mt-3'>
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 bg-orange-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl lg:text-4xl font-heading font-bold text-white mb-6 animate-fade-in-up'>
            Need Custom Solutions?
          </h2>
          <p
            className='text-xl text-orange-100 mb-8 animate-fade-in-up'
            style={{ animationDelay: '0.2s' }}
          >
            Our team can create custom resources and strategies tailored
            specifically to your business needs.
          </p>
          <button
            className='inline-flex items-center px-8 py-4 bg-white text-orange-600 font-medium rounded-lg hover:bg-neutral-100 transition-all duration-200 transform hover:scale-105 shadow-lg animate-fade-in-up'
            style={{ animationDelay: '0.4s' }}
          >
            Contact Our Team
            <ArrowRight className='ml-2 h-5 w-5' />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Resources

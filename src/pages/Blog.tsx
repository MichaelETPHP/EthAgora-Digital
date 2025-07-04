import React, { useState, useEffect } from 'react'
import { Calendar, User, ArrowRight, Tag, X, Clock, Eye } from 'lucide-react'
import ParallaxHero from '../components/Shared/ParallaxHero'

interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  date: string
  author: number
  featured_media: number
  categories: number[]
  tags: number[]
  link: string
  _embedded?: {
    author?: Array<{
      name: string
      avatar_urls: {
        '96': string
      }
    }>
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<
      Array<{
        id: number
        name: string
        taxonomy: string
      }>
    >
  }
}

const Blog = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPost, setSelectedPost] = useState<WordPressPost | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const postsPerPage = 9

  useEffect(() => {
    fetchPosts()
  }, [currentPage])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://ethagoradigital.com/wp-json/wp/v2/posts?page=${currentPage}&per_page=${postsPerPage}&_embed=true`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }

      const data = await response.json()
      const totalPagesHeader = response.headers.get('X-WP-TotalPages')

      setPosts(data)
      setTotalPages(parseInt(totalPagesHeader || '1'))
      setError(null)
    } catch (err) {
      setError('Failed to load blog posts. Please try again later.')
      console.error('Error fetching posts:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const words = stripHtml(content).split(' ').length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min read`
  }

  const getAuthorName = (post: WordPressPost) => {
    return post._embedded?.author?.[0]?.name || 'EthAgora Team'
  }

  const getAuthorAvatar = (post: WordPressPost) => {
    return (
      post._embedded?.author?.[0]?.avatar_urls?.['96'] ||
      'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=96'
    )
  }

  const getFeaturedImage = (post: WordPressPost) => {
    return (
      post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800'
    )
  }

  const getCategories = (post: WordPressPost) => {
    const categories = post._embedded?.['wp:term']?.[0] || []
    return categories.filter((term) => term.taxonomy === 'category')
  }

  const PostModal = ({
    post,
    onClose,
  }: {
    post: WordPressPost | null
    onClose: () => void
  }) => {
    if (!post) return null

    return (
      <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
        <div className='bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in'>
          {/* Header */}
          <div className='relative'>
            <img
              src={getFeaturedImage(post)}
              alt={post.title.rendered}
              className='w-full h-64 object-cover rounded-t-3xl'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-3xl'></div>

            <button
              onClick={onClose}
              className='absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-colors'
            >
              <X className='h-6 w-6 text-white' />
            </button>

            <div className='absolute bottom-6 left-6 right-6'>
              <div className='flex flex-wrap gap-2 mb-4'>
                {getCategories(post).map((category) => (
                  <span
                    key={category.id}
                    className='px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full'
                  >
                    {category.name}
                  </span>
                ))}
              </div>
              <h1 className='text-3xl lg:text-4xl font-heading font-bold text-white leading-tight'>
                {stripHtml(post.title.rendered)}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className='p-8'>
            {/* Meta Info */}
            <div className='flex items-center space-x-6 text-sm text-neutral-500 mb-8 pb-6 border-b border-neutral-200'>
              <div className='flex items-center space-x-2'>
                <img
                  src={getAuthorAvatar(post)}
                  alt={getAuthorName(post)}
                  className='w-8 h-8 rounded-full object-cover'
                />
                <span>{getAuthorName(post)}</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Calendar className='h-4 w-4' />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Clock className='h-4 w-4' />
                <span>{getReadingTime(post.content.rendered)}</span>
              </div>
            </div>

            {/* Article Content */}
            <div
              className='prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 prose-img:rounded-lg prose-img:shadow-lg'
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </div>
    )
  }

  const LoadingCard = () => (
    <div className='bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse'>
      <div className='h-48 bg-neutral-200'></div>
      <div className='p-6'>
        <div className='h-4 bg-neutral-200 rounded mb-3'></div>
        <div className='h-6 bg-neutral-200 rounded mb-3'></div>
        <div className='h-4 bg-neutral-200 rounded mb-4'></div>
        <div className='h-4 bg-neutral-200 rounded w-1/2'></div>
      </div>
    </div>
  )

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        title='Marketing Insights & Growth Stories'
        subtitle='Discover the latest strategies, trends, and expert advice to elevate your marketing, build your brand, and accelerate business growth.'
        backgroundImage='https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920'
        height='h-96'
      />

      {/* Blog Posts Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {error && (
            <div className='text-center mb-12'>
              <div className='bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto'>
                <div className='text-red-600 font-medium mb-2'>
                  Error Loading Posts
                </div>
                <p className='text-red-500 text-sm'>{error}</p>
                <button
                  onClick={fetchPosts}
                  className='mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {loading ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {Array.from({ length: 6 }).map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          ) : (
            <>
              {/* Blog Posts Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                {posts.map((post, index) => (
                  <article
                    key={post.id}
                    className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up'
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className='relative h-48 overflow-hidden'>
                      <img
                        src={getFeaturedImage(post)}
                        alt={stripHtml(post.title.rendered)}
                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                      />
                      <div className='absolute top-4 left-4'>
                        {getCategories(post)
                          .slice(0, 1)
                          .map((category) => (
                            <span
                              key={category.id}
                              className='px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full'
                            >
                              {category.name}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className='p-6'>
                      <div className='flex items-center space-x-4 text-sm text-neutral-500 mb-3'>
                        <div className='flex items-center space-x-1'>
                          <User className='h-3 w-3' />
                          <span>{getAuthorName(post)}</span>
                        </div>
                        <div className='flex items-center space-x-1'>
                          <Calendar className='h-3 w-3' />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>

                      <h3 className='text-lg font-heading font-semibold text-neutral-900 mb-3 line-clamp-2'>
                        {stripHtml(post.title.rendered)}
                      </h3>

                      <p className='text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3'>
                        {stripHtml(post.excerpt.rendered)}
                      </p>

                      <div className='flex items-center justify-between'>
                        <span className='text-sm text-neutral-500 flex items-center space-x-1'>
                          <Clock className='h-3 w-3' />
                          <span>{getReadingTime(post.content.rendered)}</span>
                        </span>
                        <button
                          onClick={() => setSelectedPost(post)}
                          className='text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors flex items-center group'
                        >
                          Read More
                          <ArrowRight className='ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform' />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className='flex justify-center items-center space-x-4'>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className='px-6 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    Previous
                  </button>

                  <div className='flex space-x-2'>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                            currentPage === pageNum
                              ? 'bg-orange-500 text-white'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className='px-6 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='py-20 bg-orange-500'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up'>
          <h2 className='text-3xl lg:text-4xl font-heading font-bold text-white mb-4'>
            Never Miss an Update
          </h2>
          <p className='text-xl text-orange-100 mb-8 leading-relaxed'>
            Subscribe to our newsletter and get the latest digital marketing
            insights, coffee stories, and industry news delivered directly to
            your inbox.
          </p>

          <div className='max-w-md mx-auto'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='flex-1 px-4 py-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-orange-200'
              />
              <button className='px-6 py-3 bg-white text-orange-600 font-medium rounded-lg hover:bg-neutral-100 transition-colors duration-200 whitespace-nowrap'>
                Subscribe
              </button>
            </div>
            <p className='text-sm text-orange-200 mt-3'>
              Join 10,000+ readers who trust our insights.
            </p>
          </div>
        </div>
      </section>

      {/* Post Modal */}
      <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  )
}

export default Blog

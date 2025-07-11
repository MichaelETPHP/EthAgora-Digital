import React from 'react'
import {
  Download,
  FileText,
  CheckSquare,
  BookOpen,
  ArrowRight,
  FileAudio2,
  FileVideo2,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import ParallaxHero from '../components/Shared/ParallaxHero'

const Resources = () => {
  const [resources, setResources] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(
    'PDF'
  )
  const [expandedSubcategory, setExpandedSubcategory] = React.useState<
    string | null
  >(null)

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
    {
      name: 'PDF',
      value: 'PDF',
      icon: FileText,
      color: 'bg-orange-500',
      subcategories: [
        {
          name: 'Digital Marketing Toolkits',
          value: 'digital-marketing-toolkits',
        },
        { name: 'Behavior Change Communication (BCC)', value: 'bcc' },
        { name: 'Training & Capacity Building', value: 'training' },
        { name: 'FAQs', value: 'faqs' },
      ],
    },
    {
      name: 'Audio',
      value: 'Audio',
      icon: FileAudio2,
      color: 'bg-blue-500',
      subcategories: [],
    },
    {
      name: 'Video',
      value: 'Video',
      icon: FileVideo2,
      color: 'bg-green-500',
      subcategories: [],
    },
  ]

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

  const toggleCategory = (categoryValue: string) => {
    setExpandedCategory(
      expandedCategory === categoryValue ? null : categoryValue
    )
    if (expandedCategory !== categoryValue) {
      setExpandedSubcategory(null)
    }
  }

  const toggleSubcategory = (subcategoryValue: string) => {
    setExpandedSubcategory(
      expandedSubcategory === subcategoryValue ? null : subcategoryValue
    )
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

      {/* Accordion Categories */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
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
            <div className='space-y-4'>
              {categories.map((category, index) => {
                const Icon = category.icon
                const isExpanded = expandedCategory === category.value
                const categoryResources = resources.filter((resource) => {
                  const { type } = mimeTypeToType(resource.mime_type || '')
                  return type === category.value
                })

                return (
                  <div
                    key={category.value}
                    className='border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300'
                  >
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(category.value)}
                      className='w-full px-6 py-4 bg-neutral-50 hover:bg-neutral-100 transition-all duration-200 flex items-center justify-between text-left'
                    >
                      <div className='flex items-center space-x-4'>
                        <div
                          className={`p-3 rounded-xl ${category.color} text-white`}
                        >
                          <Icon className='h-6 w-6' />
                        </div>
                        <div>
                          <h3 className='text-xl font-heading font-semibold text-neutral-900'>
                            {category.name}
                          </h3>
                          <p className='text-sm text-neutral-600'>
                            {categoryResources.length} resources available
                          </p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className='h-6 w-6 text-neutral-500' />
                      ) : (
                        <ChevronRight className='h-6 w-6 text-neutral-500' />
                      )}
                    </button>

                    {/* Category Content */}
                    {isExpanded && (
                      <div className='bg-white'>
                        {/* Subcategories for PDF */}
                        {category.value === 'PDF' &&
                          category.subcategories.length > 0 && (
                            <div className='border-t border-neutral-200'>
                              <div className='px-6 py-4 bg-orange-50'>
                                <h4 className='text-lg font-heading font-semibold text-neutral-900 mb-3'>
                                  Browse by Category
                                </h4>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                  {category.subcategories.map(
                                    (subcategory, subIndex) => (
                                      <button
                                        key={subcategory.value}
                                        onClick={() =>
                                          toggleSubcategory(subcategory.value)
                                        }
                                        className='flex items-center justify-between p-3 bg-white rounded-lg border border-orange-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 text-left'
                                      >
                                        <span className='text-sm font-medium text-neutral-700'>
                                          {subcategory.name}
                                        </span>
                                        {expandedSubcategory ===
                                        subcategory.value ? (
                                          <ChevronDown className='h-4 w-4 text-orange-500' />
                                        ) : (
                                          <ChevronRight className='h-4 w-4 text-orange-500' />
                                        )}
                                      </button>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          )}

                        {/* FAQ Content for FAQs Subcategory */}
                        {category.value === 'PDF' &&
                          expandedSubcategory === 'faqs' && (
                            <div className='border-t border-neutral-200 bg-white'>
                              <div className='px-6 py-6'>
                                <h4 className='text-xl font-heading font-semibold text-neutral-900 mb-6'>
                                  Frequently Asked Questions
                                </h4>
                                <div className='space-y-6'>
                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      What does EthAgora mean?
                                    </h5>
                                    <p className='text-neutral-600 text-sm'>
                                      Our name—EthAgora—blends "Eth" for
                                      Ethiopia and "Agora," the ancient Greek
                                      word for a public gathering space. It
                                      reflects our vision of creating dynamic
                                      digital spaces where ideas, people, and
                                      purpose converge to spark growth and
                                      transformation.
                                    </p>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      What services does EthAgora Digital
                                      Solutions offer?
                                    </h5>
                                    <div className='text-neutral-600 text-sm'>
                                      <p className='mb-2'>
                                        We provide a unique blend of services
                                        that combine digital marketing, social
                                        media management, and behavior change
                                        communication. Our core offerings
                                        include:
                                      </p>
                                      <ul className='list-disc pl-6 space-y-1'>
                                        <li>
                                          Social media strategy & content
                                          creation
                                        </li>
                                        <li>
                                          Digital campaign planning & execution
                                        </li>
                                        <li>
                                          Data-driven communication and
                                          analytics
                                        </li>
                                        <li>
                                          Behavioral insights for public health
                                          & social impact
                                        </li>
                                        <li>
                                          Influencer engagement and online
                                          community building
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      How is EthAgora different from other
                                      digital agencies?
                                    </h5>
                                    <p className='text-neutral-600 text-sm'>
                                      EthAgora stands at the intersection of
                                      creative storytelling, behavioral science,
                                      and data analytics. Unlike typical
                                      marketing agencies, we design
                                      communication that not only sells — but
                                      inspires change, builds trust, and drives
                                      social impact.
                                    </p>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      Who are your typical clients?
                                    </h5>
                                    <div className='text-neutral-600 text-sm'>
                                      <p className='mb-2'>We work with:</p>
                                      <ul className='list-disc pl-6 space-y-1'>
                                        <li>
                                          Businesses looking to grow their
                                          digital footprint
                                        </li>
                                        <li>
                                          NGOs and development agencies seeking
                                          social behavior change
                                        </li>
                                        <li>
                                          Health institutions managing public
                                          health campaigns
                                        </li>
                                        <li>
                                          Startups and personal brands in need
                                          of digital visibility
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      Do you offer content creation and social
                                      media management?
                                    </h5>
                                    <div className='text-neutral-600 text-sm'>
                                      <p className='mb-2'>
                                        Yes! We manage social media pages
                                        end-to-end, including:
                                      </p>
                                      <ul className='list-disc pl-6 space-y-1'>
                                        <li>
                                          Content planning and calendar creation
                                        </li>
                                        <li>Graphics and video production</li>
                                        <li>Post scheduling and engagement</li>
                                        <li>
                                          Insights reporting and strategy
                                          refinement
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      How do you use behavior change
                                      communication (BCC) in your work?
                                    </h5>
                                    <p className='text-neutral-600 text-sm'>
                                      We apply BCC principles to create
                                      campaigns that address attitudes, norms,
                                      and behaviors. Whether it's vaccine
                                      uptake, maternal health, or brand
                                      perception, our messaging is crafted to
                                      move people from awareness to action —
                                      grounded in community realities and human
                                      psychology.
                                    </p>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      Can I get a custom package for my business
                                      or project?
                                    </h5>
                                    <p className='text-neutral-600 text-sm'>
                                      Absolutely. Every client has different
                                      needs — we offer flexible packages based
                                      on your goals, target audience, and
                                      budget. Whether you need one-time campaign
                                      support or ongoing content management, we
                                      tailor solutions for impact.
                                    </p>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      How quickly can you start managing our
                                      digital presence?
                                    </h5>
                                    <p className='text-neutral-600 text-sm'>
                                      We can typically begin within 1-2 weeks
                                      after our initial consultation and
                                      strategy development phase.
                                    </p>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      What's your process when starting with a
                                      new client?
                                    </h5>
                                    <div className='text-neutral-600 text-sm'>
                                      <p className='mb-2'>
                                        Our process includes:
                                      </p>
                                      <ol className='list-decimal pl-6 space-y-1'>
                                        <li>
                                          Discovery Call – Understand your goals
                                          and audience
                                        </li>
                                        <li>
                                          Strategy Development – Craft a
                                          tailored digital or BCC plan
                                        </li>
                                        <li>
                                          Implementation – Roll out content,
                                          campaigns, and analytics
                                        </li>
                                        <li>
                                          Monitoring & Optimization – Track
                                          performance and adjust
                                        </li>
                                      </ol>
                                    </div>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      Can you help us manage digital crises or
                                      misinformation?
                                    </h5>
                                    <p className='text-neutral-600 text-sm'>
                                      Yes, we offer digital crisis communication
                                      support, especially in public health and
                                      high-stakes campaigns. From rumor tracking
                                      to rapid-response messaging, we help
                                      protect your brand and build community
                                      trust.
                                    </p>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      How can I get started with EthAgora?
                                    </h5>
                                    <div className='text-neutral-600 text-sm'>
                                      <p className='mb-2'>
                                        Getting started is easy!
                                      </p>
                                      <div className='space-y-2'>
                                        <div className='flex items-center gap-2'>
                                          <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-4 w-4 text-green-500'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                          >
                                            <path
                                              strokeLinecap='round'
                                              strokeLinejoin='round'
                                              strokeWidth={2}
                                              d='M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                                            />
                                          </svg>
                                          <span>
                                            Just message us "Hi" on WhatsApp at{' '}
                                            <a
                                              href='https://wa.me/+251976111222'
                                              className='text-green-600 underline font-medium'
                                              target='_blank'
                                              rel='noopener noreferrer'
                                            >
                                              +251 976 111 222
                                            </a>
                                          </span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                          <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-4 w-4 text-orange-500'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                          >
                                            <path
                                              strokeLinecap='round'
                                              strokeLinejoin='round'
                                              strokeWidth={2}
                                              d='M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0V8a4 4 0 018 0v4'
                                            />
                                          </svg>
                                          <span>
                                            Or email us at{' '}
                                            <a
                                              href='mailto:hello@ethagora.com'
                                              className='text-orange-600 underline font-medium'
                                            >
                                              hello@ethagora.com
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <p className='mt-2'>
                                        Let's co-create digital solutions that
                                        drive results and social impact.
                                      </p>
                                    </div>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      Do you work with businesses in our
                                      industry?
                                    </h5>
                                    <p className='text-neutral-600 text-sm'>
                                      We work with businesses across all
                                      industries, from tech startups to
                                      traditional retail, healthcare, and
                                      professional services.
                                    </p>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      What's included in your monthly reporting?
                                    </h5>
                                    <p className='text-neutral-600 text-sm'>
                                      Our reports include engagement metrics,
                                      reach and impressions, conversion rates,
                                      and ROI analysis with strategic
                                      recommendations.
                                    </p>
                                  </div>

                                  <div className='bg-neutral-50 rounded-lg p-4'>
                                    <h5 className='font-semibold text-neutral-900 mb-2'>
                                      Can we maintain control over our digital
                                      accounts?
                                    </h5>
                                    <p className='text-neutral-600 text-sm'>
                                      Absolutely. You maintain full ownership
                                      and control of all your digital accounts
                                      while we manage the day-to-day operations.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                        {/* Resources Horizontal Layout */}
                        <div className='p-6'>
                          <div className='flex flex-wrap gap-4 overflow-x-auto pb-4'>
                            {categoryResources.map(
                              (resource, resourceIndex) => {
                                const { type, icon: ResourceIcon } =
                                  mimeTypeToType(resource.mime_type || '')
                                return (
                                  <div
                                    key={resource.id || resourceIndex}
                                    className='bg-white rounded-xl p-4 hover:bg-neutral-50 transition-all duration-200 border border-neutral-200 shadow-sm hover:shadow-md min-w-[280px] flex-shrink-0'
                                  >
                                    <div className='flex items-start space-x-3'>
                                      <div
                                        className={`p-2 rounded-lg ${getTypeColor(
                                          type
                                        )}`}
                                      >
                                        <ResourceIcon className='h-5 w-5' />
                                      </div>
                                      <div className='flex-1 min-w-0'>
                                        <h4 className='text-sm font-medium text-neutral-900 mb-1 truncate'>
                                          {resource.title?.rendered ||
                                            'Untitled'}
                                        </h4>
                                        <p className='text-xs text-neutral-500 mb-3'>
                                          {resource.mime_type
                                            ?.split('/')[1]
                                            ?.toUpperCase() || ''}
                                        </p>
                                        <a
                                          href={resource.source_url}
                                          className='inline-flex items-center px-3 py-1.5 bg-orange-500 text-white text-xs font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200'
                                          download
                                          target='_blank'
                                          rel='noopener noreferrer'
                                        >
                                          <Download className='mr-1 h-3 w-3' />
                                          Download
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                )
                              }
                            )}
                          </div>

                          {categoryResources.length === 0 && (
                            <div className='text-center py-8 text-neutral-500'>
                              <Icon className='h-12 w-12 mx-auto mb-3 text-neutral-300' />
                              <p>
                                No {category.name} resources available at the
                                moment.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
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

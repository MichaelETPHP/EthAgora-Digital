import React, { useState } from 'react'
import Accordion from '../components/Shared/Accordion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import ParallaxHero from '../components/Shared/ParallaxHero'

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // 🔑 Store your Bot Token and Chat ID here
  const botToken = '7778748542:AAHn4TDIXS3XAd7w8bg32BrjxIc5c2-eZE4'
  const chatId = '-1002882277523'

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@ethagora.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ' +251 976 111 222',
      description: 'Mon-Fri from 8am to 6pm EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Addis Ababa Ethiopia',
      description: 'CMC Road ',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM EST',
    },
  ]

  const services = [
    'Digital Marketing and Brand Strategy',
    'Public Health Promotion and Behavior Change (SBC) Communication',
    'Strategic Communication Planning and Management',
    'Digital Campaign Performance Analysis',
    'Custom Package',
  ]
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    const form = e.currentTarget

    const data = {
      firstName: (form.firstName as any).value,
      lastName: (form.lastName as any).value,
      email: (form.email as any).value,
      phone: (form.phone as any).value,
      company: (form.company as any).value,
      service: (form.service as any).value,
      budget: (form.budget as any).value,
      message: (form.message as any).value,
    }

    const message = `
📬 *New Contact Submission (${new Date().toLocaleString()})*

👤 *Name:* ${data.firstName} ${data.lastName}
✉️ *Email:* ${data.email}
🏢 *Company:* ${data.company || 'N/A'}
🎯 *Service:* ${data.service || 'N/A'}
💰 *Budget:* ${data.budget || 'N/A'}
📲*Phone:* ${data.phone || 'N/A'}

📝 *Message:*
${data.message}
  `

    try {
      // ✅ 1. Send Telegram
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        }
      )

      const result = await response.json()
      if (!result.ok) {
        console.error('Telegram API error:', result)
        throw new Error('Telegram send failed.')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        title='Get In Touch'
        subtitle="Ready to transform your digital presence? Let's discuss how we can help you achieve your business goals through strategic digital solutions."
        backgroundImage='https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1920'
        height='h-96'
      />

      {/* Contact Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='animate-fade-in-up'>
              <div className='bg-white rounded-2xl shadow-xl p-8'>
                <div className='flex items-center space-x-3 mb-8'>
                  <div className='bg-orange-500 p-2 rounded-lg'>
                    <MessageSquare className='h-6 w-6 text-white' />
                  </div>
                  <h2 className='text-2xl font-heading font-bold text-neutral-900'>
                    Send us a message
                  </h2>
                </div>

                <form className='space-y-6' onSubmit={handleSubmit}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='firstName'
                        className='block text-sm font-medium text-neutral-700 mb-2'
                      >
                        First Name *
                      </label>
                      <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        required
                        className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
                        placeholder='John'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='lastName'
                        className='block text-sm font-medium text-neutral-700 mb-2'
                      >
                        Last Name *
                      </label>
                      <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        required
                        className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
                        placeholder='Doe'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-neutral-700 mb-2'
                    >
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      required
                      className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
                      placeholder='john@company.com'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-neutral-700 mb-2'
                    >
                      Phone Number *
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      required
                      className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
                      placeholder='+251 234 567 8901'
                      pattern='[+]?\d{1,4}[\s\-]?\d{1,15}'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-neutral-700 mb-2'
                    >
                      Company Name
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
                      placeholder='Your Company'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='service'
                      className='block text-sm font-medium text-neutral-700 mb-2'
                    >
                      Service Interested In
                    </label>
                    <select
                      id='service'
                      name='service'
                      className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
                    >
                      <option value=''>Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='budget'
                      className='block text-sm font-medium text-neutral-700 mb-2'
                    >
                      Monthly Budget Range
                    </label>
                    <select
                      id='budget'
                      name='budget'
                      className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
                    >
                      <option value=''>Select budget range [ETB]</option>
                      <option value='under-1000'>Under 1,000</option>
                      <option value='1000-2500'>1,000 - 2,500</option>
                      <option value='2500-5000'>2,500 - 5,000</option>
                      <option value='5000-10000'>5,000 - $10,000</option>
                      <option value='over-10000'>Over 10,000</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-neutral-700 mb-2'
                    >
                      Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={5}
                      required
                      className='w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none'
                      placeholder='Tell us about your project and goals...'
                    ></textarea>
                  </div>
                  {status === 'success' && (
                    <p className='text-green-600 mt-4'>
                      ✅ Your message has been sent successfully!
                    </p>
                  )}
                  {status === 'error' && (
                    <p className='text-red-600 mt-4'>
                      ❌ Sorry, there was an error sending your message.
                    </p>
                  )}
                  <button
                    type='submit'
                    disabled={loading}
                    className={`w-full flex items-center justify-center px-8 py-4 ${
                      loading
                        ? 'bg-orange-300 cursor-not-allowed'
                        : 'bg-orange-500 hover:bg-orange-600'
                    } text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg`}
                  >
                    {loading ? (
                      <>
                        Sending...
                        <svg
                          className='ml-2 h-5 w-5 animate-spin'
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
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className='ml-2 h-5 w-5' />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            {/* ... (rest of your content unchanged) */}

            {/* Contact Info */}
            <div
              className='animate-fade-in-up'
              style={{ animationDelay: '0.2s' }}
            >
              <div className='space-y-8'>
                <div>
                  <h2 className='text-2xl font-heading font-bold text-neutral-900 mb-6'>
                    Contact Information
                  </h2>
                  <p className='text-neutral-600 leading-relaxed mb-8'>
                    We'd love to hear from you. Choose the most convenient way
                    to reach us, and our team will get back to you as soon as
                    possible.
                  </p>
                </div>

                <div className='space-y-6'>
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className='flex items-start space-x-4 p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-100 transition-colors'
                    >
                      <div className='bg-orange-500 p-3 rounded-lg'>
                        <info.icon className='h-6 w-6 text-white' />
                      </div>
                      <div>
                        <h3 className='font-heading font-semibold text-neutral-900 mb-1'>
                          {info.title}
                        </h3>
                        <p className='text-orange-600 font-medium mb-1'>
                          {info.details}
                        </p>
                        <p className='text-neutral-600 text-sm'>
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className='mt-8'>
                  <div className='bg-neutral-200 rounded-2xl h-64 flex items-center justify-center'>
                    <div className='text-center'>
                      <MapPin className='h-12 w-12 text-neutral-400 mx-auto mb-2' />
                      <p className='text-neutral-600'>Interactive Map</p>
                      <p className='text-neutral-500 text-sm'>Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-neutral-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-16'>
          <div className='text-center mb-16 animate-fade-in-up'>
            <h2 className='text-4xl lg:text-5xl font-heading font-extrabold text-neutral-900 mb-4 tracking-tight'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-neutral-600 leading-relaxed'>
              Get quick answers to common questions about our services and
              process.
            </p>
          </div>
          <div className='mx-auto max-w-4xl animate-fade-in-up'>
            <Accordion
              faqs={[
                {
                  question: 'What does EthAgora mean?',
                  answer:
                    'Our name—EthAgora—blends “Eth” for Ethiopia and “Agora,” the ancient Greek word for a public gathering space. It reflects our vision of creating dynamic digital spaces where ideas, people, and purpose converge to spark growth and transformation.',
                },
                {
                  question:
                    'What services does EthAgora Digital Solutions offer?',
                  answer: (
                    <>
                      We provide a unique blend of services that combine digital
                      marketing, social media management, and behavior change
                      communication. Our core offerings include:
                      <ul className='list-disc pl-6 mt-2 space-y-1 text-neutral-600'>
                        <li>Social media strategy &amp; content creation</li>
                        <li>Digital campaign planning &amp; execution</li>
                        <li>Data-driven communication and analytics</li>
                        <li>
                          Behavioral insights for public health &amp; social
                          impact
                        </li>
                        <li>
                          Influencer engagement and online community building
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  question:
                    'How is EthAgora different from other digital agencies?',
                  answer:
                    'EthAgora stands at the intersection of creative storytelling, behavioral science, and data analytics. Unlike typical marketing agencies, we design communication that not only sells — but inspires change, builds trust, and drives social impact.',
                },
                {
                  question: 'Who are your typical clients?',
                  answer: (
                    <>
                      We work with:
                      <ul className='list-disc pl-6 mt-2 space-y-1 text-neutral-600'>
                        <li>
                          Businesses looking to grow their digital footprint
                        </li>
                        <li>
                          NGOs and development agencies seeking social behavior
                          change
                        </li>
                        <li>
                          Health institutions managing public health campaigns
                        </li>
                        <li>
                          Startups and personal brands in need of digital
                          visibility
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  question:
                    'Do you offer content creation and social media management?',
                  answer: (
                    <>
                      Yes! We manage social media pages end-to-end, including:
                      <ul className='list-disc pl-6 mt-2 space-y-1 text-neutral-600'>
                        <li>Content planning and calendar creation</li>
                        <li>Graphics and video production</li>
                        <li>Post scheduling and engagement</li>
                        <li>Insights reporting and strategy refinement</li>
                      </ul>
                    </>
                  ),
                },
                {
                  question:
                    'How do you use behavior change communication (BCC) in your work?',
                  answer:
                    'We apply BCC principles to create campaigns that address attitudes, norms, and behaviors. Whether it’s vaccine uptake, maternal health, or brand perception, our messaging is crafted to move people from awareness to action — grounded in community realities and human psychology.',
                },
                {
                  question:
                    'Can I get a custom package for my business or project?',
                  answer:
                    'Absolutely. Every client has different needs — we offer flexible packages based on your goals, target audience, and budget. Whether you need one-time campaign support or ongoing content management, we tailor solutions for impact.',
                },
                {
                  question:
                    'How quickly can you start managing our digital presence?',
                  answer:
                    'We can typically begin within 1-2 weeks after our initial consultation and strategy development phase.',
                },
                {
                  question:
                    'What’s your process when starting with a new client?',
                  answer: (
                    <>
                      Our process includes:
                      <ol className='list-decimal pl-6 mt-2 space-y-1 text-neutral-600'>
                        <li>
                          Discovery Call – Understand your goals and audience
                        </li>
                        <li>
                          Strategy Development – Craft a tailored digital or BCC
                          plan
                        </li>
                        <li>
                          Implementation – Roll out content, campaigns, and
                          analytics
                        </li>
                        <li>
                          Monitoring &amp; Optimization – Track performance and
                          adjust
                        </li>
                      </ol>
                    </>
                  ),
                },
                {
                  question:
                    'Can you help us manage digital crises or misinformation?',
                  answer:
                    'Yes, we offer digital crisis communication support, especially in public health and high-stakes campaigns. From rumor tracking to rapid-response messaging, we help protect your brand and build community trust.',
                },
                {
                  question: 'How can I get started with EthAgora?',
                  answer: (
                    <>
                      Getting started is easy!
                      <div className='flex flex-col gap-2 mt-2 text-neutral-600'>
                        <span className='flex items-center gap-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 text-green-500'
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
                            Just message us “Hi” on WhatsApp at{' '}
                            <a
                              href='https://wa.me/ +251 976 111 222'
                              className='text-green-600 underline font-medium'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              +251 976 111 222
                            </a>
                          </span>
                        </span>
                        <span className='flex items-center gap-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 text-orange-500'
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
                        </span>
                      </div>
                      <span className='block mt-2'>
                        Let’s co-create digital solutions that drive results and
                        social impact.
                      </span>
                    </>
                  ),
                },
                {
                  question: 'Do you work with businesses in our industry?',
                  answer:
                    'We work with businesses across all industries, from tech startups to traditional retail, healthcare, and professional services.',
                },
                {
                  question: "What's included in your monthly reporting?",
                  answer:
                    'Our reports include engagement metrics, reach and impressions, conversion rates, and ROI analysis with strategic recommendations.',
                },
                {
                  question:
                    'Can we maintain control over our digital accounts?',
                  answer:
                    'Absolutely. You maintain full ownership and control of all your digital accounts while we manage the day-to-day operations.',
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

import React from 'react'
import { Star, Quote, TrendingUp, Users, Award, Sparkles } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      company: 'Nigat Printing & Advertising',
      content:
        "Partnering with EthAgora Digital Solutions was a game-changer for us. Their targeted social media campaigns and sharp analytics brought our services into the spotlight like never before. After 20 years in the business, we've never seen such rapid growth in reach and client engagement. EthAgora truly understands how to turn digital strategy into real-world results.",
      rating: 5,
      image:
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      stats: { metric: '20 Years', value: 'In Business' },
      icon: TrendingUp,
    },
    {
      company: 'Sally Beauty & Spa',
      content:
        'EthAgora Digital Solutions helped us redefine our brand presence across TikTok, Facebook, Instagram, and our website. Thanks to their creative and consistent support. They brought our beauty to the spotlight—with elegance and impact.',
      rating: 5,
      image:
        'https://images.pexels.com/photos/3985317/pexels-photo-3985317.jpeg?auto=compress&cs=tinysrgb&w=400',
      stats: { metric: '4 Platforms', value: 'Transformed' },
      icon: Sparkles,
    },
  ]

  const stats = [
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '300%', label: 'Average Growth', icon: TrendingUp },
    { number: '98%', label: 'Client Retention', icon: Award },
    { number: '5+', label: 'Years Experience', icon: Star },
  ]

  return (
    <section className='py-20 bg-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16 animate-fade-in-up'>
          <h2 className='text-4xl lg:text-6xl font-heading font-bold text-neutral-900 mb-6'>
            Client Success Stories
          </h2>
          <p className='text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed'>
            Real results from real businesses. Discover how we've helped
            transform digital strategies into measurable growth.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Orange accent stripe */}
              <div className='absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-orange-600'></div>

              <div className='p-8 lg:p-10'>
                {/* Quote Icon */}
                <div className='flex justify-between items-start mb-6'>
                  <div className='bg-orange-100 p-3 rounded-2xl'>
                    <Quote className='h-6 w-6 text-orange-600' />
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='bg-neutral-100 p-2 rounded-xl'>
                      <testimonial.icon className='h-5 w-5 text-neutral-700' />
                    </div>
                    <div className='text-right'>
                      <div className='text-2xl font-bold text-orange-600'>
                        {testimonial.stats.metric}
                      </div>
                      <div className='text-sm text-neutral-600'>
                        {testimonial.stats.value}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className='flex space-x-1 mb-6'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-5 w-5 text-yellow-400 fill-current'
                    />
                  ))}
                </div>

                {/* Content */}
                <p className='text-neutral-700 leading-relaxed mb-8 text-lg italic'>
                  "{testimonial.content}"
                </p>

                {/* Company */}
                <div className='flex items-center space-x-4 pt-6 border-t border-neutral-100'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.company}
                    className='w-16 h-16 rounded-2xl object-cover'
                  />
                  <div>
                    <div className='font-bold text-xl text-neutral-900'>
                      {testimonial.company}
                    </div>
                    <div className='text-sm text-orange-600 font-medium'>
                      Valued Partner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className='relative'>
          <div className='absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl transform rotate-1'></div>
          <div className='relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-white'>
            <h3 className='text-3xl font-heading font-bold text-center mb-12'>
              Our Impact in Numbers
            </h3>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='text-center group animate-fade-in-up'
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300'>
                    <stat.icon className='h-8 w-8 text-white/80 mx-auto mb-4' />
                    <div className='text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300'>
                      {stat.number}
                    </div>
                    <div className='text-orange-100 font-medium'>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Testimonials Preview */}
        <div className='mt-20 text-center'>
          <p className='text-lg text-neutral-600 mb-8'>
            Join the growing list of businesses experiencing digital
            transformation with EthAgora
          </p>

          <div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
            {[
              'Tech Solutions Ltd',
              'Global Enterprises',
              'StartUp Hub',
              'Creative Agency',
              'Retail Plus',
            ].map((company, index) => (
              <div key={index} className='text-neutral-500 font-medium'>
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-20 text-center bg-orange-50 rounded-3xl p-12'>
          <h3 className='text-3xl font-heading font-bold text-neutral-900 mb-4'>
            Ready to Be Our Next Success Story?
          </h3>
          <p className='text-xl text-neutral-600 mb-8 max-w-2xl mx-auto'>
            Let's work together to transform your digital presence and achieve
            remarkable results.
          </p>
          <button className='inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg'>
            Start Your Journey
            <svg
              className='ml-2 h-5 w-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

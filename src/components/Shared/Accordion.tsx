import React, { useState } from 'react'

interface FAQ {
  question: string
  answer: React.ReactNode
}

interface AccordionProps {
  faqs: FAQ[]
}

const Accordion: React.FC<AccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  // Display FAQs in two columns on large screens, one column on mobile
  const half = Math.ceil(faqs.length / 2)
  const columns = [faqs.slice(0, half), faqs.slice(half)]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {columns.map((col, colIdx) => (
        <div
          key={colIdx}
          className='divide-y divide-neutral-200 rounded-2xl bg-white shadow-xl'
        >
          {col.map((faq, idx) => {
            // Calculate the global index for openIndex
            const globalIdx = colIdx === 0 ? idx : idx + half
            return (
              <div key={globalIdx}>
                <button
                  className={`w-full flex justify-between items-center py-6 px-6 focus:outline-none transition-colors duration-200 ${
                    openIndex === globalIdx ? 'bg-orange-50' : ''
                  }`}
                  onClick={() => toggle(globalIdx)}
                  aria-expanded={openIndex === globalIdx}
                  aria-controls={`faq-panel-${globalIdx}`}
                >
                  <span className='text-lg font-semibold text-neutral-900 text-left'>
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 transform transition-transform duration-200 ${
                      openIndex === globalIdx ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      width='24'
                      height='24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='text-orange-500'
                    >
                      <polyline points='6 9 12 15 18 9'></polyline>
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${globalIdx}`}
                  className={`overflow-hidden transition-all duration-300 px-6 ${
                    openIndex === globalIdx ? 'max-h-96 py-2' : 'max-h-0 py-0'
                  }`}
                  style={{
                    transitionProperty: 'max-height, padding',
                  }}
                >
                  {openIndex === globalIdx && (
                    <div className='text-neutral-600 leading-relaxed pb-4'>
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Accordion

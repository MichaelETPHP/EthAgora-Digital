import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const COOKIE_KEY = 'ethagora_cookie_consent_v1'
const COOKIE_EXPIRY_DAYS = 180 // 6 months

const defaultPrefs = {
  necessary: true,
  analytics: false,
  marketing: false,
}

type CookiePrefs = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

function getStoredPrefs(): CookiePrefs | null {
  try {
    const item = localStorage.getItem(COOKIE_KEY)
    if (!item) return null
    const { prefs, timestamp } = JSON.parse(item)
    if (Date.now() - timestamp > COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(COOKIE_KEY)
      return null
    }
    return prefs
  } catch {
    return null
  }
}

function storePrefs(prefs: CookiePrefs) {
  localStorage.setItem(
    COOKIE_KEY,
    JSON.stringify({ prefs, timestamp: Date.now() })
  )
}

const CookieConsentBanner = () => {
  const [show, setShow] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [prefs, setPrefs] = useState(() => getStoredPrefs() || defaultPrefs)
  const [hasInteracted, setHasInteracted] = useState(!!getStoredPrefs())
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (!getStoredPrefs()) setShow(true)
    // Detect dark mode
    setDark(
      window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }, [])

  // Auto-reject after 30s if no action
  useEffect(() => {
    if (!show || hasInteracted) return
    const t = setTimeout(() => {
      handleRejectAll()
    }, 30000)
    return () => clearTimeout(t)
  }, [show, hasInteracted])

  function handleAcceptAll() {
    setPrefs({ ...defaultPrefs, analytics: true, marketing: true })
    storePrefs({ ...defaultPrefs, analytics: true, marketing: true })
    setShow(false)
    setHasInteracted(true)
  }
  function handleRejectAll() {
    setPrefs({ ...defaultPrefs, analytics: false, marketing: false })
    storePrefs({ ...defaultPrefs, analytics: false, marketing: false })
    setShow(false)
    setHasInteracted(true)
  }
  function handleSave() {
    storePrefs(prefs)
    setShow(false)
    setHasInteracted(true)
    setShowSettings(false)
  }
  function handleManage() {
    setShowSettings(true)
  }
  function handleCloseSettings() {
    setShowSettings(false)
  }

  // i18n placeholder
  const text = {
    title: 'We use cookies to improve your experience.',
    desc: 'By using our site, you agree to our use of cookies. Manage your preferences anytime.',
    necessary: 'Necessary',
    analytics: 'Analytics',
    marketing: 'Marketing',
    accept: 'Accept All',
    reject: 'Reject All',
    manage: 'Manage Preferences',
    save: 'Save Preferences',
    settings: 'Cookie Preferences',
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed bottom-0 left-0 w-full z-[100] flex justify-center px-2 sm:px-0 pointer-events-none`}
          aria-live='polite'
        >
          <div
            className={`pointer-events-auto max-w-xl w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-2xl rounded-2xl p-6 mb-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 transition-colors duration-300 ${
              dark ? 'dark' : ''
            }`}
            role='dialog'
            aria-modal='true'
            aria-label={text.title}
          >
            <div className='flex-1 min-w-0'>
              <div className='font-bold text-lg text-neutral-900 dark:text-white mb-1'>
                {text.title}
              </div>
              <div className='text-neutral-600 dark:text-neutral-300 text-sm mb-3'>
                {text.desc}
              </div>
              <div className='flex flex-col gap-2 mt-2'>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='checkbox'
                    checked
                    disabled
                    className='accent-orange-500'
                  />
                  <span className='text-neutral-800 dark:text-neutral-200 font-medium'>
                    {text.necessary}
                  </span>
                  <span className='ml-1 text-xs text-neutral-400'>
                    (Always Active)
                  </span>
                </label>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='checkbox'
                    checked={prefs.analytics}
                    onChange={(e) =>
                      setPrefs((p: CookiePrefs) => ({
                        ...p,
                        analytics: e.target.checked,
                      }))
                    }
                    className='accent-orange-500'
                  />
                  <span className='text-neutral-800 dark:text-neutral-200 font-medium'>
                    {text.analytics}
                  </span>
                </label>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='checkbox'
                    checked={prefs.marketing}
                    onChange={(e) =>
                      setPrefs((p: CookiePrefs) => ({
                        ...p,
                        marketing: e.target.checked,
                      }))
                    }
                    className='accent-orange-500'
                  />
                  <span className='text-neutral-800 dark:text-neutral-200 font-medium'>
                    {text.marketing}
                  </span>
                </label>
              </div>
            </div>
            <div className='flex flex-col gap-2 min-w-[140px]'>
              <button
                className='w-full py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400'
                onClick={handleAcceptAll}
                autoFocus
              >
                {text.accept}
              </button>
              <button
                className='w-full py-2 px-4 rounded-lg bg-neutral-100 text-neutral-700 font-semibold hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400'
                onClick={handleRejectAll}
              >
                {text.reject}
              </button>
              <button
                className='w-full py-2 px-4 rounded-lg bg-white text-orange-600 font-semibold border border-orange-200 hover:bg-orange-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400'
                onClick={handleManage}
              >
                {text.manage}
              </button>
            </div>
          </div>
        </motion.div>
      )}
      {showSettings && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 z-[101] flex items-center justify-center bg-black/40 backdrop-blur-sm'
          aria-modal='true'
          role='dialog'
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-neutral-200 dark:border-neutral-700'
          >
            <div className='flex items-center justify-between mb-6'>
              <div className='font-bold text-lg text-neutral-900 dark:text-white'>
                {text.settings}
              </div>
              <button
                className='p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-orange-100 dark:hover:bg-orange-900 text-neutral-600 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-400'
                onClick={handleCloseSettings}
                aria-label='Close cookie settings'
              >
                <svg
                  width='20'
                  height='20'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input
                  type='checkbox'
                  checked
                  disabled
                  className='accent-orange-500'
                />
                <span className='text-neutral-800 dark:text-neutral-200 font-medium'>
                  {text.necessary}
                </span>
                <span className='ml-1 text-xs text-neutral-400'>
                  (Always Active)
                </span>
              </label>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input
                  type='checkbox'
                  checked={prefs.analytics}
                  onChange={(e) =>
                    setPrefs((p: CookiePrefs) => ({
                      ...p,
                      analytics: e.target.checked,
                    }))
                  }
                  className='accent-orange-500'
                />
                <span className='text-neutral-800 dark:text-neutral-200 font-medium'>
                  {text.analytics}
                </span>
              </label>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input
                  type='checkbox'
                  checked={prefs.marketing}
                  onChange={(e) =>
                    setPrefs((p: CookiePrefs) => ({
                      ...p,
                      marketing: e.target.checked,
                    }))
                  }
                  className='accent-orange-500'
                />
                <span className='text-neutral-800 dark:text-neutral-200 font-medium'>
                  {text.marketing}
                </span>
              </label>
            </div>
            <button
              className='mt-8 w-full py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400'
              onClick={handleSave}
            >
              {text.save}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsentBanner

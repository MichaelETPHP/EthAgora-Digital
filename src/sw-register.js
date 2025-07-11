// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

// PWA Install Prompt
let deferredPrompt

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later
  deferredPrompt = e

  // Show install button or notification
  showInstallPromotion()
})

function showInstallPromotion() {
  // You can show a custom install button here
  console.log('PWA install prompt available')
}

// Handle app install
window.addEventListener('appinstalled', (evt) => {
  console.log('PWA was installed')
  // Hide the install promotion
  hideInstallPromotion()
})

function hideInstallPromotion() {
  // Hide your install button or notification
  console.log('PWA install promotion hidden')
}

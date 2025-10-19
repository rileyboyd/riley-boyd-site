'use client'
import { useEffect } from 'react'

// Make jQuery available globally
import type jQueryStatic from 'jquery'

declare global {
  interface Window {
    $?: typeof jQueryStatic
    jQuery?: typeof jQueryStatic
  }
}

if (typeof window !== 'undefined') {
  // Import jQuery dynamically
  import('jquery').then((module) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jq = (module as any).default || module
    window.$ = jq as typeof jQueryStatic
    window.jQuery = jq as typeof jQueryStatic
  })
}

export default function ClientScripts() {
  useEffect(() => {
    // Initialize scripts when component mounts
    if (typeof window !== 'undefined') {
      // Initialize all the components
      try {
        // Wait for jQuery to be available
        const initScripts = () => {
          const $ = window.$ as typeof jQueryStatic | undefined
          if (!$) {
            setTimeout(initScripts, 100)
            return
          }

          // Initialize other components as needed
          // Add more initialization code here as needed
        }

        initScripts()
      } catch (error) {
        console.error('Error initializing client scripts:', error)
      }
    }
  }, [])

  return null // This component doesn't render anything
}

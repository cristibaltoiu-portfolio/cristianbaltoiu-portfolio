'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-x-2 rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-950/50 transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
      <span>Top</span>
    </button>
  )
}
import { useEffect } from 'react'

export function useResetOnTab (shortUrl, reset) {
  useEffect(() => {
    const handleKeyUp = (e) => {
      e.preventDefault()
      if (!shortUrl) return
      if (e.code === 'Tab') reset()
    }

    document.addEventListener('keyup', handleKeyUp)

    return () => { document.removeEventListener('keyup', handleKeyUp) }
  }, [shortUrl])
}

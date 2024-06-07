import { useState } from 'react'

export const useClipboard = () => {
  const [copy, setCopy] = useState(false)

  const copyToClipboard = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl)
    setCopy(true)
  }

  const resetCopy = () => setCopy(false)

  return { copy, copyToClipboard, resetCopy }
}

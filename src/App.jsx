import { useState } from 'react'

import { useGetShortUrl } from './hooks/useGetShortUrl'
import { useClipboard } from './hooks/useClipboard'
import { useResetOnTab } from './hooks/useReset'

import { Footer } from './components/Footer/Footer'
import { InputUrl } from './components/InputUrl/InputUrl'

import './App.css'

function App () {
  const [url, setUrl] = useState('')
  const { shortUrl, resetShortUrl, getNewUrl, loading } = useGetShortUrl(url)
  const { copy, copyToClipboard, resetCopy } = useClipboard()

  const onSubmit = (event) => {
    event.preventDefault()
    getNewUrl()
  }

  const handleChange = (event) => setUrl(event.target.value)

  const reset = () => {
    setUrl('')
    resetCopy()
    resetShortUrl()
  }

  useResetOnTab(shortUrl, reset)

  return (
    <main>
      <h1 className='title'>URL SHORTENER</h1>
      <InputUrl
        onSubmit={onSubmit}
        shortUrl={shortUrl}
        handleChange={handleChange}
        url={url}
        copy={copy}
        copyToClipboard={copyToClipboard}
      />
      <Footer
        shortUrl={shortUrl}
        loading={loading}
      />
    </main>
  )
}

export default App

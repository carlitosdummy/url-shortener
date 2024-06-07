import { useState, useCallback } from 'react'

import { useGetShortUrl } from './hooks/useGetShortUrl'
import { useClipboard } from './hooks/useClipboard'
import { useResetOnTab } from './hooks/useReset'

import { Footer } from './components/Footer'

import './App.css'
import { UrlButtons } from './components/UrlButtons'

function App () {
  const [url, setUrl] = useState('')
  const { shortUrl, setShortUrl, getNewUrl, loading } = useGetShortUrl(url)
  const { copy, copyToClipboard, resetCopy } = useClipboard()

  const onSubmit = (event) => {
    event.preventDefault()
    getNewUrl()
  }

  const handleChange = (event) => setUrl(event.target.value)

  const reset = useCallback(() => {
    setUrl('')
    resetCopy()
    setShortUrl('')
  }, [])

  useResetOnTab(shortUrl, reset)

  return (
    <main>
      <h1 className='title'>URL SHORTENER</h1>
      <section className='url-section'>
        <form
          onSubmit={onSubmit}
          className='url-form'
        >
          <label className='url-label'>
            {
              shortUrl
                ? <span>Shorter URL</span>
                : <span>Enter URL</span>
            }
            <div className='url-input-btn'>
              <input
                onChange={handleChange}
                className='url-input'
                type='text'
                placeholder='https://github.com/carlitosdummy/url-shortener'
                value={shortUrl !== '' ? shortUrl : url}
              />
              {
                shortUrl !== ''
                  ? <UrlButtons copy={copy} copyToClipboard={copyToClipboard} shortUrl={shortUrl} text='Copy URL' />
                  : <UrlButtons copy={false} text='Generate' />
              }

            </div>
          </label>
        </form>
      </section>
      <Footer shortUrl={shortUrl} loading={loading} />
    </main>
  )
}

export default App

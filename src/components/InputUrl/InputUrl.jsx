import { UrlButtons } from '../UrlButtons/UrlButtons'
import './InputUrl.css'

export const InputUrl = ({ onSubmit, shortUrl, handleChange, url, copy, copyToClipboard }) => {
  return (
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
                  ? <UrlButtons
                      copy={copy}
                      copyToClipboard={copyToClipboard}
                      shortUrl={shortUrl}
                      text='Copy URL'
                    />
                  : <UrlButtons
                      copy={false}
                      text='Generate'
                    />
              }

          </div>
        </label>
      </form>
    </section>
  )
}

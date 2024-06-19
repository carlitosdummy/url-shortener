import './UrlButtons.css'

export const UrlButtons = ({ copy, copyToClipboard, shortUrl, text }) => {
  return (
    <button
      onClick={() => copyToClipboard(shortUrl)}
      className='url-btn'
      style={{ background: copy ? 'var(--green)' : 'var(--sec-orange)' }}
    >
      {text}
    </button>
  )
}

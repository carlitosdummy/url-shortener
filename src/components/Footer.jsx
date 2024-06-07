export const Footer = ({ shortUrl, loading }) => (
  shortUrl
    ? <p id='instructions' className='show'>PRESS <span id='key-tap'>TAB</span> TO GENERATE ANOTHER ONE</p>
    : <p id='instructions'>{loading ? 'Loading...' : ' Simple but efficient'}</p>
)

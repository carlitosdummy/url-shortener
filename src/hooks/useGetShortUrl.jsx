import { URL_API } from '../constants/constants'
import { useState } from 'react'

export const useGetShortUrl = (url) => {
  const [shortUrl, setShortUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '1bc28710f8mshad7113ecced1945p1983fajsn4b856971c55b',
      'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
    },
    body: new URLSearchParams({
      url: `${url}`
    })
  }

  const getNewUrl = () => {
    setLoading(true)
    fetch(URL_API, options)
      .then(res => res.json())
      .then(data => {
        setShortUrl(data.result_url)
        setLoading(false)
      })
  }

  return { shortUrl, setShortUrl, getNewUrl, loading }
}

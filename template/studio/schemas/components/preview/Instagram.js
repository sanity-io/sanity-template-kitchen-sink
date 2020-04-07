import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

const IntagramPreview = ({ value }) => {
  if (!value.url) {
    return null
  }
  return <InstagramEmbed url={value.url} />
}

export default IntagramPreview

import React from 'react'
import ReactPlayer from 'react-player'

const EmbedPlayer = ({ value }) => {
  if (!value.url) {
    return null
  }

  return <ReactPlayer url={value.url} controls />
}

export default EmbedPlayer

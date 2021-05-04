import React from 'react'
import { MdVideocam } from 'react-icons/md'
import { MdPhotoCamera } from 'react-icons/md'
import InstagramPreview from '../components/preview/Instagram'
import EmbedPlayer from '../components/preview/EmbedPlayer'
import { Tweet } from 'react-twitter-widgets'

export const instagram = {
  type: 'object',
  name: 'instagram',
  title: 'Instagram Post',
  icon: MdPhotoCamera,
  fields: [
    {
      type: 'url',
      name: 'url',
      description: 'The URL to the post as seen in a desktop browser'
    }
  ],
  preview: {
    select: { url: 'url' },
    component: InstagramPreview
  }
}

export const videoEmbed = {
  type: 'object',
  name: 'videoEmbed',
  title: 'Video Embed',
  icon: MdVideocam,
  fields: [
    {
      type: 'url',
      name: 'url'
    }
  ],
  preview: {
    select: { url: 'url' },
    component: EmbedPlayer
  }
}

export const tweetEmbed = {
  type: 'object',
  name: 'tweetEmbed',
  title: 'Tweet Embed',
  fields: [
    {
      type: 'string',
      name: 'tweetId'
    }
  ],
  preview: {
    select: {
      tweetId: "tweetId"
    },
    component: ({value}) => {
      return <Tweet tweetId={value?.tweetId} />
    }
  }
}

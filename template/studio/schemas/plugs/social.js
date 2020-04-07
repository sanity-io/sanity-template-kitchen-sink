import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const Tweet = ({ value: {url} }) =>  {
  const exp = /\/status\/(\d+)($|[?/])/
  const [, id] = exp.exec(url) || []
  if (id) {
    return <TwitterTweetEmbed className="sliderBoxes" tweetId={id} options={{conversation: 'none', 'hide-thread': true}} />
  }
  return <React.Fragment />
}

export default {
  type: 'object',
  name: 'social',
  title: 'Social',
  description: 'A big social. Centered',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'url',
      type: 'url'
    },
    {
      name: 'service',
      type: 'string',
      options: {
        list: ['twitter']
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'service',
      url: 'url'
    },
    component: Tweet,
   /*  prepare({title, subtitle}) {
      return {
        title: `Social: ${title}`,
        subtitle
      }
    } */
  }
}

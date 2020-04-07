import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const Preview = ({value: {blocks}}) => (<BlockContent blocks={blocks} />)

export default {
  type: 'object',
  name: 'grid',
  title: 'Grid',
  preview: {
    select: {
      blocks: 'subtitle'
    },
    component: Preview
  },
  description: 'A big text. Centered. Keep it short to max 2-3 paragraphs.',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'text'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'simpleBlockContent'
    },
    {
      title: 'Columns',
      name: 'columns',
      type: 'string',
      options: {
        list: [
          {
            title: '1 column',
            value: 'max1'
          },
          {
            title: '2 column',
            value: 'max2'
          },
          {
            title: '3 column',
            value: 'max3'
          }
        ]
      }
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{
        name: 'item',
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'string'
          },
          {
            name: 'content',
            type: 'blockContent'
          }
        ]
      }]
    },
    {
      title: 'Anchor',
      name: 'anchor',
      type: 'string'
    }
  ],
  /* preview: {
    select: {
      title: 'title'
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'Grid'
      }
    }
  } */
}

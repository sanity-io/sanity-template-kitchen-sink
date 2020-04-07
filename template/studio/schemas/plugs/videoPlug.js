import React from 'react'

export default {
  type: 'object',
  name: 'videoPlug',
  title: 'Video plug',
  fieldsets: [
    {
      name: 'settings',
      title: 'Settings',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'posterFrame'
    },
    prepare({title, media}) {
      return {
        title: 'Video Plug',
        media,
        subtitle: title
      }
    }
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'posterFrame',
      type: 'image',
      title: 'Poster frame'
    },
    {
      name: 'muted',
      title: 'Muted',
      description: 'Must be true if autoplay',
      type: 'boolean',
      fieldset: 'settings'
    },
    {
      name: 'controls',
      title: 'Controls',
      description: 'Show controls like play/pause etc',
      type: 'boolean',
      fieldset: 'settings'
    },
    {
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      fieldset: 'settings'
    },
    {
      name: 'preload',
      title: 'Preload',
      type: 'string',
      fieldset: 'settings',
      options: {
        list: ['auto', 'none', 'metadata']
      }
    },
    {
      name: 'autoplay',
      title: 'Auto play',
      type: 'string',
      fieldset: 'settings',
      options: {
        layout: 'radio',
        list: [
          {
            title: 'None',
            value: 'off'
          },
          {
            title: 'Always',
            value: 'on'
          },
          {
            title: 'When in viewport',
            value: 'viewport'
          }
        ]
      }
    },
    {
      name: 'versions',
      title: 'Videos (versions)',
      description: (
        <span>
          Order them by priority.{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats">
            Recomended types
          </a>{' '}
          are Priciwebm and mp4
        </span>
      ),
      type: 'array',
      of: [
        {
          name: 'video',
          title: 'Video',
          type: 'object',
          options: {
            preview: {
              select: {
                file: 'file.asset.originalFilename',
                size: 'file.asset.size',
                media: 'media',
                type: 'type'
              },
              prepare(selection) {
                return {
                  title: selection.file,
                  subtitle: `${Math.round(
                    selection.size / 1024 / 1024
                  )}Mb ${selection.type || ''} ${selection.media || ''}`
                }
              }
            }
          },
          fields: [
            {
              name: 'file',
              title: 'File',
              type: 'file'
            },
            {
              title: 'Type',
              name: 'type',
              type: 'string',
              options: {
                list: ['video/mp4', 'video/webm', 'video/ogg']
              }
            },
            {
              title: 'Media',
              name: 'media',
              type: 'string',
              options: {
                list: ['all and (max-width:768px)', 'all and (min-width:769px)']
              }
            }
          ]
        }
      ]
    }
  ]
}

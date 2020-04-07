export default {
  type: 'object',
  name: 'bigCtaWithIllustration',
  title: 'Big CTA with illustration',
  description:
    'Big call-to-action with headline, subtitle, clickable cta text and illustration',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Subtitle'
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body'
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call-to-action'
    },
    {
      name: 'illustration',
      type: 'illustration'
    },
    {
      name: 'reversed',
      type: 'boolean'
    },
    {
      name: 'featureList',
      type: 'object',
      title: 'Feature list',
      fieldsets: [
        {
          name: 'settings',
          title: 'Settings',
          options: {
            collapsible: true,
            collapsed: true
          }
        },
        {
          name: 'listSettings',
          title: 'List settings',
          options: {
            collapsible: true,
            collapsed: true
          }
        }
      ],
      fields: [
        {
          name: 'label',
          type: 'string',
          fieldset: 'settings'
        },
        {
          name: 'title',
          type: 'string',
          fieldset: 'settings'
        },
        {
          name: 'subtitle',
          type: 'simpleBlockContent',
          fieldset: 'settings'
        },
        {
          title: 'Max columns',
          description: 'Max columns to display. Will shrink on smaller devices',
          name: 'maxColumns',
          type: 'number',
          fieldset: 'listSettings',
          min: 3,
          max: 4
        },
        {
          title: 'List type',
          name: 'listType',
          type: 'string',
          fieldset: 'listSettings',
          options: {
            list: ['checkmark', 'ordered', 'customIcon']
          }
        },
        {
          name: 'features',
          type: 'array',
          of: [
            {
              type: 'feature'
            }
          ]
        },
        {
          name: 'ctas',
          title: 'Call to actions',
          type: 'array',
          of: [
            {
              type: 'cta'
            }
          ]
        }
      ],
      preview: {
        select: {
          label: 'label',
          title: 'title',
          features: 'features'
        },
        prepare({label, title, features}) {
          return {
            title:
              title || label
                ? `Feature list: ${title || label}`
                : 'Untitled feature list',
            subtitle: `Features: ${features.map(f => f.title).join(', ')}±`,
            media: MdList
          }
        }
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'illustration.image'
    },
    prepare: fields => {
      return {
        ...fields,
        title: `Big Cta: ${fields.title}`
      }
    }
  }
}

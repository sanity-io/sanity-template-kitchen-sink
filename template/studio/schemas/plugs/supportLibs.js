export default {
  name: 'supportLibs',
  type: 'object',
  title: 'Support Libraries',
  fields: [
    {
      name: 'title',
      type: 'string'

    },
    {
      name: 'subtitle',
      type: 'simpleBlockContent'

    },

    {
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Support lib',
          type: 'reference',
          to: [{
            type: 'supportLib'
          }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'logo'
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: `Support libs. ${subtitle}`,
        media
      }
    }
  }
}

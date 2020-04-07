export default {
  name: 'plugins',
  type: 'object',
  title: 'Plugins',
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
          title: 'Plugins',
          type: 'reference',
          to: [{
            type: 'plugin'
          }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle, media}) {
      return {
        title: 'Plugins',
        subtitle: title
      }
    }
  }
}

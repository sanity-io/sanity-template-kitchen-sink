export default {
  name: 'productSummary',
  type: 'object',
  title: 'Product Summary (deprecated)',
  fields: [
    {
      name: 'logo',
      type: 'image'
    },
    {
      name: 'title',
      type: 'string'

    },
    {
      name: 'subtitle',
      type: 'string'

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
      of: [{
        type: 'cta'
      }]
    },
    {
      title: 'Anchor',
      name: 'anchor',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'logo',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: `Product summary: ${subtitle}`,
        media
      }
    }
  }
}

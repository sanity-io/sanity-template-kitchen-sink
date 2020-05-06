export default {
  type: 'object',
  name: 'pricing',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'boolean',
      name: 'transparentCTAs',
      title: 'Disable background color'
    }
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return {
        title: `Pricing module: ${title}`
      }
    }
  }
}

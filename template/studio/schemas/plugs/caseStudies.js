export default {
  name: 'caseStudiesPlug',
  type: 'object',
  title: 'Case studies',
  fields: [
    {
      name: 'title',
      type: 'string'

    },
    // {
    //   name: 'subtitle',
    //   type: 'simpleBlockContent'

    // },
    {
      title: 'Case studies',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Case study',
          type: 'reference',
          to: [{
            type: 'caseStudy'
          }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'illustration.image'
    },
    prepare: fields => {
      return {
        ...fields,
        title: 'Case studies',
        subtitle: fields.title
      }
    }
  }
}

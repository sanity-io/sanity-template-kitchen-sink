export default {
  name: 'useCasesAndCaseStudiesPlug',
  type: 'object',
  title: 'Use Cases and Case studies',
  fields: [
    {
      name: 'title',
      type: 'string'

    },
    {
      title: 'Case studies',
      name: 'caseStudies',
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
    },
    {
      title: 'Use Cases',
      name: 'useCases',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'useCase'}]
      }]
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
        title: 'Use Cases and Case Studies',
        subtitle: fields.title
      }
    }
  }
}

export default {
  name: 'exampleFrontends',
  type: 'object',
  title: 'Example Frontends (deprecated)',
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
          title: 'Example frontend',
          type: 'reference',
          to: [{
            type: 'exampleFrontend'
          }]
        }
      ]
    }
  ]
}

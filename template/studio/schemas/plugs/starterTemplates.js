export default {
  title: 'Starter templates',
  name: 'starterTemplates',
  type: 'object',
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
      name: 'templates',
      type: 'array',
      of: [
        {
          title: 'Starter templates',
          type: 'reference',
          to: [
            {
              type: 'starterTemplate'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      templates: 'templates'
    },
    prepare({title, templates}) {
      return {
        title: 'Starter templates',
        subtitle: templates ? `${title} ${templates.length} Templates` : 'No templates'
      }
    }
  }
}

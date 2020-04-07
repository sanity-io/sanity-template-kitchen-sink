export default {
  title: 'Client stories',
  name: 'clientStories',
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
      title: 'Anchor',
      name: 'anchor',
      type: 'string'
    },
    {
      title: 'List of client stories',
      name: 'stories',
      type: 'array',
      of: [
        {
          type: 'clientStory'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({title}) {
      return {
        title: 'Client stories',
        subtitle: title
      }
    }
  }
}
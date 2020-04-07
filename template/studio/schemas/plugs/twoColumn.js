export default {
  type: 'object',
  name: 'twoColumn',
  title: 'Two column',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'simpleBlockContent'
    },
    {
      title: 'First column',
      name: 'firstColumn',
      type: 'blockContent'
    },
    {
      title: 'Second column',
      name: 'secondColumn',
      type: 'blockContent'
    },
    {
      title: 'Anchor',
      name: 'anchor',
      type: 'string'
    }
    
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({title}) {
      return {
        title: 'Two column',
        subtitle: title
      }
    }
  }
}
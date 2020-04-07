export default {
  type: 'object',
  name: 'customPlug',
  title: 'CustomPlug',
  fields: [
    {
      title: 'Identifier',
      description: 'Identifier for the frontend to pick up. Must be one word, lowercase first, no spaces or special characters',
      name: 'name',
      type: 'string'
    },
    {
      title: 'CSS Class',
      name: 'className',
      description: 'If we want to experiment with other layouts for the same plug.  Must be one word, lowercase first, no spaces or special characters',
      type: 'string'
    },
    {
      title: 'Screenshot',
      name: 'screenshot',
      description: 'A screenshot',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare({title}) {
      return {
        title: 'Custom plug',
        subtitle: title
      }
    }
  }
}
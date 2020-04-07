export default {
  type: 'object',
  name: 'bigText',
  title: 'Big text',
  description: 'A big text. Centered. Keep it short to max 2-3 paragraphs.',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({title}) {
      return {
        title: 'Big Text',
        subtitle: title
      }
    }
  }
}
export default {
  type: 'object',
  name: 'installSanity',
  title: 'Install sanity',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Text',
      name: 'code',
      type: 'code'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({title, code}) {
      return {
        title: 'Install sanity',
        subtitle: `${title} | ${code || 'Default code'}`
      }
    }
  }
}
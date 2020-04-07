export default {
  name: 'socialCollection',
  type: 'object',
  title: 'Social collection',
  fields: [
    {
      name: 'items',
      type: 'array',
      validation: Rule => Rule.unique(),
      of: [{type: 'social'}]
    }
  ],
  preview: {
    select: {
      items: 'items'
    },
    prepare: ({items}) => ({
      title: 'Social testimoinal collection',
      subtitle: `${items.length} tweet(s)`
    })
  }
}

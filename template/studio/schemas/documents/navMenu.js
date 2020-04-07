export default {
  type: 'document',
  name: 'navigationMenu',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'cta' }]
    }
  ]
}

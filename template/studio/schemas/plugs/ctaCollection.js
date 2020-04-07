export default {
  type: 'object',
  name: 'ctaCollectionPlug',
  title: 'Call To Action Collection',
  description: 'A plug that shows call to actions',
  fields: [
    {
      title: 'Call to action collection',
      name: 'ctaCollection',
      type: 'ctaCollection'
    }
  ],
  preview: {
    select: {
      ctas: 'ctaCollection'
    },
    prepare({ctas}) {
      return {
        title: 'CTAs',
        subtitle: ctas && ctas.ctas.map(cta => cta.title).join(', ')
      }
    }
  }
}
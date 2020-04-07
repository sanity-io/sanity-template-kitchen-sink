export default {
  type: 'object',
  name: 'pageHeader',
  title: 'Page Header',
  preview: {
    select: {
      title: 'title',
      illustration: 'illustration'
    },
    prepare({ title, illustration }) {
      return {
        title: 'Page header',
        subtitle: title,
        media: illustration.image
      }
    }
  },
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
      title: 'Illustration',
      name: 'illustration',
      type: 'illustration'
    },
    {
      title: 'Image (deprecated)',
      name: 'image',
      type: 'mainImage'
    }
  ]
}

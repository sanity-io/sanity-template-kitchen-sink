export default {
  title: 'Article',
  name: 'generalArticle',
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
      title: 'Content',
      name: 'content',
      type: 'bodyPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: 'Article',
        subtitle: title
      }
    }
  }
}

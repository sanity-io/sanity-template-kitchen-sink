export default {
  type: 'object',
  name: 'form',
  title: 'Form (deprecated)',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'simpleBlockContent'
    },
    {
      title: 'Form type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Developer invite',
            value: 'developerInvite'
          },
          {
            title: 'Contact form',
            value: 'contactForm'
          },
          {
            title: 'Newsletter signup',
            value: 'newsletterForm'
          }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type'
    },
    prepare({title, type}) {
      return {
        title,
        subtitle: `FORM: ${type}`
      }
    }
  }
}
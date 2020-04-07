export default {
    name: 'quote',
    type: 'object',
    title: 'Quote',
    fields: [
        {
            name: 'content',
            type: 'blockContent'
        }
    ],
    preview: {
        select: {
            content: 'content'
        },
        prepare({content}) {
            return {
                title: 'Quote'
            }
        }
    }
}

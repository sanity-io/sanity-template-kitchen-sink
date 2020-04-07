export default {
  type: 'object',
  name: 'experiment',
  fields: [
    {
      name: 'active',
      type: 'boolean',
      title: 'Experiment',
      description: '(De)activate this as a experiment'
    },
    {
      name: 'id',
      type: 'string',
      title: 'Google Experiment ID',
      description:
        'You will have to create an experiment with a correct number of variations on Google Optimize first'
    },
    {
      name: 'variations',
      type: 'array',
      description:
        'These are the different variations (pages) this route will point to in this experiment',
      of: [{ type: 'variation' }],
      validation: Rule =>
        Rule.custom(value => {
          if (!value) {
            return true
          }
          let sum = 0
          value.forEach(variation => {
            sum += variation.percentage
          })

          return sum > 100 ? 'Total percentage cannot exceed 100%' : true
        })
    }
  ]
}

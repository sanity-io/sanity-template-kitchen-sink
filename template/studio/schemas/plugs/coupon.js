import React from 'react'

export default {
  type: 'object',
  name: 'coupon',
  title: 'Coupon',
  description: 'Shows plan available in a coupon or the defaul plans if no coupon is set',
  fields: [
    {
      title: 'title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'coupon',
      name: 'coupon',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      coupon: 'coupon'
    },
    prepare({title, coupon}) {
      return {
        title: `Coupon: ${title}`,
        subtitle: coupon
      }
    }
  }
}
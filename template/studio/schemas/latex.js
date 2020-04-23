import React from 'react'
import LatexRender from './components/preview/Latex'

const Preview = (props) => {
  const { latex } = props.value
  const isInline = props.layout === 'inline'
  return <LatexRender latex={latex} isInline={isInline} />
}

export default {
  type: 'object',
  name: 'math',
  fields: [
    {
      type: 'text',
      name: 'latex',
    },
  ],
  preview: {
    select: {
      latex: 'latex',
    },
    component: Preview,
  },
}

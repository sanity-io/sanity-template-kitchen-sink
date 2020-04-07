import React, { useState, useMemo, useCallback } from 'react'
import KaTeX from 'katex'
import 'katex/dist/katex.min.css?raw'

const LatexRender = ({ isInline = false, latex = '' }) => {
  const [html, setHtml] = useState('')
  const createHtml = () => {
    setHtml(
      KaTeX.renderToString(latex, {
        displayMode: !isInline,
        throwOnError: false
      })
    )
  }

  useMemo(createHtml, [latex, isInline])
  if (isInline) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default LatexRender

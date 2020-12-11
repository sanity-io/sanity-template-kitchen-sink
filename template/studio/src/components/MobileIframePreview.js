/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state */
import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import styles from './IframePreview.module.css'
import SanityMobilePreview from 'sanity-mobile-preview'
import 'sanity-mobile-preview/dist/index.css?raw'

/**
 * Explore more examples of previews:
 * https://www.sanity.io/blog/evolve-authoring-experiences-with-views-and-split-panes
 */

const assemblePostUrl = ({ displayed, options }) => {
  const { slug, publishedAt } = displayed
  const { previewURL } = options
  if (!slug || !previewURL) {
    console.warn('Missing slug or previewURL', { slug, previewURL })
    return ''
  }
  const path = slug.current
  return `${previewURL}/blog/${path}`
}

const MobileIframePreview = props => {
  const { options } = props
  const { displayed } = props.document

  if (!displayed) {
    return (
      <div className={styles.componentWrapper}>
        <p>There is no document to preview</p>
      </div>
    )
  }

  const url = assemblePostUrl({ displayed, options })

  if (!url) {
    return (
      <div className={styles.componentWrapper}>
        <p>Hmm. Having problems constructing the web front-end URL.</p>
      </div>
    )
  }

  return (
    <div className={styles.componentWrapper}>
      <SanityMobilePreview>
        <div className={styles.iframeContainer}>
          <iframe src={url} frameBorder={'0'} />
        </div>
      </SanityMobilePreview>
    </div>
  )
}

MobileIframePreview.propTypes = {
  document: PropTypes.object // eslint-disable-line react/forbid-prop-types
}

MobileIframePreview.defaultProps = {
  document: null
}

export default MobileIframePreview

import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import resolveUrl from '../../resolvePreviewUrl'

const PreviewIFrame = () =>
  S.view
    .component(({document}) => {
      const {displayed} = document
      if (!displayed) {
        return <p>Nothing to display</p>
      }
      const url = resolveUrl(displayed)
      return (
        <iframe
          style={{
            width: '100%',
            height: '100%'
          }}
          frameBorder={'0'}
          src={url}
        />
      )
    })
    .title('Web preview')

export default PreviewIFrame

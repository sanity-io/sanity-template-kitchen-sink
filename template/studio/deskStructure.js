import S from '@sanity/desk-tool/structure-builder'
import { GoHome, GoSettings } from 'react-icons/go'
import blog from './src/structure/blog'
import landingPages from './src/structure/landingPages'
import IframePreview from './src/components/IframePreview'
import MobileIframePreview from './src/components/MobileIframePreview'

const hiddenDocTypes = listItem =>
  !['route', 'navigationMenu', 'post', 'page', 'siteSettings', 'author', 'category'].includes(
    listItem.getId()
  )

const previewURL = 'http://localhost:8000'
export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  const docTypesWithPreview = ['post', 'route']
  if (docTypesWithPreview.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web')
        .options({ previewURL }),
      S.view
        .component(MobileIframePreview)
        .title('Mobile')
        .options({ previewURL })
    ])
  }
}

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site settings')
        .icon(GoSettings)
        .child(
          // getDefaultDocumentNode way of specifying preview split pane won't
          // work here, because we are manually configuring the document node
          // with a predefined documentId
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
          //.views([S.view.form(), PreviewIFrame()])
        ),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(GoHome)
        .child(
          // getDefaultDocumentNode way of specifying preview split pane won't
          // work here, because we are manually configuring the document node
          // with a predefined documentId
          S.document()
            .schemaType('page')
            .documentId('frontpage')
          //.views([S.view.form(), PreviewIFrame()])
        ),
      blog,
      landingPages,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])

import S from '@sanity/desk-tool/structure-builder'
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
  GoPerson as AuthorIcon,
} from 'react-icons/lib/go'

import PreviewIFrame from '../../src/components/previewIFrame'

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
}

const blog = S.listItem()
  .title('Blog')
  .icon(BlogIcon)
  .child(
    S.list()
      .title('/blog')
      .items([
        S.listItem()
          .title('Published posts')
          .schemaType('post')
          .icon(BlogIcon)
          .child(
            S.documentList('post')
              .title('Published posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              .filter('_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('post')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem('post').title('All posts').icon(AllIcon),
        S.divider(),
        S.listItem()
          .title('Authors')
          .icon(AuthorIcon)
          .schemaType('author')
          .child(S.documentTypeList('author').title('Authors')),
        S.listItem()
          .title('Categories')
          .schemaType('category')
          .child(S.documentTypeList('category').title('Categories')),
      ])
  )

export default blog

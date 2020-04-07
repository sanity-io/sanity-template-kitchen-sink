import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
  GoPerson as AuthorIcon
} from 'react-icons/lib/go'

import PreviewIFrame from '../../src/components/previewIFrame'

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon
}

/*
import BlogPostStats from '../components/gaPanes/views/BlogPostStats'
import BlogPostPublishedAndBounces from '../components/gaPanes/views/BlogPostPublishedAndBounces'
*/

// Generate structure from the type options
const editorialStatusList = [
  {
    title: 'Waiting for review',
    value: 'review',
    icon: ReviewIcon
  },
  {
    title: 'Approved for publish',
    value: 'approved',
    icon: ApprovedIcon
  },
  {
    title: 'Rejected',
    value: 'rejected',
    icon: RejectedIcon
  }
]

// editorial.fields.find(({ name }) => name === 'status').options.list || []

const gaPanes = [
  /*
  S.view
    .component(BlogPostStats)
    .title('Users and sources')
    .icon(MdInsertChart),
  S.view
    .component(BlogPostPublishedAndBounces)
    .title('Publish events')
    .icon(MdInsertChart)
    */
]

const blog = S.listItem()
  .title('Blog')
  .icon(BlogIcon)
  .child(
    S.list()
      .title('sanity.io/blog')
      .items([
        /*
        ...editorialStatusList.map(({ title, value, icon }) =>
          S.listItem()
            .title(title)
            .icon(icon)
            .child(
              S.documentList()
                .title(title)
                .filter('editorialStatus.current == $status')
                .params({ status: value })
            )
        ),
        S.divider(),
        */
        S.listItem()
          .title('Published posts')
          .schemaType('post')
          .icon(BlogIcon)
          .child(
            S.documentList('post')
              .title('Published posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              .filter('_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('post')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem('post')
          .title('All posts')
          .icon(AllIcon),
        /*
        S.listItem()
          .title('Scheduled posts')
          .schemaType('post')
          .child(
            S.documentList('post')
              .title('Scheduled posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              .filter('_type == "post" && publishedAt > now()')
          ),
        S.listItem()
          .title('Unpublished posts')
          .schemaType('post')
          .child(
            S.documentList('post')
              .title('Unpublished posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              .filter('_type == "post" && !(defined(publishedAt))')
          )
          */
        S.divider(),
        S.listItem()
          .title('Authors')
          .icon(AuthorIcon)
          .schemaType('author')
          .child(S.documentTypeList('author').title('Authors')),
        S.listItem()
          .title('Categories')
          .schemaType('category')
          .child(S.documentTypeList('category').title('Categories'))
      ])
  )

export default blog

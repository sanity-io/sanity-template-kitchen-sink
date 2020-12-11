import S from '@sanity/desk-tool/structure-builder'
import { MdMenu } from "react-icons/md"
import { GoBrowser as PageIcon } from "react-icons/go"

export default S.listItem()
  .title('Page Builder')
  .child(
    S.list()
      .title('Landing Pages')
      .items([
        S.listItem()
          .title('Navigation Menus')
          .icon(MdMenu)
          .schemaType('navigationMenu')
          .child(S.documentTypeList('navigationMenu').title('Navigation Menus')),
        S.listItem()
          .title('Routes')
          .schemaType('route')
          .child(S.documentTypeList('route').title('Routes')),
        S.listItem()
          .title('Pages')
          .icon(PageIcon)
          .schemaType('page')
          .child(
            S.documentList('page')
              .title('Pages')
              .menuItems(S.documentTypeList('page').getMenuItems())
              .filter('_type == "page" && _id != "frontpage"')
          )
      ])
  )

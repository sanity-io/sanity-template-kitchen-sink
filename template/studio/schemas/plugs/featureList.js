import {MdList} from "react-icons/md"

export default {
  name: 'featureList',
  type: 'object',
  title: 'Feature list',
  fieldsets: [
    {
      name: 'settings',
      title: 'Settings',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'listSettings',
      title: 'List settings',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'label',
      type: 'string',
      fieldset: 'settings'
    },
    {
      name: 'title',
      type: 'string',
      fieldset: 'settings'
    },
    {
      name: 'subtitle',
      type: 'simpleBlockContent',
      fieldset: 'settings'
    },
    {
      title: 'Max columns',
      description: 'Max columns to display. Will shrink on smaller devices',
      name: 'maxColumns',
      type: 'number',
      fieldset: 'listSettings',
      min: 3,
      max: 4,
    },
    {
      title: 'List type',
      name: 'listType',
      type: 'string',
      fieldset: 'listSettings',
      options: {
        list: ['checkmark', 'ordered', 'customIcon']
      }
      
    },
    {
      name: 'features',
      type: 'array',
      of: [
        {
          type: 'feature'
        }
      ]
    },
    {
      name: 'ctas',
      title: 'Call to actions',
      type: 'array',
      of: [{
        type: 'cta'
      }]
    }
  ],
  preview: {
    select: {
      label: 'label',
      title: 'title',
      features: 'features'
    },
    prepare({label, title, features}) {
      return {
        title: title || label ? `Feature list: ${title || label}` : 'Untitled feature list',
        subtitle: `Features: ${features.map(f => f.title).join(', ')}±`,
        media: MdList
      }
    }
  }
}

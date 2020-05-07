import client from 'part:@sanity/base/client'
import { MdLink } from 'react-icons/lib/md'

function myAsyncSlugifier(input) {
  const query = '*[_id == $id][0]'
  const params = {id: input._ref}
  return client.fetch(query, params).then(doc => {
    return doc.title.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
  })
}

export default {
  name: 'route',
  type: 'document',
  title: 'Landing page routes',
  icon: MdLink,
  initialValue: {
    useSiteTitle: false,
  },
  fieldsets: [
    {
      title: 'Visibility',
      name: 'visibility',
    },
  ],
  fields: [
    {
      name: 'page',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      description: 'The page you want to appear at this path. Remember it needs to be published.',
      to: [
        {
          type: 'page',
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      description: 'This is the website path the page will accessible on',
      title: 'Path',
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (slug && slug.current && slug.current === '/') {
            return 'Cannot be /'
          }
          return true
        }),
      options: {
        source: 'page',
        // Read more: https://www.sanity.io/docs/slug-type
        slugify: myAsyncSlugifier
      }
    },
    {
      title: 'Use site title?',
      description:
        'Use the site settings title as page title instead of the title on the referenced page',
      name: 'useSiteTitle',
      type: 'boolean',
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'These values populate meta tags',
      type: 'openGraph',
    },
    {
      title: 'Include in sitemap',
      description: 'For search engines. Will be generateed to /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean',
      fieldset: 'visibility'
    },
    {
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines like google',
      name: 'disallowRobots',
      type: 'boolean',
      fieldset: 'visibility'
    },
    /*
    // This can be used by a server-side rendered website. We plan to figure out proper JAMstack support
    {
      name: 'queries',
      type: 'array',
      description: 'Used to return personalized content based on paid search terms and remarketing',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    }, */
    {
      name: 'campaign',
      type: 'string',
      title: 'Campaign',
      description: 'UTM for campaings'
    },
    /*
    // This can be used by a server-side rendered website. We plan to figure out proper JAMstack support
    {
      name: 'experiment',
      type: 'experiment',
      description: 'Use this to A/B/n test this route towards different pages',
    }, */
  ],
  preview: {
    select: {
      title: 'slug.current',
      subtitle: 'page.title',
    },
    prepare({ title, subtitle }) {
      return {
        title: ['/', title].join(''),
        subtitle,
      }
    },
  },
}

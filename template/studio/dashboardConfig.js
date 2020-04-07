export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '<#<deployments.studio.providerInfo.buildHookId>#>',
                  title: 'Sanity Studio',
                  name: '<#<deployments.studio.providerInfo.siteName>#>',
                  apiId: '<#<deployments.studio.providerInfo.siteId>#>'
                },
                {
                  buildHookId: '<#<deployments.web.providerInfo.buildHookId>#>',
                  title: 'Blog Website',
                  name: '<#<deployments.web.providerInfo.siteName>#>',
                  apiId: '<#<deployments.web.providerInfo.siteId>#>'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/<#<repository.owner>#>/<#<repository.name>#>',
            category: 'Code'
          },
          {title: 'Frontend', value: '<#<deployments.web.url>#>', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

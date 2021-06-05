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
                  buildHookId: '60bad0ccfde2ef7ec05fba8b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-54r3o735',
                  apiId: '6d54aa38-9231-4d87-b3e4-d71bdbf1ead6'
                },
                {
                  buildHookId: '60bad0cc0bf7325b075fc9c3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3r8hjhew',
                  apiId: '09a97388-ca14-4764-b755-6bd5a5a7ee89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paquitoma/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3r8hjhew.netlify.app', category: 'apps'}
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

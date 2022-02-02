export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '61fa797fbaca01096915568e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-rx81oh19',
                  apiId: '744b5ce4-ba4d-441b-b750-4c4c824fd26b'
                },
                {
                  buildHookId: '61fa798004f3830f1530268b',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-6962h9je',
                  apiId: '2eaf5102-b6b8-4a65-b5c6-010b4d441f8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/seanconned/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-6962h9je.netlify.app', category: 'apps'}
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

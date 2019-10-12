module.exports = {
    title: 'Hewie Blog',
    description: '计算机校招面试知识梳理',
    locales: {
      '/': {
        lang: 'zh-CN', 
      }
    },
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base: '/MyVueBolg/',
    themeConfig: {
      lastUpdated: 'Last Updated', 
      repo: 'Hewie8023/MyVueBolg',
      editLinks: true,
      editLinkText: '帮助我们改善此页面！',
      docsDir: 'docs',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' },
            { text: 'Group1', items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' },
            ] }
          ]
        }
      ],
      sidebar: [
          '/',
          '/network/',
          ['/about/', '关于']
        ]
    }
  }
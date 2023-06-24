import Layout from '@/layouts/allPages.vue'

const news = [
  {
    path: '/',
    name: 'allPagesLayout',
    component: Layout,
    children: [
      {
        path: 'news',
        name: 'news',
        component: () => import('@/pages/news/index.vue')
      },
      {
        path: 'news/:slug',
        name: 'news-slug',
        component: () => import('@/pages/news/_slug.vue')
      },
      // {
      //   fullPath: '/news#learn-more',
      //   path: 'news',
      //   hash: '#learn-more',
      //   name: 'news-hashtag',
      //   component: () => import('@/pages/news/_hashtag.vue')
      // }
    ]
  }
]

export default news

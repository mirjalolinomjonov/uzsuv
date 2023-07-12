import Layout from '@/layouts/allPages.vue'

const news = [
  {
    path: '/',
    name: 'newsParent',
    component: Layout,
    children: [
      {
        path: '/news',
        name: 'news',
        component: () => import('@/pages/news/index.vue')
      },
      {
        path: '/news/:slug',
        name: 'news-slug',
        component: () => import('@/pages/news/_slug.vue')
      }
      // {
      //   fullPath: '/news',
      //   path: 'news',
      //   name: 'news-hashtag',
      //   query: { hashtag: 'uzsuv' },
      //   component: () => import('@/pages/news/_hashtag.vue')
      // }
    ]
  }
]

export default news

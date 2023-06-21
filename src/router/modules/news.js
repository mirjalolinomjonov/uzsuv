const news = [
  {
    path: '/news',
    name: 'news',
    component: () => import('@/pages/news/index.vue')
  },
  {
    path: '/news/:slug',
    name: 'news-slug',
    component: () => import('@/pages/news/_slug.vue')
  },
  {
    path: '/news/:hashtag',
    name: 'news-hashtag',
    component: () => import('@/pages/news/_hashtag.vue')
  }
]

export default news
import Layout from '@/layouts/allPages.vue'

const polls = [
  {
    path: '/',
    name: 'pollsParent',
    component: Layout,
    children: [
      {
        path: '/polls',
        name: 'polls',
        component: () => import('@/pages/polls/index.vue')
      },
      {
        path: '/polls/:slug',
        name: 'pollsSlug',
        component: () => import('@/pages/polls/_slug.vue')
      },
    ]
  }
]

export default polls
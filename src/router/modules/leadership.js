import Layout from '@/layouts/allPages.vue'

const leadership = [
  {
    path: '/',
    name: 'leadershipParent',
    component: Layout,
    children: [
      {
        path: '/leadership',
        name: 'leadership',
        component: () => import('@/pages/leadership/index.vue')
      }
    ]
  }
]

export default leadership
import Layout from '@/layouts/allPages.vue'

const reester = [
  {
    path: '/',
    name: 'reesterParent',
    component: Layout,
    children: [
      {
        path: '/reester',
        name: 'reester',
        component: () => import('@/pages/reester/index.vue')
      }
    ]
  }
]

export default reester
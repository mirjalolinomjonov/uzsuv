import Layout from '@/layouts/allPages.vue'

const shareholders = [
  {
    path: '/',
    name: 'shareholdersParent',
    component: Layout,
    children: [
      {
        path: '/shareholders',
        name: 'shareholders',
        component: () => import('@/pages/shareholders/index.vue')
      }
    ]
  }
]

export default shareholders
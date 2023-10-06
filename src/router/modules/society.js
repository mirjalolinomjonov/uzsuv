import Layout from '@/layouts/allPages.vue'

const society = [
  {
    path: '/',
    name: 'societyParent',
    component: Layout,
    children: [
      {
        path: '/society',
        name: 'society',
        component: () => import('@/pages/society/index.vue')
      }
    ]
  }
]

export default society
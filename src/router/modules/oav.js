import Layout from '@/layouts/allPages.vue'

const oav = [
  {
    path: '/',
    name: 'oavParent',
    component: Layout,
    children: [
      {
        path: '/oav',
        name: 'oav',
        component: () => import('@/pages/oav/index.vue')
      }
    ]
  }
]

export default oav
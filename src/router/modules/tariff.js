import Layout from '@/layouts/allPages.vue'

const tariff = [
  {
    path: '/',
    name: 'tariffParent',
    component: Layout,
    children: [
      {
        path: '/tariff',
        name: 'tariff',
        component: () => import('@/pages/tariff/index.vue')
      }
    ]
  }
]

export default tariff
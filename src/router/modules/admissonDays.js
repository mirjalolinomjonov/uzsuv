import Layout from '@/layouts/allPages.vue'

const admissonDays = [
  {
    path: '/',
    name: 'admissonDaysParent',
    component: Layout,
    children: [
      {
        path: '/admisson-days',
        name: 'admissonDays',
        component: () => import('@/pages/admissonDays/index.vue')
      }
    ]
  }
]

export default admissonDays
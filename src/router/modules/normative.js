import Layout from '@/layouts/allPages.vue'

const normative = [
  {
    path: '/',
    name: 'normativeParent',
    component: Layout,
    children: [
      {
        path: '/normative',
        name: 'normative',
        component: () => import('@/pages/normative/index.vue')
      }
    ]
  }
]

export default normative
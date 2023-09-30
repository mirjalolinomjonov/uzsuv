import Layout from '@/layouts/allPages.vue'

const faq = [
  {
    path: '/',
    name: 'faqParent',
    component: Layout,
    children: [
      {
        path: '/faq',
        name: 'faq',
        component: () => import('@/pages/faq/index.vue')
      }
    ]
  }
]

export default faq
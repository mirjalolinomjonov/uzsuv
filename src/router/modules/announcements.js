import Layout from '@/layouts/allPages.vue'

const announcements = [
  {
    path: '/',
    name: 'allPagesLayout',
    component: Layout,
    children: [
      {
        path: 'announcements',
        name: 'announcements',
        component: () => import('@/pages/announcements/index.vue')
      }
    ]
  }
]

export default announcements

import Layout from '@/layouts/allPages.vue'

const announcements = [
  {
    path: '',
    // name: 'allPages',
    component: Layout,
    children: [
      {
        path: '/announcements',
        name: 'announcements',
        component: () => import('@/pages/announcements/index.vue')
      }
    ]
  }
]

export default announcements
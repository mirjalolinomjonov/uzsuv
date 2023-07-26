import Layout from '@/layouts/allPages.vue'

const announcements = [
  {
    path: '/',
    name: 'announcementsParent',
    component: Layout,
    children: [
      {
        path: '/announcements',
        name: 'announcements',
        component: () => import('@/pages/announcements/index.vue')
      },
      {
        path: '/announcements/:slug',
        name: 'announcementSlug',
        component: () => import('@/pages/announcements/_slug.vue')
      },
    ]
  }
]

export default announcements
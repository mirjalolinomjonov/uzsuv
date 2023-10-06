import Layout from '@/layouts/allPages.vue'

const maps = [
  {
    path: '/',
    name: 'mapsParent',
    component: Layout,
    children: [
      {
        path: '/maps',
        name: 'maps',
        component: () => import('@/pages/mapOfRegions.vue')
      }
    ]
  }
]

export default maps

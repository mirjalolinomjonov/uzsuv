import Layout from '@/layouts/allPages.vue'

const photoGallery = [
  {
    path: '',
    // name: 'allPagesLayout',
    component: Layout,
    children: [
      {
        path: '/photo-gallery',
        name: 'photoGallery',
        component: () => import('@/pages/photoGallery/index.vue')
      }
    ]
  }
]

export default photoGallery
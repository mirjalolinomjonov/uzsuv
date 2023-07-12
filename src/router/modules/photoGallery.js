import Layout from '@/layouts/allPages.vue'

const photoGallery = [
  {
    path: '/',
    name: 'photoGalleryParent',
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
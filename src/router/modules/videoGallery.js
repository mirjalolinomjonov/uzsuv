import Layout from '@/layouts/allPages.vue'

const photoGallery = [
  {
    path: '/',
    name: 'videoGalleryParent',
    component: Layout,
    children: [
      {
        path: '/video-gallery',
        name: 'videoGallery',
        component: () => import('@/pages/videoGallery/index.vue')
      }
    ]
  }
]

export default photoGallery
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
      },
      {
        path: '/photo-gallery/:slug',
        name: 'photoGallerySlug',
        component: () => import('@/pages/photoGallery/_slug.vue')
      },
    ]
  }
]

export default photoGallery
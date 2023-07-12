import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    meta: { title: 'Not found page' },
    component: () => import('@/layouts/error.vue'),
  }
]

/*
    Load all routes from modules folder
*/
const modules = import.meta.glob('./modules/*.js',{ eager: true })
for (const [path, moduleImport] of Object.entries(modules)) {
  const route = moduleImport.default
  for (let i = 0; i < route.length; i++) {
    if (route[i] && route[i].name) {
      console.log(route[i].name);
      routes.push(route[i])
    } else {
      console.log('oops', route[i])
    }
  }
}

console.log('routes done', routes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes]
})
router.mode = 'html5'
export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

/*
    Load all routes from modules folder
*/
const modules = import.meta.glob('./modules/*.js', { eager: true })
console.log('modules', modules)

for (const [path, moduleImport] of Object.entries(modules)) {
  console.log('path', path)
  console.log('moduleImport', moduleImport.default)
  // const module = await moduleImport();
  const route = moduleImport.default
  for (let i = 0; i < route.length; i++) {
    if (route[i] && route[i].path) {
      routes.push(route[i])
    } else {
      console.log('oops', route[i])
    }
  }
}

/*

for (const path in modules) {
  console.log('path',path);
  
  if (Object.prototype.hasOwnProperty.call(modules, path)) {
    console.log('modules[path]',modules[path]);
    modules[path]().then((module) => {
      console.log('module',module);
      console.log('module.default',module.default);
      routes.push(module.default)
    })
  }
}

*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes]
})
// router.mode = 'html5'
export default router

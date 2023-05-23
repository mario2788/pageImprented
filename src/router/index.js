import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../views/PageHome.vue'

const router = createRouter({
     
     history: createWebHistory(import.meta.env.BASE_URL),

     routes: [
          {
               path: '/',
               name: 'home',
               component: PageHome
               // component: () => import('../views/HomeView.vue')
          },
          // {
          //      path: '/about',
          //      name: 'about',
          //      // route level code-splitting
          //      // this generates a separate chunk (About.[hash].js) for this route
          //      // which is lazy-loaded when the route is visited.
          //      component: () => import('../views/HomeView.vue')
          // }
     ]
})

export default router
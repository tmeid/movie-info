import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import MovieDetail from '../components/MovieDetail.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie/:id',
      name: 'detail',
      component: MovieDetail,
      props: true
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})

export default router

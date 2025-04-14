import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '@/views/ServiceView.vue'
import AboutView from '@/views/AboutView.vue'
import ServiceDetails from '@/views/ServiceDetails.vue'
import FAQ from '@/views/FAQ.vue'
import BlogView from '@/views/BlogView.vue'
import PostDetails from '@/views/PostDetails.vue'
import StoreView from '@/views/StoreView.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import CartView from '@/views/CartView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceView,
    },
    {
      path: '/services/:id',
      name: 'serviceDetails',
      component: ServiceDetails,
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView,
    },
    {
      path: '/store/:id',
      name: 'ProductDetails',
      component: ProductDetails,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:id',
      name: 'postDetails',
      component: PostDetails,
    },
    {
      path: '/questions',
      name: 'questions',
      component: FAQ,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
  scrollBehavior() {
    // Scroll to top on each route change
    return { top: 0 }
  },
})

export default router

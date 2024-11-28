import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import RServices from './pages/RServices.vue'
import CServices from './pages/CServices.vue'
import WServices from './pages/WServices.vue'
import Services from './pages/Services.vue'
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import Contact from './pages/Contact.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/realty', component: RServices },
  { path: '/corporate', component: CServices },
  { path: '/wills', component: WServices },
  { path: '/services', component: Services },
  { path: '/blog', component: Blog },
  { path: '/blog/:id', component: BlogPost, props: true },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
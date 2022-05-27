import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首頁',
      description: '汽車項目查詢'
    }
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
    meta: {
      title: '產品內容',
      description: '汽車產品表'
    }
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUs,
    meta: {
      title: '關於我們',
      description: '細項'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

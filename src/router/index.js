import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index/Home.vue'

Vue.use(VueRouter)

//각각의 라우터에 다시 childeren 라우터를 만들어 중첩 라우팅을 한다

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/',
    name: 'category',
    component: () => import(/* webpackChunkName: "about" */ '../views/category/Category-list.vue')
   },
  {
    path: '/item/',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/item/Detail.vue')
  },
  {
    path: '/chain/',
    name: 'chain',
    component: () => import(/* webpackChunkName: "about" */ '../views/chain/Srch_chain_list.vue')
  },   
  {
    path: '/mypage/',
    name: 'mypage',
    component: () => import(/* webpackChunkName: "about" */ '../views/mypage/Mypage.vue')
  },
  {
    path: '/cart/',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cart/Cart.vue')
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

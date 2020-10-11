import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index/Home.vue'
import category from '../views/category/Category-list.vue'
import detail from '../views/item/Detail.vue'
import chain from '../views/chain/Srch_chain_list.vue'
import mypage from '../views/mypage/Mypage.vue'
import cart from '../views/cart/Cart.vue'

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
    component: category
   },
  {
    path: '/item/',
    name: 'detail',
    component: detail
  },
  {
    path: '/chain/',
    name: 'chain',
    component: chain
  },   
  {
    path: '/mypage/',
    name: 'mypage',
    component: mypage
  },
  {
    path: '/cart/',
    name: 'cart',
    component: cart
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

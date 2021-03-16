import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login.vue'
import Blogs from '@/view/Blogs.vue'
import BlogDetail from '@/view/BlogDetail.vue'
import BlogEdit from '@/view/BlogEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: {name: 'Blogs'}
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blog/add',
      name: 'BlogAdd',
      meta: {
        requireAuth: true
      },
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/blog/:blogId/edit',
      name: 'BlogEdit',
      meta: {
        requireAuth: true
      },
      component: BlogEdit
    }
  ]
})

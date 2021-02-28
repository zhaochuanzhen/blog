import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import BlogDetail from '../components/BlogDetail.vue'
import Index from '../components/Index.vue'
import WriteBlog from '../components/WriteBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/blogDetail',
        name: 'BlogDetail',
        component: BlogDetail
      }, {
        path: '/index',
        name: 'Index',
        component: Index
      }
    ]
  }, {
    path: '/writeBlog',
    name: 'WriteBlog',
    component: WriteBlog
  }
]

const router = new VueRouter({
  routes
})

export default router

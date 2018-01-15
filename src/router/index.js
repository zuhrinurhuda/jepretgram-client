import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import TimelineSection from '@/components/TimelineSection'
import ProfileSection from '@/components/ProfileSection'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      component: IndexPage,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          name: 'Timeline',
          component: TimelineSection
        },
        {
          path: '/profile',
          name: 'Profile',
          component: ProfileSection
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = localStorage.getItem('accesstoken')
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (!requiresAuth && currentUser) {
    next('/')
  } else {
    next()
  }
})

export default router

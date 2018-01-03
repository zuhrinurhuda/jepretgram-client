import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import TimelineSection from '@/components/TimelineSection'
import ProfileSection from '@/components/ProfileSection'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
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

import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import MainComponent from '@/components/MainComponent'
import TimelineSection from '@/components/TimelineSection'
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
          component: MainComponent,
          children: [
            {
              path: '',
              name: 'Timeline',
              component: TimelineSection
            }
          ]
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

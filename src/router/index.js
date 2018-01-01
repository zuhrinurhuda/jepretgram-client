import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import MainComponent from '@/components/MainComponent'
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
          name: 'Home',
          component: MainComponent
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

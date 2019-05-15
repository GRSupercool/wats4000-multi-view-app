import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Survey from '@/views/Survey'
// TODO: Import the Survey component
// TODO: Import the Secret component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/survey',
      name: '/survey',
      component: Survey
    }
  
    // Add the Survey route definition
    // Add the Secret route definition
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NewComponent from '@/views/NewComponent'
// TODO: Import the Survey component
// TODO: Import the Secret component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/newcomponent',
      name: '/newcomponent',
      component: NewComponent
    }
  
    // Add the Survey route definition
    // Add the Secret route definition
  ]
})

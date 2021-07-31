import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/views/Home.vue'
import Contact from '@/components/views/Contact.vue'
import Menu from '@/components/views/Menu.vue'
import About from '@/components/views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

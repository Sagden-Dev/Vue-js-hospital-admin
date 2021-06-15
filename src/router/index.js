import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patient',
    name: 'Patient',
    component: () => import('../views/Patient.vue')
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: () => import('../views/Doctor.vue')
  },
  {
    path:'/doctor/:id',
    name:'info',
    component: ()=> import('../views/new/Info.vue')
  },
  {
    path:'/patient/:id',
    name:'infoP',
    component: ()=> import('../views/new/infoP.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

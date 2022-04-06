import { createRouter, createWebHistory } from 'vue-router'
import AddStudent from '@/components/AddStudent.vue'
import EditStudent from '@/components/EditStudent.vue'
import Students from '@/components/StudentList.vue'
const routes = [
  {
    path: '/',
    name: 'AddStudent',
    component: AddStudent
  },
  {
    path: '/add-student',
    name: 'add-student',
    component: AddStudent
  },
  {
    path: '/edit-students/:id',
    name: 'edit-student',
    component: EditStudent
  },
  {
    path: '/students',
    name: 'students',
    component:Students
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import layout from '../layout/index.vue'

const routes = [
  {
    path: "/",
    component: layout,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import('../views/Home.vue'),
        meta: { index: 1 }
      },
      {
        path: "archive",
        name: "archive",
        component: () => import('../views/Archive/index.vue'),
        meta: { index: 2 },
        children: [
          {
            path: "",
            name: "ArchiveTime",
            component: () => import('../views/Archive/Time.vue'),
          },
          {
            path: "list",
            name: "ArchiveClass",
            component: () => import('../views/Archive/ArchiveList.vue'),
          },
          {
            path: "details",
            name: "ArchiveDetails",
            component: () => import('../views/Archive/ArchiveDetails.vue'),
          },
        ]
      },
      {
        path: "AboutMe",
        name: "AboutMe",
        component: () => import('../views/AboutMe.vue'),
        meta: { index: 1 }
      }
    ]
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import('../views/Calendar.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

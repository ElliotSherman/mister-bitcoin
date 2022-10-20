import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ContactsView from "../views/ContactsView.vue"
import ContactDetailsView from "../views/ContactDetailsView.vue"
import ContactEditView from "../views/ContactEditView.vue"
const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // name: "home",
      path: "/",
      component: HomeView,
    },
    {
      // name: "home",
      path: "/contact",
      component: ContactsView,
    },
    {
      path: "/contact/:_id",
      component: ContactDetailsView,
    },
    {
      path: "/contact/edit/:_id",
      component: ContactEditView,
    },
    {
      // name: "about",
      path: "/about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
}

const router = createRouter(routerOptions)

export default router

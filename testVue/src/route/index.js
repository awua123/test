import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../home")
const hello = () => import("../hello")

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/hello",
    name: "hello",
    component: hello
  }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })
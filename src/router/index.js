import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "../views/IndexView";

export const routes = [
  {
    path: "/",
    name: "Index",
    component: IndexView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

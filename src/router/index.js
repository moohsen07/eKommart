import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductPage from "../views/ProductPage.vue";
import SearchPage from "../views/SearchPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/product/:id",
    name: "product-page",
    component: ProductPage,
    props: true
  },
  {
    path: "/search/:search",
    name: "search-page",
    component: SearchPage,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;

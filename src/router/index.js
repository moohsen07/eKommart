import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductPage from "../views/ProductPage.vue";
import SearchPage from "../views/SearchPage.vue";
import CategoryPage from "../views/CategoryPage.vue";
import Account from "../views/Account/index.vue";
import Login from "../views/Account/Login.vue";
import Register from "../views/Account/Register.vue";
import ForgetPassword from "../views/Account/ForgetPassword.vue";
import Profile from "../views/Account/Profile.vue";
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
    path: "/search/",
    name: "search-page",
    component: SearchPage,
    props: true
  },
  {
    path: "/category/:id",
    name: "category-page",
    component: CategoryPage,
    props: true
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    beforeEnter: (to, from, next) => {
      // redirect to login page
      to.name === "account" ? next({ name: "login" }) : next();
    },
    children: [
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "register",
        name: "register",
        component: Register
      },
      {
        path: "forget-password",
        name: "forget-password",
        component: ForgetPassword
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      }
    ]
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

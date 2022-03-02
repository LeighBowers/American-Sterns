// imports 
import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Products from "../views/Products.vue";
import Cart from "../views/Cart.vue";
import Profile from "../views/Profile.vue"



// lazy-loaded --only load when needed 

const routes = [
  {
    path: "/cart",
    component: Cart,
    name: "Cart"
  },
  {

    path: "/home",
    component: Home,
    name: "home"
  },
  {
    path: "/login",
    component: Login,
    name: "Login"
  },
  {
    path: "/register",
    component: Register,
    name: "Register"
  },
  {
    path: "/products",
    component: Products,
    name: "Products",

  },
  {
    path: "/profile",
    component: Profile,
    name: "Profile",

  }


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/home"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;


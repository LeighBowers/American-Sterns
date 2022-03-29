// imports 
import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Products from "../views/Products.vue";
import Cart from "../views/Cart.vue";
import Profile from "../views/Profile.vue"

// const Profile = () => import("../components/Profile.vue")

// lazy-loaded --only load when needed 

const routes = [
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {

    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,

  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,

  }


];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const publicPages = ['/','/register','/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});


export default router;


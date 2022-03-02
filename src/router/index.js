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
<<<<<<< HEAD
// router.beforeEach((to,from,next) => {
//   const publicPages = ["/home","/login","/register"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");
=======
router.beforeEach((to,from,next) => {
  const publicPages = ["/login","/register","/home"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
>>>>>>> 8d14d78aff23e947c0ffdf23e53f5b614bad8ddd

//   if (authRequired && !loggedIn) {
//     next("/login");
//   }else {
//     next();
//   }
// });

export default router;


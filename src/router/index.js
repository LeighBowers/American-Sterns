// imports 
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Products from "@/views/Products.vue";
import Register from "@/views/Register.vue";




// lazy-loaded --only load when needed 
// const Profile = () => import("@/views/Profile.vue")
// const BoardAdmin = () => import("@/components/BoardAdmin.vue")
// const BoardModerator = () => import("@/components/BoardModerator.vue")
// const BoardUser = () => import("@/components/BoardUser.vue")
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
    name: "home"
  },
  {
    path: "/login",
    component: Login,
    name: "login"
  },
  {
    path: "/register",
    component: Register,
    name: "register"
  },
  {
    path: "/products",
    component: Products,
    name: "products"
  },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   // lazy-loaded
  //   component: Profile,
  // },

  // {
  //   path: "/user",
  //   name: "user",
  //   // lazy-loaded
  //   component: BoardUser,
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// before security allow user to ...// to-acess the / array
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home', 'product'];

  // if its true have any of the array in then complete process
  const authRequired = !publicPages.includes(to.path);
  // stores token is user login
  const loggedIn = localStorage.getItem('');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;

<template>
  <div id="app">
    <nav class="navbar navbar-expand mt-3 navbar-dark bg-dark">
      ..................
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >American Stern</router-link
      >..................
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link :to="{ name: 'admin' }" class="nav-link"
            >Admin Board</router-link
          >
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link :to="{ name: 'mod' }" class="nav-link"
            >Moderator Board</router-link
          >
        </li> -->
        <li class="nav-item">
          <router-link
            v-if="currentUser"
            :to="{ name: 'user' }"
            class="nav-link"
            >User</router-link
          >
        </li>
        <div v-if="!currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" /> Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'register' }" class="nav-link">
              <font-awesome-icon icon="user-plus" /> Register
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'products' }" class="nav-link">
              <font-awesome-icon icon="user-plus" /> Products
            </router-link>
          </li>
        </div>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'user' }" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav>
  </div>
</template>
<script>
// export default {
//   computed: {
//     currentUser() {
//       return this.$store.state.auth.user;
//     },
//     showAdminBoard() {
//       if (this.currentUser && this.currentUser["roles"]) {
//         return this.currentUser["roles"].includes("ROLE_ADMIN");
//       }
//       return false;
//     },
//     showModeratorBoard() {
//       if (this.currentUser && this.currentUser["roles"]) {
//         return this.currentUser["roles"].includes("ROLE_MODERATOR");
//       }
//       return false;
//     },
//   },
//   methods: {
//     logOut() {
//       this.$store.dispatch("auth/logout");
//       this.$router.push({ name: "login" });
//     },
//   },
// };
</script>
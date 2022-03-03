<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">American Sterns</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span></button
      ><br />
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <li>
          <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li>
          <router-link to="/login" class=" nav-link">Login</router-link>
          </li>
          <li>
          <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li>
          <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li>
          <router-link to="/cart" class="nav-link">Cart</router-link>
          </li>
          <li>
          <router-link to="/profile" class="nav-link">Profile</router-link>
          </li>
          <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: rgb(180, 101, 144);
  border-radius: 0.5rem;
}
</style>

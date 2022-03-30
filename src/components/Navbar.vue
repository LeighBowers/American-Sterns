<template>
  <div class="nav-container">
   <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
</svg>
    <nav class="nav">
        
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
      <li><button class="btn" v-if="currentUser" @click="logOut">Logout</button></li>
    </nav>
  </div>
  <div class="menu-container">
    <button class="menu" type="button">
      <div class="bar"></div>
    </button>
  </div>
  <div class="mobile-nav">
    <nav class="m-nav">
        <li><router-link class="mobile" to="/">Home</router-link></li>
      <li><router-link class="mobile" to="/login">Login</router-link></li>
      <li><router-link class="mobile" to="/register">Register</router-link></li>
      <li><router-link class="mobile" to="/products">Porducts</router-link></li>
      <li><router-link class="mobile" to="/profile">Profile</router-link></li>
      <li><router-link class="mobile" to="/cart">Cart</router-link></li>
    </nav>
  </div>
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
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

*{
font-family: 'Roboto', sans-serif;
margin:0; padding:0;
box-sizing: border-box;
outline: none; border:none;
text-decoration: none;
transition: all .3s linear;
line-height: 1.5;
}
html{
font-size: 62.5%;
overflow-x: hidden;
scroll-behavior: smooth;
}

body {
background:#000000;
/* padding-left: 10rem;
padding-right: 10rem */
}

* {
  box-sizing: border-box;
}

.nav-container {
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0%;
  width: 100%;
  background: #db2e2eb6;
  position: fixed;
  z-index: 10;
  transition: 0.3s ease-in-out;
  /* opacity: 0.5; */
}

.nav.scroll {
  background-color: rgba(196, 31, 20, 0.822);
}
.nav-container svg {
  color: rgb(0, 0, 0);
  margin-left: 1rem;
}

.menu {
  display: block;

  width: 40px;

  cursor: pointer;

  outline: none;

  appearance: none;

  background: none;

  border: none;

  z-index: 99;
}

.menu .bar,
.menu:before,
.menu:after {
  content: "";

  display: block;

  width: 100%;

  height: 5px;

  margin: 0 auto 5px;

  background:black;

  transition: 0.5s ease-in-out;
}

.menu.is-active:before {
  transform: rotate(45deg) translate(8px, 6px);
}

.menu.is-active:after {
  transform: rotate(-45deg) translate(8px, -6px);
}

.menu.is-active .bar {
  transform: translate(-25px, 0px);
  opacity: 0;
}

.nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.scroll {
  background-color: #a1572f;
  color: rgb(255, 0, 0);
}

.nav a {
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  transition: 200ms ease-in-out;
  padding: 20px;
}

nav a:hover {
  color: #c23b37a1;
}

.mobile-nav {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  right: -100%;
  background-color: rgba(0, 0, 0, 85%);
  width: 50%;
  height: 100%;
  z-index: 99;
  transition: 0.4s ease-in-out;
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.7);
}

.m-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
}

.m-nav a {
  text-decoration: none;
  width: 100%;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  transition: 200ms ease-in-out;
  padding: 10px;
}

.mobile-nav.is-active {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  right: 0;
  height: 100%;
  transition: 0.4s ease-in-out;
}
@media only screen and (max-width: 770px) {
  .nav {
    display: none;
  }
  .nav-container {
    display: none;
    box-shadow: none;
    appearance: none;
    margin: 0;
    padding: 0;
  }

  .nav-container svg {
    color: #fff;
    width: 100px;
    margin-left: 1rem;
  }

  .menu-container {
    background-color: transparent;
    width: 100%;
    height: 80px;
    padding: 20px;
    position: fixed;
    top: 1%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 6;
  }
}
@media only screen and (max-width: 2000px) and (min-width: 771px) {
  .menu {
    display: none;
  }
  .mobile-nav {
    display: none;
  }
}
</style>
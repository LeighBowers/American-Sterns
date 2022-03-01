<template>
  <div class="form-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <div class="form-container">
            <img
              id="profile-img"
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              class="profile-img-card"
            />

            <h3 class="title">Register</h3>

            <form @submit.prevent="login" class="form-horizontal">
              <div class="form-group">
                <label>name</label>
                <input
                  class="form-control"
                  type="name"
                  v-model="name"
                  placeholder="name"
                />
              </div>
              <div class="form-group">
                <label>email</label>
                <input
                  class="form-control"
                  type="email"
                  v-model="email"
                  placeholder="email address"
                />
              </div>

              <div class="form-group">
                <label>password</label>
                <input
                  class="form-control"
                  type="password"
                  v-model="password"
                  placeholder="password"
                />
              </div>
              <router-link :to="{ name: 'Login' }">
                <button type="button" class="btn btn-default">Register</button>
              </router-link>
              <!-- <p>
                <router-link :to="{ name: 'Login' }"> </router-link>
              </p> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      fetch("https://american-sterns.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("User registered");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>


<style scoped>
.demo {
  background: #f2f2f2;
}
.form-container {
  background: #ecf0f3;
  font-family: "Nunito", sans-serif;
  padding: 40px;
  /* border-radius: 20px; */
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}
.form-container .form-icon {
  color: #fa211ab0;
  font-size: 55px;
  text-align: center;
  line-height: 100px;
  width: 100px;
  height: 100px;
  margin: 0 auto 15px;
  /* border-radius: 50px; */
  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px #fff;
}
.form-container .title {
  color: #fa211aad;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  margin: 0 0 20px;
}
.form-container .form-horizontal .form-group {
  margin: 0 0 25px 0;
}
.form-container .form-horizontal .form-group label {
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
}
.form-container .form-horizontal .form-control {
  color: #333;
  background: #ecf0f3;
  font-size: 15px;
  height: 50px;
  padding: 20px;
  letter-spacing: 1px;
  border: none;
  /* border-radius: 50px; */
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px #fff;
  display: inline-block;
  transition: all 0.3s ease 0s;
}
.form-container .form-horizontal .form-control:focus {
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px #fff;
  outline: none;
}
.form-container .form-horizontal .form-control::placeholder {
  color: #808080;
  font-size: 14px;
}
.form-container .form-horizontal .btn {
  color: #000;
  background-color: #fa211abe;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  padding: 12px 15px 11px;
  /* border-radius: 20px; */
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px #fff;
  border: none;
  transition: all 0.5s ease 0s;
}
.form-container .form-horizontal .btn:hover,
.form-container .form-horizontal .btn:focus {
  color: #fff;
  letter-spacing: 3px;
  box-shadow: none;
  outline: none;
}
</style>

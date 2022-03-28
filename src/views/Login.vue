<template>
  <div class="form-bg">
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- <div class="col-md-3 col-md-offset-4"> -->
          <div class="form-container">
            <div class="profile-img">
              <img
                id="profile-img"
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                class="profile-img-card"
              />
            </div>

            <h3 class="title">Login</h3>

            <Form
              @submit="handleLogin"
              :validation-schema="schema"
              class="form-horizontal"
            >
              <div class="form-group">
                <label for="name">name</label>
                <Field
                  class="form-control"
                  type="text"
                  placeholder="name"
                  name="name"
                />
              </div>

              <div class="form-group">
                <label for="password">password</label>
                <Field
                  class="form-control"
                  type="password"
                  placeholder="password"
                  name="password"
                />
              </div>
              <button type="submit" class="btn btn-default" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span>Login</span>
              </button>
              <!-- <router-link :to="{ name: 'Products' }">
                <button type="submit" class="btn btn-default">Login</button>
              </router-link> -->

              <br />
              <!-- <router-link :to="{ name: 'Register' }"> </router-link> -->
            </Form>

            <!-- </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <h2>Gift of quality time</h2>
          <img
            id="profile-img2"
            src="https://i.postimg.cc/WbQ4NJhm/hiswatch.jpg"
            class="profile-img-card"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup.string().required("username is required"),
      password: yup.string().required("Password is required"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/products");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>


<style scoped>
.profile-img {
  padding-left: 290px;
}
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
  color: #fa211ac7;
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
  color: #fa211aa9;
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
  background-color: #fa211ab2;
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


<template>
<div class="container">
	<div class="main">
		<div class="logo">
			<img
          src="https://i.postimg.cc/PqLmyGmm/icons8-watch-64.png"
          alt=""
        />
		</div>
		<Form @submit="handleRegister">
          <div v-if="!successful">
            <div class="form-group">
              <label for="name"></label>
			  <i class="fa fa-user"></i>
              <Field
                name="name"
                placeholder="Username"
                class="form-control"
			  	      type="name"
				
              />
              <ErrorMessage name="fullname" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="email"></label>
			  <i class="fa fa-lock"></i>
              <Field
                name="email"
                placeholder="email address"
                class="form-control"
                type="email"
              />
              <ErrorMessage name="email" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="password"></label>
			  <i class="fa fa-envelope"></i>
              <Field
                name="password"
                class="form-control"
                placeholder="Password"
                type="password"
              />
              <ErrorMessage name="password" class="error-feedback" />
            </div>
            <button type="submit" class="btn btn-primary btn-" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span >Register</span>
            </button>
            <br />
            <h4 style="color: black" class="login">
              Already a member? <a href="/login">Log In</a>
            </h4>
          </div>
        </Form>
        <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
        >
          {{ message }}
        </div>
      </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleRegister(user) {
      console.log("Successfully registered");
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          console.log(data);
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          console.log(error.message);
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>

<style scoped>
.container{
	padding-top:100px ;
}
.main {
	width: 390px;
	height: 650px;
	background: #fff;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
	border-radius: 10px;
	-webkit-box-shadow: 0 0 20px rgb(255, 72, 72);
	        box-shadow: 0 0 20px rgb(255, 72, 72);
}
.logo {
	top: 50px;
	width: 100px;
	height: 100px;
	margin: auto;
	background: #000;
	position: relative;
	border-radius: 100px;
	-webkit-transition: 200ms ease-in-out;
	-o-transition: 200ms ease-in-out;
	transition: 200ms ease-in-out;
	-webkit-animation: rotation 10s infinite linear;
	-webkit-box-shadow: 0 0 100px #db2e2eb6;
	        box-shadow: 0 0 100px #db2e2eb6;
	background: #db2e2eb6;  
	background: -webkit-linear-gradient(to right, 	#ff0000, #db2e2eb6);  
	background: linear-gradient(to right, 	#ff0000, #db2e2eb6); 

}
.logo:hover {
	-webkit-animation: rotation 0.9s infinite linear;
	-webkit-box-shadow: 0 0 10px 	#ff0000;
	        box-shadow: 0 0 10px 	#ff0000;
}
.logo h1 {
	color: #fff;
	font-size: 70px;
	font-weight: 200;
	line-height: 100px;
}
form {
	top: 100px;
	position: relative;
}
form input {
	display: block;
	margin: 10px auto;
}

form h4 {
	font-size: 12px;
	margin-top: 50px;
}

h4 a {
	color: #db2e2eb6;
	font-weight: bold;
	text-decoration: none;
	transition: 200ms ease-in-out;
}
h4 a:hover {
	color: #ff0000;
}
input[type='name'], input[type='password'] , input[type='email']{
	width: 60%;
	outline: none;
	border-top: 0;
	color: #ff0000;
	border-left: 0;
	border-right: 0;
	font-size: 14px;
	padding: 26px;
	font-weight: 300;
	border-bottom: 1px solid #db2e2eb6;
}


[type='submit'] {
	color: #fff;
	width: 150px;
	height: 50px;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 16px;
	margin-top: 50px;
	border-radius: 4px;
	transition: 200ms ease-out;
	-webkit-box-shadow: 0 0 10px #db2e2eb6;
	        box-shadow: 0 0 10px #db2e2eb6;
	background: #db2e2eb6; 
	background: -webkit-linear-gradient(to right, #db2e2eb6, #ff0000);  
	background: linear-gradient(to right, #db2e2eb6, #ff0000); 
}
[type='submit']:hover {
	width: 155px;
	height: 52px;
	transform: scale(1.1);
	box-shadow: 0 0 40px #db2e2eb6;
}
.fa-envelope {
	color: #ff0000;
  position: absolute;
  top: 195px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}
.fa-user {
	color: #ff0000;
  position: absolute;
  top: 25px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}

.fa-lock {
	color: #ff0000;
  position: absolute;
  top: 105px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}
/* .fa-redo {
	color: #89d8f0;
  position: absolute;
  top: 185px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
} */


[placeholder]::-webkit-input-placeholder  {
	color: #db2e2eb6;
	padding-left: 10px;
}
[placeholder]:focus::-webkit-input-placeholder {
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  -webkit-transform: translate(10px, 0);
          transform: translate(10px, 0);
  opacity: 0;
}
 



@-webkit-keyframes rotation {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
}


</style>
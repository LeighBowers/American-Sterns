<template>
<div class="container">
	<div class="main">
		<div class="logo">
				<img
          src="https://i.postimg.cc/PqLmyGmm/icons8-watch-64.png"
          alt=""
        />
		</div>
		<!-- Login Form -->
		<Form @submit="handleLogin" :validation-schema="schema">
 
        <div class="form-group">
                    <label class="form-label" id="nameLabel" for="name"></label>
                    <Field 
                      name="name"
                      type="text" 
                      class="form-control"
                      placeholder="Username" 
                    /> 
                    <i class="fa fa-user"></i>
                    <ErrorMessage name="yourname" class="error-feedback" />
                    
                </div>
                <div class="form-group">
                    <label class="form-label" id="subjectLabel" for="sublect"></label>
                    <Field name="password" type="password" class="form-control" placeholder="Password" /> <i class="fa fa-lock"></i>
                    <ErrorMessage name="password" class="error-feedback"/>
                </div>
                <div class="form-group">
                <div class=" b text-center margin-top-25">
                    <button type="submit" class="btn btn-mod btn-border btn-large" :disabled="loading">
                      LOGIN
                    </button>

                </div>
                </div>	
                <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
                {{message}}
            </div>
            
        </div>
        <div class="signUp">
            
             <h4> Don't have an account yet?<router-link :to="{ name: 'Register'}"> Sign Up</router-link></h4>
        </div>
        
       
      </Form>
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
    password: yup.string().required("Password is required")
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
    if (this.loggedIn) {
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
.container{
	padding-top:100px ;
}

.main {
	width: 390px;
	height: 550px;
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
	background: -webkit-linear-gradient(to right, #ff0000, #db2e2eb6);  
	background: linear-gradient(to right, #ff0000, #db2e2eb6); 

}
.logo:hover {
	-webkit-animation: rotation 0.9s infinite linear;
	-webkit-box-shadow: 0 0 10px #ff0000;
	        box-shadow: 0 0 10px #ff0000;
}
.logo img{
	weight: 200px;
	height: 100px;
}
Form {
	top: 100px;
	position: relative;
}
.form-group {
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
input[name="name"], input[name="password"] {
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

[type='submit'] :hover {
	width: 155px;
	height: 52px;
	transform: scale(1.1);
	box-shadow: 0 0 40px #db2e2eb6;
}
.fa-user {
	color: #db2e2eb6;
  position: absolute;
  top: 25px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}

.fa-lock {
	color: #db2e2eb6;
  position: absolute;
  top: 105px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}
.fa-redo {
	color: #db2e2eb6;
  position: absolute;
  top: 185px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}


[placeholder]::-webkit-input-placeholder {
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
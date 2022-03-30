<template>
  <div class="containerers">
    <div class="card">
       <div class="img-name">
        <img
          src="https://i.postimg.cc/7P3VGkHc/icons8-business-man-64.png"
          alt="profilna"
        />
        <h2>{{ currentUser.name }}</h2>
       </div>
      <div class="followers">
        <p>
          <strong>Token:</strong>
          {{ currentUser.accessToken.substring(0, 20) }} ...
          {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
        </p>
        <p>
          <strong>User ID:</strong>
          {{ currentUser._id }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ currentUser.email }}
        </p>
      </div>
      <div class="button-follow"></div>

        <strong>Your Profile:</strong>
        

    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
<style scoped>
p {
  font-size: 13px;
}
.containerers {
  padding-top: 100px;
  padding-bottom: 100px;
}
.card {
  width: 350px;
  height: fit-content;
  border-radius: 16px;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid #ff0000;
  background: #db2e2eb6;
  color: rgb(255, 255, 255);
  -webkit-box-shadow: 0 0 50px #ff0000;
	        box-shadow: 0 0 50px #ff0000;
}
.img-name {
  width: 100%;
  height: 210px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 5px solid #ff0000;
  padding-top: 10px;
}
.img-name img {
  display: block;
  width: 140px;
  height: 140px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 70px;
  border: 5px solid #ff0000;
  background-color: rgb(234, 241, 247);
}
.auth {
  text-align: center;
  text-decoration: none;
  list-style: none;
}
.img-name h2 {
  text-align: center;
}
.followers {
  height: 140px;
  padding-top: 50px;
  text-align: center;
}
.followers h3 {
  text-align: center;
}
.button-follow {
  height: 40px;
}
.button-follow button {
  display: block;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  background-color: rgb(182, 182, 233);
  border-radius: 10px;
  font-size: 18px;
}
.button-follow button:hover {
  background-color: rgb(180, 180, 226);
}

</style>

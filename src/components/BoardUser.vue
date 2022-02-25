<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>
<script>
import UserService from "../services/user.service";
export default {
  name: "User",
  data() {
    return {
      content: "",
    };
  },

  //   call the components to display on browser
  mounted() {
    //   calls Api in board then success display
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
      },
      //   if not successfull gives error
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
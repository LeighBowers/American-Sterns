
<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <div class="nav-item">
        <a class="nav-link" aria-current="page" href="home"
          ><span style="color: black">Home</span></a
        >
      </div>
      <!-- <div class="nav-item">
        <a class="nav-link" aria-current="page" href=""
          ><span style="color: black">Cart</span></a
        >
      </div> -->
    </div>
  </nav>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${watch.img}" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <input
            type="number"
            min="1"
            value="${watch.qty}"
            id="updateCartQty${position}"
            onchange="updateCart(${position})"
          />
          <p></p>
          <button class="btn btn-danger" onclick="deleteCart(${position})">
            REMOVE ITEM
          </button>
        </div>
      </div>
    </div>
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
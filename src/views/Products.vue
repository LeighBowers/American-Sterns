<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="btn btn-outline-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addProduct"
      >
        ADD NEW
      </button>
      <!-- <div class="nav-item">
        <a class="nav-link" aria-current="page" href="index.html"
          ><span style="color: black">Home</span>
        </a>
      </div> -->
      <div class="nav-item">
        <a class="nav-link" aria-current="page" href="cart"
          ><span id="badge" style="color: white"></span
          ><span style="color: black">Cart</span></a
        >
      </div>
    </div>
  </nav>
  <div class="container">
    <div>
      <label for="catergorySort" class="form-label"> Sort by catergory:</label>
      <select
        name="catergorySort"
        id="catergorySort"
        onchange="catergorySort()"
      >
        <option value="all">all</option>
        <option value="Smart watch">Smart watch</option>
        <option value="Rolex">Rolex</option>
      </select>
    </div>

    <div>
      <label for="priceSort" class="form-label">Sort by price:</label>
      <select name="priceSort" id="priceSort" onchange="priceSort()">
        <option value="ascending">ascending</option>
        <option value="descending">descending</option>
      </select>
    </div>

    <div>
      <label for="sortName" class="form-label">Sort by name:</label>
      <select name="sortName" id="sortName" onchange="sortName()">
        <option value="ascending">ascending</option>
        <option value="descending">descending</option>
      </select>
    </div>
  </div>

  <div
    class="modal fade"
    id="addProduct"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">ADD A PRODUCT</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <div class="input-group mb-3">
                <h4 class="fs-6">Name:</h4>
                <input
                  type="text"
                  class="inp"
                  placeholder="name of item"
                  id="add"
                />
                <h4 class="fs-6">Category:</h4>
                <select name="catergory" class="inp" id="catergory">
                  <option value="fruit">Smart Watch</option>
                  <option value="vegetable">Rolex</option>
                </select>
                <h4 class="fs-6">Price:</h4>
                <input type="text" class="inp" placeholder="price" id="price" />
                <h4 class="fs-6">Image:</h4>
                <input
                  type="text"
                  class="inp"
                  placeholder="enter image"
                  id="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
            Close
          </button>
          <button
            type="button"
            class="btn"
            data-bs-dismiss="modal"
            onclick="createWatch()"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="card" style="width: 18rem">
        <img src="" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-name">Name</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="content">
            <div class="buttons">
              <button
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#update-modal-${position}"
              >
                EDIT
              </button>
              <button class="btn btn-danger">DELETE</button>
              <button class="btn btn-danger">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
};
</script>

<style scoped>
#watch {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 0%;
}

.content {
  display: flex;
  flex-wrap: wrap;
}

img {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.in {
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  padding: 7px;
  width: 400px;
}

.modal-body {
  margin-top: auto;
  margin-bottom: 10px;
}

.fs-6 {
  padding-left: 10px;
}

.modal-title {
  margin-left: auto;
}

.inp {
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  padding: 7px;
  width: 400px;
}

.container {
  display: flex;
  justify-content: space-between;
}

.nav-item {
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
}

.nav-link #badge {
  background-color: red;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 6px;
  right: 3px;
  text-align: center;
}
</style>
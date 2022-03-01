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

      <div class="nav-item">
        <a class="nav-link" aria-current="page" href="cart"
          ><span id="badge" style="color: white"></span
          ><span style="color: black">Cart</span></a
        >
      </div>
    </div>
  </nav>
  <!-- <div class="container">
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
          <button type="button" class="btn">Save changes</button>
        </div>
      </div>
    </div>
  </div> -->
  <!-- Topic Cards -->
  <div id="cards_landscape_wrap-2">
    <div class="container">
      <div class="row">
        <div v-for="product in products" :key="product.id">
          <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <a href="">
              <div class="card-flyer">
                <div class="text-box">
                  <div class="image-box">
                    <img :src="product.img" alt="" />
                  </div>
                  <div class="text-container">
                    <h5>{{ product.name }}</h5>
                    <p>{{ product.description }}</p>
                  </div>
                  <div class="card-footer">
                    <div class="buttons">
                      <button class="btn btn-dark">EDIT</button>
                      <button class="btn btn-danger">DELETE</button>
                      <button class="btn btn-danger">ADD TO CART</button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
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
      products: [],
    };
  },
  mounted() {
    fetch("https://american-sterns.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
  },
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

#cards_landscape_wrap-2 {
  text-align: center;
  background: #f7f7f7;
}
#cards_landscape_wrap-2 .container {
  padding-top: 80px;
  padding-bottom: 100px;
}
#cards_landscape_wrap-2 a {
  text-decoration: none;
  outline: none;
}
#cards_landscape_wrap-2 .card-flyer {
  border-radius: 5px;
}
#cards_landscape_wrap-2 .card-flyer .image-box {
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
#cards_landscape_wrap-2 .card-flyer .image-box img {
  -webkit-transition: all 0.9s ease;
  -moz-transition: all 0.9s ease;
  -o-transition: all 0.9s ease;
  -ms-transition: all 0.9s ease;
  width: 100%;
  height: 200px;
}
#cards_landscape_wrap-2 .card-flyer:hover .image-box img {
  opacity: 0.7;
  -webkit-transform: scale(1.15);
  -moz-transform: scale(1.15);
  -ms-transform: scale(1.15);
  -o-transform: scale(1.15);
  transform: scale(1.15);
}
#cards_landscape_wrap-2 .card-flyer .text-box {
  text-align: center;
}
#cards_landscape_wrap-2 .card-flyer .text-box .text-container {
  padding: 30px 18px;
}
#cards_landscape_wrap-2 .card-flyer {
  background: #ffffff;
  margin-top: 50px;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
}
#cards_landscape_wrap-2 .card-flyer:hover {
  background: #fff;
  box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-top: 50px;
}
#cards_landscape_wrap-2 .card-flyer .text-box p {
  margin-top: 10px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #000000;
}
#cards_landscape_wrap-2 .card-flyer .text-box h6 {
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Roboto Black", sans-serif;
  letter-spacing: 1px;
  color: #00acc1;
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
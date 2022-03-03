<template>


      <div class="nav-item">
        <router-link class="nav-link" aria-current="page" to="cart"
          ><span id="badge" style="color: white"></span
          ><span style="color: black"> Cart</span></router-link
        >
      </div>
      <div class="sort">
         <label for="priceSort" class="form-label">SORT BY PRICE:</label>
         <select name="priceSort" id="priceSort" onchange="priceSort()">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
       </div>

       <div class="sort">
        <label for="sortName" class="form-label">SORT BY NAME:</label>
        <select name="sortName" id="sortName" onchange="sortName()">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
       </div>

  <div class="row row-cols-1 row-cols-sm-3">
    <div v-for="product in products" :key="product.id">
      <div class="col">
        <div class="card">
          <img :src="product.img" class="card-img-top" alt="" />
          <div class="card-body">
            <h5>{{ product.name }}</h5>
              <h6>R{{product.price}}</h6>
            <p>{{ product.description }}</p>
          </div>
               <div class="access">
                  <input type="number" class="form-control" value="1" min="1" v-on:click="addItemToCart(products)" id="addToCart()">
                  <button class="btn" style="font-size: 25px"><i class="fas fa-cart-plus"></i></button>
              </div>
          <div class="card-footer">
            <div class="buttons">
              <button class="btn btn-mod btn-border btn-large">EDIT</button>
              <button class="btn btn-mod btn-border btn-large" >DELETE</button>
            </div>
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
      cart: [],
    };
  },
  mounted() {
    fetch("https://american-sterns.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    addItemToCart(products) {
      this.cart.push(products);
      console.log(this.cart);
    },
  },
};
</script>

<style scoped>
.access{
  display:flex;
  justify-content:center;
}
.sort{
  display:inline-block;
  justify-content:center;
  padding:10px;

}
.card {
  height: auto;
  width: auto;
}

img {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.modal-body {
  margin-top: auto;
  margin-bottom: 10px;
}

.modal-title {
  margin-left: auto;
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
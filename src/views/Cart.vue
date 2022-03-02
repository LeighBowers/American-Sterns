
<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <div class="nav-item">
        <a class="nav-link" aria-current="page" href="home"
          ><span style="color: black">Home</span></a
        >

        <div v-for="cart in carts" :key="cart.id" class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="product.img" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5>{{ product.name }}</h5>
                <p>{{ product.price }}</p>

                <p>{{ product.qty }} * {{ cart.price }}</p>
                <button class="btn btn-danger">REMOVE ITEM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
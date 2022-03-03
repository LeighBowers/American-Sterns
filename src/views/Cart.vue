
<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <div class="nav-item">
        <a class="nav-link" aria-current="page" href="home"
          ><span style="color: black">Home</span></a
        >

        <div v-for="product in carts" :key="product.id" class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="product.img" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5>{{ product.name }}</h5>
                <p>{{ product.price }}</p>

                <p>{{ product.qty }} * {{ cart.price }}</p>
                <button v-on:click="removeItemFromCart(product)">
                  REMOVE ITEM
                </button>
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
      cart: [],
    };
  },
  mounted() {
    fetch("https://american-sterns.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => (this.cart = data))
      .catch((err) => console.log(err.message));
  },

  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    },
  },
};
</script>
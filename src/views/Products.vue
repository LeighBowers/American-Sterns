<template>
  <div class="row">
    <h1>Products</h1>
    <div class="col-md-3 col-sm-6"  v-for="product of content" :key="product._id">
        <div class="product-grid">
     
            <div class="product-image">
                <div class="image">
                    <img :src="product.img" class="card-img-top" alt="" />
                </div>
            </div>
            <div class="product-content">
                <h3 class="title"><div>{{ product.name }}</div></h3>
                <h4 class="title"><div>{{ product.description }}</div></h4>
                <div class="price">R{{product.price}}</div>
                <a href="#" class="add-to-cart"><i class="fas fa-cart-plus"></i> Add to cart</a>
            </div>
            
        </div>
    </div>
</div>

</template>

<script>
import UserService  from "../services/user.service"
export default {
  components: {
  
  },
  data() {
    return {
     content: ""
    };
  },
  mounted() {
    this.loading = true;
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
        this.loading = false;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) 
          error.message 
          error.toString();
      }
    );
  },
};
</script>

<style scoped >
.row {
    padding:60px;
}
.product-grid{
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    border: 3px solid #f2f2f2;
    border-radius: 5px;
    transition: all .4s ease-in-out;
}
.product-grid:hover{ border-color:  #89d8f0; }
.product-grid .product-image{ position: relative; }
.product-grid .product-image a.image{ display: block; }
.product-grid .product-image img{
    width: 100%;
    height: auto;
}
.product-grid .product-links{
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 60%;
    left: 50%;
    z-index: 1;
    transition: all .4s ease;
}
.product-grid:hover .product-links{
    opacity: 1;
    top: 50%;
}
.product-grid .product-links li{
    display: inline-block;
    margin: 0 2px;
    transition: all 0.5s ease-in-out;
}
.product-grid .product-links li a{
    color: #c6202e;
    background: #fff;
    font-size: 16px;
    line-height: 52px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
}
.product-grid .product-links li a:hover{
    color: #fff;
    background: #c6202e;
}
.product-grid .product-links li a:before,
.product-grid .product-links li a:after{
    content: attr(data-tip);
    color: #fff;
    background-color: #000;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    padding: 5px 10px;
    white-space: nowrap;
    display: none;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: -32px;
    transition: all 0.3s;
}
.product-grid .product-links li a:after{
    content: '';
    height: 15px;
    width: 15px;
    transform: translateX(-50%) rotate(45deg);
    top: -24px;
    z-index: -1;
}
.product-grid .product-links li a:hover:before,
.product-grid .product-links li a:hover:after{
    display: block;
}
.product-grid .product-content{ padding: 20px 12px; }
.product-grid .title{
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 10px;
}
.product-grid .title a{
    color: #000;
    transition: all 0.3s ease 0s;
}
.product-grid .product-category{
    text-transform: capitalize;
    margin: 0 0 10px;
    display: block;
    color: black;
}
.product-grid .product-category a{
    color: #828282;
    transition: all 0.3s ease 0s;
}
.product-grid .title a:hover,
.product-grid .product-category a:hover{ color: #c6202e; }
.product-grid .price{
    color: black;
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 10px;
}
.product-grid .add-to-cart{
    color: #c6202e;
    background: #fff;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    padding: 12px;
    border: 1px solid #E4E4E4;
    border-radius: 50px;
    display: block;
    transition: all 0.3s ease-in-out;
}
.product-grid .add-to-cart:hover,
.product-grid:hover .add-to-cart{
    color: #89d8f0;
    background: black;
    border-color: #c6202e;
}
@media screen and (max-width: 990px){
    .product-grid{ margin-bottom: 30px; }
}
</style>
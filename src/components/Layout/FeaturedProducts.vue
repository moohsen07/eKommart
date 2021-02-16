<template>
  <div class="feature mt-5">
    <div class="container">
      <h1 class="section-title mb-5">Featured Products</h1>
      <div class="row">
        <div class="col-12 col-lg-4 p-lg-0 pb-5">
          <div class="featured-bg text-center">
            <div
              class="featured-overlay d-flex justify-content-center flex-column"
            >
              <span class="text-uppercase">November Hot Deal</span>
              <h1 class="text-uppercase font-weight-bold">Clearance</h1>
              <span class="text-main">Instock</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 px-md-0">
          <div class="row mx-0">
            <div
              class="col-12 col-md-6 col-lg-4 px-0"
              v-for="product in featuredProducts"
              :key="product.id"
            >
              <product :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Product from "@/components/Global/Product.vue";
export default {
  components: { Product },
  computed: {
    ...mapState(["products"]),
    featuredProducts() {
      if (window.innerWidth >= 768) return this.products.slice(4, 10);
      else return this.products.slice(4, 7);
    }
  }
};
</script>

<style>
.featured-bg {
  position: relative;
  background-image: url("../../assets/images/featured.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  width: 100%;
  height: 100% !important;
}
.featured-overlay {
  background-color: #131315;
  height: 50%;
}
.featured-overlay h1 {
  font-size: 60px;
}
@media (max-width: 992px) {
  .featured-bg {
    background-position: center;
    height: 250px !important;
  }
  .featured-overlay {
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
  }
}
</style>

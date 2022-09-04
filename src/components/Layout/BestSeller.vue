<template>
  <div class="best-seller mt-5">
    <div class="container">
      <div class="seller-header">
        <h1 class="section-title mb-3 mb-md-0">Best Seller</h1>
      </div>

      <div class="products mt-5">
        <products-slider :products="products" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductsSlider from "../Global/ProductsSlider.vue";

export default {
  components: { ProductsSlider },
  data() {
    return {
      currentTab: "watches"
    };
  },
  computed: {
    ...mapState(["products"])
  }
};
</script>

<template>
  <div class="search-page">
    <div class="container">
      <div class="dir text-center mt-3">
        <i class="fas fa-home mr-1"></i>
        <router-link class="text-white" :to="{ name: 'Home' }"
          >Home
        </router-link>
        <span class="text-white-50">> </span>
        <router-link class="text-white" to="">search </router-link>
        <span class="text-white-50">> </span>
        <span class="text-white-50">{{ search }}</span>
      </div>
      <template v-if="filteredProducts.length">
        <h1 class="my-4">Searched Products</h1>
        <div
          class="product-search mb-4"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <div class="row">
            <div class="col-4 col-lg-3 align-self-center">
              <router-link
                :to="{ name: 'product-page', params: { id: product.id } }"
              >
                <img
                  class="img-fluid"
                  :src="require(`../assets/images/${product.img1}`)"
                  alt=""
                />
              </router-link>
            </div>
            <div class="col-8 col-lg-9 align-self-center">
              <router-link
                class="text-white"
                :to="{ name: 'product-page', params: { id: product.id } }"
              >
                <h3>{{ product.name }}</h3>
              </router-link>
              <span class="price text-main">{{ product.price }}</span>
              <p>
                Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam
                facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum.
                Consequatur molestiae ad molestias eius unde facere est
                architecto.
              </p>
              <inc-dec :product="product" />
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <h1 class="text-center my-5">Product Not Found</h1>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import IncDec from "../components/Global/IncDec.vue";
export default {
  components: { IncDec },
  data() {
    return {
      search: this.$route.params.search
    };
  },
  computed: {
    ...mapState(["products"]),
    filteredProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style>
.search-page a.add-cart {
  padding: 10px 50px;
}
.search-page .quantity .dec,
.search-page .quantity .inc {
  color: #fff;
}
.search-page .quantity .dec::before,
.search-page .quantity .inc::before {
  background: #fff;
}
.quantity .dec:hover,
.quantity .inc:hover {
  color: var(--main-color);
}
</style>

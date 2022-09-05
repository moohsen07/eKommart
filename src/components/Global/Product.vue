<template>
  <div v-if="product" class="product border p-4 position-relative">
    <div class="product-img">
      <router-link :to="{ name: 'product-page', params: { id: product.id } }">
        <img
          class="img-fluid"
          :src="require(`../../assets/images/${product.img1}`)"
          alt=""
        />
      </router-link>
    </div>
    <div class="product-body text-center">
      <span class="text-muted text-capitalize">{{ product.category }}</span>
      <router-link
        class="text-white"
        :to="{ name: 'product-page', params: { id: product.id } }"
      >
        <h6 class="my-3">
          {{ product.name }}
        </h6>
      </router-link>
      <span class="price text-main d-block">$ {{ product.price }} </span>
      <div
        class="product-actions d-flex my-3 rounded"
        style="border: 1px solid var(--main-color)"
      >
        <app-button
          @click.native="openPreview(product)"
          mode="outline"
          class="border-0"
          ><i class="far fa-eye"></i
        ></app-button>
        <app-button
          mode="outline"
          :loading="loading"
          :success="success"
          @click.native="addToCart(product)"
          class="border-top-0 border-bottom-0"
          >Add to card</app-button
        >
        <!-- heart icon -->
        <app-button mode="outline" class="border-0">
          <i class="far fa-heart"></i>
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../main";
import AppButton from "../../components/Global/AppButton";
export default {
  props: ["product"],
  components: {
    AppButton
  },
  data() {
    return {
      loading: false,
      success: false
    };
  },
  methods: {
    openPreview(product) {
      EventBus.$emit("openPreview", product);
    },
    addToCart(product) {
      this.loading = true;
      setTimeout(() => {
        this.$store.dispatch("addToCart", product).then(() => {
          this.loading = false;
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 1000);
        });
      }, 2000);
    }
  }
};
</script>

<style>
.product {
  border: 1px solid rgba(136, 136, 136, 0.226) !important;
}
.price {
  font-family: "Rubik", sans-serif;
  font-size: 18px;
}

.quantity .dec:hover,
.quantity .inc:hover {
  color: var(--main-color);
}
</style>

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
      <span class="text-muted">Watch</span>
      <router-link
        class="text-white"
        :to="{ name: 'product-page', params: { id: product.id } }"
      >
        <h6 class="my-3">
          {{ product.name }}
        </h6>
      </router-link>
      <span class="price text-main d-block">$ {{ product.price }} </span>
      <app-button
        mode="outline"
        :loading="loading"
        :success="success"
        @click.native="changeLoadingState"
        class="my-3"
        >Add to card</app-button
      >
    </div>
    <div class="inner-hover position-absolute d-flex">
      <button @click="openPreview(product)">
        <i class="far fa-eye"></i>
      </button>
      <button
        ref="btn"
        @click="
          addToCart(product);
          changeLoadingState();
        "
      >
        <i class="fas fa-shopping-basket"></i>
        <div
          class="
            add-cart-loading
            d-flex
            justify-content-center
            align-items-center
            w-100
            h-100
            position-absolute
          "
          v-if="loading || success"
        >
          <div class="spinner-border" v-if="loading"></div>
          <div class="check" v-if="success">
            <i class="far fa-check-circle"></i>
          </div>
        </div>
      </button>
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
      this.$store.dispatch("addToCart", product);
    },
    changeLoadingState() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 2000);
      }, 3000);
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

.inner-hover button::before {
  content: "";
  position: absolute;
  bottom: -170%;
  left: 0;
  width: 150%;
  height: 100%;
  background-color: var(--main-color);
  z-index: -1;
  transform: rotate3d(0, 0, 1, 12deg) translate3d(-1.2em, 110%, 0);
  transition: 0.5s cubic-bezier(0.59, 0.03, 0.2, 1);
}

.inner-hover button:hover::before {
  bottom: 0;
  transform: none;
}
.inner-hover {
  top: 26%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: 0.3s ease-in-out 0.25s;
}
.product:hover .inner-hover {
  top: 30%;
  opacity: 1;
}
.inner-hover button {
  position: relative;
  background-color: #fff;
  padding: 10px 25px;
  border: 0.5px solid #000;
  overflow: hidden;
  z-index: 3;
  transition: 0.5s cubic-bezier(0.59, 0.03, 0.2, 1);
}
</style>

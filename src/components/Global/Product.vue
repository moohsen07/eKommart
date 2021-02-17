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
      <span class="price text-main">$ {{ product.price }} </span>
      <a
        href="#"
        ref="anchor"
        @click.prevent="
          addToCart(product);
          loading('anchor');
        "
        class="add-cart d-block position-relative py-2 my-3"
        >Add To Card</a
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
          loading('btn');
        "
      >
        <i class="fas fa-shopping-basket"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../main";
export default {
  props: ["product"],
  methods: {
    openPreview(product) {
      EventBus.$emit("openPreview", product);
    },
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
    loading(el) {
      let content = this.$refs[el].innerHTML;
      this.$refs[
        el
      ].innerHTML += `<div class="spinner-container d-flex justify-content-center align-items-center w-100 h-100 position-absolute">
      <div class="spinner-border">
      <div></div>`;
      setTimeout(() => {
        this.$refs[
          el
        ].innerHTML += `<div class="check d-flex justify-content-center align-items-center w-100 h-100 position-absolute"><i class="far fa-check-circle"></i></div>`;
      }, 1000);

      setTimeout(() => {
        this.$refs[el].innerHTML = content;
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
.add-cart {
  color: var(--main-color);
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s cubic-bezier(0.59, 0.03, 0.2, 1);
  border: 1px solid;
  z-index: 5;
}
.add-cart::before,
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
.add-cart:hover {
  color: #000;
}
.add-cart:hover::before,
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

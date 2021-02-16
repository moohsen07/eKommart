<template>
  <div
    class="inc-dec d-flex justify-content-between align-items-center flex-wrap mb-4"
  >
    <div class="quantity d-flex align-items-center mb-3 mb-lg-0">
      <a href="#" class="dec" @click.prevent="decQuantity"
        ><i class="fas fa-minus"></i
      ></a>
      <span> {{ product.quantity }} </span>
      <a href="#" class="inc" @click.prevent="incQuantity"
        ><i class="fas fa-plus"></i
      ></a>
    </div>
    <a
      href="#"
      ref="btn"
      @click.prevent="
        addToCart(product);
        loading();
      "
      class="add-cart position-relative bg-main text-white mt-3"
    >
      <i class="fas fa-shopping-basket pr-2"></i>
      Add To Card</a
    >
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    incQuantity() {
      this.product.quantity++;
    },
    decQuantity() {
      if (this.product.quantity > 1) {
        this.product.quantity--;
      }
    },
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
    loading() {
      let content = this.$refs.btn.innerHTML;
      this.$refs.btn.innerHTML += `<div class="spinner-container d-flex justify-content-center align-items-center w-100 h-100 position-absolute">
      <div class="spinner-border">
      <div></div>`;
      setTimeout(() => {
        this.$refs.btn.innerHTML += `<div class="check d-flex justify-content-center align-items-center w-100 h-100 position-absolute"><i class="far fa-check-circle"></i></div>`;
      }, 1000);

      setTimeout(() => {
        this.$refs.btn.innerHTML = content;
      }, 3000);
    }
  }
};
</script>

<style>
.inc-dec a.add-cart {
  padding: 10px 70px;
  font-size: 18px;
  border: none;
}
/* inc and dec btns */
.quantity .dec,
.quantity .inc {
  position: relative;
  color: #000;
  font-size: 16px;
  transition: 0.3s;
  z-index: 3;
}

.quantity .dec::before,
.quantity .inc::before {
  content: "";
  position: absolute;
  background: #000;
  width: 23px;
  height: 23px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  z-index: -1;
}

.quantity .dec:hover::before,
.quantity .inc:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

.quantity .dec:hover,
.quantity .inc:hover {
  color: var(--main-color);
}

.quantity span {
  margin: 0 20px;
}
</style>

<template>
  <div class="overlay" :class="{ open: open }" @click.self="closeCart">
    <div class="cart shadow">
      <div
        class="cart-header position-relative d-flex justify-content-between align-items-center"
      >
        <h4 class="text-uppercase">Shopping Cart</h4>
        <span
          class="close-cart position-relative pr-3 text-uppercase"
          @click="closeCart"
          >Close</span
        >
      </div>
      <div class="display-products mt-4">
        <transition-group name="cart" tag="div">
          <div
            class="product border-0 mb-4"
            v-for="product in carts"
            :key="product.id"
          >
            <div class="row">
              <div class="col-4">
                <i
                  class="fas fa-times-circle text-danger position-absolute"
                  style="cursor: pointer"
                  @click="removeFromCart(product)"
                ></i>
                <img
                  class="img-fluid"
                  :src="require(`../../assets/images/${product.img1}`)"
                  alt=""
                />
              </div>
              <div class="col-8">
                <span class="d-block text-weight-bold">{{ product.name }}</span>
                <span class="d-block"
                  >Vendor: <span class="text-muted">online store</span></span
                >
                <span
                  >{{ product.quantity }} ×
                  <span class="text-main">${{ product.price }}</span></span
                >
              </div>
            </div>
          </div>
        </transition-group>
      </div>
      <div
        v-if="subTotal > 0"
        class="cart-footer d-flex justify-content-between"
      >
        <span class="text-uppercase">Subtotal :</span>
        <span>${{ subTotal }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  props: ["open"],
  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
    removeFromCart(product) {
      this.$store.dispatch("removeFromCart", product);
    }
  },
  computed: {
    ...mapState(["carts"]),
    ...mapGetters(["subTotal"])
  },
  updated() {
    if (this.open == true) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }
};
</script>

<style scoped>
.overlay {
  opacity: 0;
  visibility: hidden;
  z-index: 1111111;
}
.overlay.open {
  opacity: 1;
  visibility: visible;
}
.cart {
  position: absolute;
  right: -310px;
  width: 310px;
  height: 100vh;
  background-color: #252525;
  padding: 20px;
  transition: 0.4s 0.1s;
}
.overlay.open .cart {
  right: 0px;
}
.cart .close-cart::before {
  content: " ";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  margin-top: -1px;
  width: 12px;
  height: 2px;
  transform: rotate(45deg);
  background-color: #ccc;
  right: 0;
  transition: 0.5s;
}
.cart .close-cart::after {
  content: " ";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  margin-top: -1px;
  width: 12px;
  height: 2px;
  transform: rotate(-45deg);
  background-color: #ccc;
  right: 0;
  transition: 0.5s;
}
.cart .close-cart:hover {
  color: var(--main-color);
  cursor: pointer;
}
.cart .close-cart:hover:before,
.cart .close-cart:hover:after {
  transform: rotate(0deg);
  background-color: var(--main-color);
}
.cart-header::before {
  content: "";
  position: absolute;
  bottom: -10px;
  left: -20px;
  width: calc(100% + 40px);
  height: 1px;
  background: rgba(204, 204, 204, 0.226);
}
.product span {
  font-size: 14px;
}

.cart-footer {
  position: absolute;
  bottom: 30px;
  width: 100%;
  padding-right: 30px;
  font-size: 20px;
}
.cart-footer::before {
  content: "";
  position: absolute;
  top: -20px;
  left: -20px;
  width: calc(100% + 40px);
  height: 1px;
  background: rgba(204, 204, 204, 0.226);
}

/* cart-group transition */

.cart-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.cart-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}
.cart-move {
  transition: 0.5s ease;
}
</style>

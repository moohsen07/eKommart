<template>
  <div
    class="
      inc-dec
      d-flex
      justify-content-between
      align-items-center
      flex-wrap
      mb-4
    "
    style="gap: 16px"
  >
    <div class="quantity d-flex align-items-center">
      <a href="#" class="dec" @click.prevent="decQuantity"
        ><i class="fas fa-minus"></i
      ></a>
      <span> {{ quantity }} </span>
      <a href="#" class="inc" @click.prevent="incQuantity"
        ><i class="fas fa-plus"></i
      ></a>
    </div>
    <app-button
      :loading="loading"
      :success="success"
      @click.native="addToCart(product)"
    >
      <i class="fas fa-shopping-basket pr-2"></i>
      Add To Card
    </app-button>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  components: { AppButton },
  props: ["product"],
  data() {
    return {
      quantity: 1,
      loading: false,
      success: false
    };
  },
  methods: {
    incQuantity() {
      this.quantity++;
    },
    decQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart(item) {
      item.quantity = this.quantity;
      this.loading = true;
      setTimeout(() => {
        this.$store.dispatch("addToCart", item).then(() => {
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
.inc-dec a.add-cart {
  padding: 10px 50px;
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

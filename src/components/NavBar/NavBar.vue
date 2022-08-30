<template>
  <div class="nav-container">
    <!-- <mob-nav-bar @openCart="openCart" /> -->
    <base-nav-bar @openCart="openCart" />
    <base-cart :open="open" @closeCart="closeCart" />
  </div>
</template>

<script>
import BaseCart from "@/components/Global/BaseCart.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import BaseNavBar from "./BaseNavBar";
// import MobNavBar from "./MobNavBar.vue";
export default {
  components: { BaseCart, BaseNavBar },
  data() {
    return {
      open: false
    };
  },
  methods: {
    openCart() {
      this.open = !this.open;
    },
    closeCart() {
      this.open = false;
    }
  },
  computed: {
    ...mapState(["carts"]),
    ...mapGetters(["subTotal"])
  }
};
</script>

<style></style>

<template>
  <div id="app">
    <nav-bar />
    <transition
      name="fade"
      mode="out-in"
      :duration="{ enter: 500, leave: 800 }"
    >
      <router-view class="mt-lg-0" :key="$route.path" />
    </transition>
    <app-footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import AppFooter from "@/components/Global/AppFooter.vue";

export default {
  components: {
    NavBar,
    AppFooter
  },
  created() {
    this.$store.dispatch("getProducts");
  }
};
</script>
<style></style>

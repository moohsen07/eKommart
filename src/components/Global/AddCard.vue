<template>
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
  >
    <div class="spinner-border" v-if="loading"></div>
    <div class="check" v-if="success">
      <i class="far fa-check-circle"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loading", "success"]
};
</script>

<style></style>

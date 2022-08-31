<template>
  <div
    class="
      app-btn
      d-flex
      justify-content-center
      align-item-center
      py-2
      text-capitalize
    "
    :class="mode"
  >
    <slot></slot>
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
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "filled"
    },
    loading: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.app-btn {
  position: relative;
  color: var(--main-color);
  overflow: hidden;
  transition: 0.5s cubic-bezier(0.59, 0.03, 0.2, 1);
  cursor: pointer;
  z-index: 5;
  &.outline {
    border: 1px solid;
    &::before {
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
    &:hover {
      color: #000;
      &::before {
        bottom: 0;
        transform: none;
      }
    }
  }
  &.filled {
    background-color: var(--main-color);
    color: #fff;
  }
}
</style>

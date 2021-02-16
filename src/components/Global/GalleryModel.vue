<template>
  <transition name="fade">
    <div
      v-if="img"
      class="overlay d-flex justify-content-center align-items-center"
      @click.self="closeModel"
    >
      <img class="h-75" :src="require(`../../assets/images/${img}`)" alt="" />
    </div>
  </transition>
</template>

<script>
import { EventBus } from "../../main";
export default {
  data() {
    return {
      img: null
    };
  },
  methods: {
    closeModel() {
      this.img = null;
    }
  },
  created() {
    EventBus.$on("openModel", img => (this.img = img));
  }
};
</script>

<style scoped>
.overlay {
  cursor: zoom-out;
}
img {
  cursor: default;
}
</style>

<template>
  <div class="gallery mt-5">
    <div class="row mx-0">
      <div class="col-4 col-lg-2 px-0" v-for="img in galleryImages" :key="img">
        <div class="image position-relative">
          <figure class="m-0">
            <img
              class="img-fluid"
              :src="require(`@/assets/images/${img}`)"
              alt=""
            />
          </figure>
          <div
            class="overlay position-absolute h-100 d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-search-plus text-main" @click="openModel(img)"></i>
          </div>
        </div>
      </div>
    </div>
    <gallery-model />
  </div>
</template>

<script>
import GalleryModel from "@/components/Global/GalleryModel.vue";
import { EventBus } from "../../main";
export default {
  components: { GalleryModel },
  data() {
    return {
      galleryImages: [
        "gallery_1.jpg",
        "gallery_2.jpg",
        "gallery_3.jpg",
        "gallery_4.jpg",
        "gallery_5.jpg",
        "gallery_6.jpg"
      ]
    };
  },
  methods: {
    openModel(img) {
      EventBus.$emit("openModel", img);
    }
  }
};
</script>

<style scoped>
.gallery .image .overlay {
  opacity: 0;
}
.image {
  overflow: hidden;
}
.image:hover .overlay {
  opacity: 1;
}
.overlay i {
  font-size: 30px;
  cursor: pointer;
}
</style>

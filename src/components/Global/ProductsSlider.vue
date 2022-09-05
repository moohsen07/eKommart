<template>
  <div class="products-slider">
    <div class="swiper" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="product in products" :key="product.id">
          <product :product="product" />
        </div>
      </div>
      <div class="swiper-button-next d-none d-md-block"></div>
      <div class="swiper-button-prev d-none d-md-block"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import Product from "./Product.vue";

export default {
  components: { Product },
  props: ["products"],
  data() {
    return {
      swiperOptions: {
        modules: [Navigation],
        slidesPerView: 1.3,
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          576: {
            slidesPerView: 1.8
          },
          768: {
            slidesPerView: 2.3
          },
          992: {
            slidesPerView: 3.5
          }
        }
      }
    };
  },
  mounted() {
    new Swiper(this.$refs.swiper, this.swiperOptions);
  }
};
</script>

<style lang="scss">
.products-slider {
  .swiper-button-next,
  .swiper-button-prev {
    opacity: 0;
  }
  .swiper-button-next {
    right: 30px;
  }
  .swiper-button-prev {
    left: 30px;
  }
  &:hover {
    .swiper-button-next,
    .swiper-button-prev {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>

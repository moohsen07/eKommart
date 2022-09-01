<template>
  <div class="home">
    <slider />
    <show-case />
    <best-seller />
    <coming-soon />
    <featured-products />
    <gallery />
  </div>
</template>

<script>
import Slider from "@/components/Layout/Slider.vue";
import ShowCase from "@/components/Layout/ShowCase.vue";
import BestSeller from "@/components/Layout/BestSeller.vue";
import ComingSoon from "@/components/Layout/ComingSoon.vue";
import FeaturedProducts from "@/components/Layout/FeaturedProducts.vue";
import Gallery from "@/components/Layout/Gallery.vue";

export default {
  name: "Home",
  components: {
    Slider,
    ShowCase,
    BestSeller,
    ComingSoon,
    FeaturedProducts,
    Gallery
  }
};
</script>

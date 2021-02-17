<template>
  <transition name="fade" :duration="{ enter: 500, leave: 800 }">
    <div
      class="overlay d-flex justify-content-center align-items-center"
      @click.self="closeProduct"
      v-if="product"
    >
      <div class="preview bg-white" :class="{ show: flip }">
        <button class="close p-3" @click="closeProduct">
          <i class="fas fa-times"></i>
        </button>
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="product-slider py-3 h-100">
              <flickity ref="flickity" :options="flickityOptions">
                <div
                  class="carousel-cell w-100 h-100 d-flex justify-content-center align-items-center"
                >
                  <img
                    class="img-fluid"
                    :src="require(`@/assets/images/${product.img1}`)"
                    alt="product.name"
                  />
                </div>
                <div
                  class="carousel-cell w-100 h-100 d-flex justify-content-center align-items-center"
                >
                  <img
                    class="img-fluid"
                    :src="require(`@/assets/images/${product.img2}`)"
                    alt="product.name"
                  />
                </div>
              </flickity>
            </div>
          </div>
          <div class="col-12 col-lg-6 p-5 align-self-center">
            <div class="product-body">
              <h3 class="mb-1">{{ product.name }}</h3>
              <star-rating
                :read-only="true"
                :rating="product.rating"
                :star-size="20"
                :increment="0.1"
                :fixed-points="2"
                :show-rating="false"
                :class="'mb-3'"
              />
              <span class="price font-weight-bold text-main"
                >${{ product.price }}</span
              >
              <p class="text-muted">
                Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam
                facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum.
                Consequatur molestiae ad molestias eius unde facere est
                architecto.
              </p>
              <inc-dec :product="product" />
              <router-link
                class="go-to-product d-block text-center bg-dark text-white py-3"
                :to="{ name: 'product-page', params: { id: product.id } }"
              >
                <i class="fas fa-chevron-right pr-3"></i> Go To Product
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Flickity from "vue-flickity";
import StarRating from "vue-star-rating";
import { EventBus } from "../../main";
import IncDec from "@/components/Global/IncDec.vue";
export default {
  components: { Flickity, StarRating, IncDec },
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        autoPlay: false
      },
      product: null,
      flip: false
    };
  },
  methods: {
    closeProduct() {
      this.flip = false;
      setTimeout(() => {
        this.product = null;
      }, 100);
    }
  },
  created() {
    EventBus.$on("openPreview", product => {
      this.product = product;
      setTimeout(() => {
        this.flip = true;
      }, 100);
    });
  },
  updated() {
    if (this.flip === true) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }
};
</script>

<style>
.overlay {
  perspective: 2000px;
}
.preview {
  transform: rotate3d(0, 1, 0, -60deg);
  width: 70%;
  color: #000;
  opacity: 0.1;
  transition: 0.8s ease;
}
.preview.show {
  transform: none;
  opacity: 1;
}
.product-slider > div {
  height: 500px;
  overflow: hidden;
}
.preview .price {
  font-family: "Rubik", sans-serif;
  font-size: 23px;
}
p {
  margin: 10px 0 30px;
  font-size: 14px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
a.add-cart {
  padding: 7px 40px;
}
.flickity-page-dots {
  bottom: 0 !important;
}

.go-to-product i {
  animation: move 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
}
@keyframes move {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(15px);
    opacity: 0;
  }
}
@media (max-width: 992px) {
  .preview {
    width: 80%;
    height: 50%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .product-slider > div {
    height: 400px;
    overflow: visible;
  }
  .flickity-page-dots {
    bottom: -30px !important;
  }
}
</style>

<template>
  <div class="product-page">
    <div class="container">
      <!-- Director -->
      <div class="dir text-center mt-3">
        <i class="fas fa-home mr-1"></i>
        <router-link class="text-white" :to="{ name: 'Home' }"
          >Home
        </router-link>
        <span class="text-white-50">> </span>
        <router-link class="text-white" to="">Shop </router-link>
        <span class="text-white-50">> </span>
        <span class="text-white-50">{{ product ? product.name : "" }}</span>
      </div>
      <!-- Product OverView -->
      <div class="product-overview mt-5" v-if="product">
        <div class="row">
          <div class="col-12 col-md-7">
            <div class="product-image py-4 mb-5 mb-md-0 border">
              <flickity
                ref="flickity"
                :options="flickityOptions"
                :class="'h-100'"
              >
                <div
                  class="
                    carousel-cell
                    d-flex
                    justify-content-center
                    align-items-center
                    h-100
                    w-100
                  "
                >
                  <img
                    class="img-fluid"
                    :src="require(`../assets/images/${product.img1}`)"
                    alt=""
                  />
                </div>
                <div
                  class="
                    carousel-cell
                    d-flex
                    justify-content-center
                    align-items-center
                    h-100
                    w-100
                  "
                >
                  <img
                    class="img-fluid"
                    :src="require(`../assets/images/${product.img2}`)"
                    alt=""
                  />
                </div>
              </flickity>
            </div>
          </div>
          <div class="col-12 col-md-5">
            <div class="product-det">
              <span class="badge badge-success mb-2">in Stock</span>
              <h1>{{ product ? product.name : "" }}</h1>
              <star-rating
                :read-only="true"
                :rating="product.rating"
                :star-size="15"
                :increment="0.1"
                :fixed-points="2"
                :show-rating="false"
                :class="'mb-3'"
              />
              <span class="price text-main">${{ product.price }}</span>
              <p class="text-white-50 my-4">
                Ut ratione qui sunt officiis quo cum ut. Quas aliquam cum ipsam
                facere quaerat. Et et aut quibusdam deleniti nisi sunt rerum.
                Consequatur molestiae ad molestias eius unde facere est
                architecto.
              </p>

              <inc-dec :product="product" />
              <hr style="background-color: rgba(255, 255, 255, 0.2)" />
              <ul class="list-unstyled">
                <li>
                  Category:
                  <span class="text-white-50">{{ product.category }}</span>
                </li>
                <li>
                  Share:
                  <span class="social text-white-50">
                    <i class="fab fa-facebook-f pr-2"></i>
                    <i class="fab fa-twitter pr-2"></i>
                    <i class="fab fa-instagram pr-2"></i>
                    <i class="fab fa-pinterest-p pr-2"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Tabs Wrapper -->
    <div class="tabs mt-5">
      <div class="container">
        <ul
          class="
            list-unstyled
            position-relative
            d-md-flex
            justify-content-center
          "
        >
          <li class="marker d-none d-md-block" id="marker" ref="marker"></li>
          <li
            id="tab-one"
            @click="
              currentTab = 'description';
              freePosition($event);
            "
            :class="{ active: currentTab == 'description' }"
          >
            Description
          </li>
          <li
            @click="
              currentTab = 'information';
              freePosition($event);
            "
            :class="{ active: currentTab == 'information' }"
          >
            Additional Information
          </li>
          <li
            @click="
              currentTab = 'reviews';
              freePosition($event);
            "
            :class="{ active: currentTab == 'reviews' }"
          >
            Reviews
          </li>
          <li
            @click="
              currentTab = 'vendor';
              freePosition($event);
            "
            :class="{ active: currentTab == 'vendor' }"
          >
            Vendor Info
          </li>
        </ul>
      </div>
    </div>
    <hr class="bg-secondary" />
    <div class="tabs-wrapper py-5">
      <div class="container">
        <transition name="fade" appear mode="out-in" :duration="300">
          <template v-if="currentTab == 'description'">
            <description />
          </template>
          <template v-if="currentTab == 'information'">
            <information />
          </template>
          <template v-if="currentTab == 'reviews'">
            <reviews />
          </template>
          <template v-if="currentTab == 'vendor'">
            <vendor-info :rating="product.rating" />
          </template>
        </transition>
      </div>
    </div>
    <hr class="bg-secondary" />
    <!-- Related Products -->
    <div class="related-products my-5">
      <div class="container">
        <h2 class="text-center mb-5">Related Product</h2>
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-3 px-md-0"
            v-for="product in relatedProducts"
            :key="product.id"
          >
            <product :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Flickity from "vue-flickity";
import StarRating from "vue-star-rating";
import IncDec from "@/components/Global/IncDec.vue";
import Description from "@/components/SinglePage/Description.vue";
import Information from "@/components/SinglePage/Information.vue";
import VendorInfo from "@/components/SinglePage/VendorInfo.vue";
import Reviews from "@/components/SinglePage/Reviews.vue";
import Product from "@/components/Global/Product.vue";

export default {
  components: {
    Flickity,
    StarRating,
    IncDec,
    Description,
    Information,
    VendorInfo,
    Product,
    Reviews
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        autoPlay: false
      },
      id: this.$route.params.id,
      currentTab: "description"
    };
  },
  computed: {
    ...mapState(["products", "product"]),
    relatedProducts() {
      const start = Math.floor(Math.random() * (this.products.length - 7));
      const end = start + 4;
      return this.products.slice(start, end);
    }
  },
  methods: {
    freePosition(e) {
      const marker = this.$refs.marker;
      marker.style.cssText = `left: ${e.target.offsetLeft + "px"}; width: ${e
        .target.offsetWidth + "px"}`;
    }
  },
  created() {
    this.$store.dispatch("getSingleProduct", this.id);
    document.body.style.overflowY = "auto";
  },
  mounted() {
    const marker = this.$refs.marker;
    const tabOne = document.querySelector(".tabs #tab-one");
    window.onresize = () => {
      marker.style.cssText = `left: ${tabOne.offsetLeft +
        "px"}; width: ${tabOne.offsetWidth + "px"}`;
    };
    if (marker) {
      marker.style.cssText = `left: ${tabOne.offsetLeft +
        "px"}; width: ${tabOne.offsetWidth + "px"}`;
    }
  }
};
</script>

<style>
.dir a:hover {
  color: var(--main-color) !important;
}
.product-page .product-image {
  height: 80vh;
}
.product-image img {
  transform: scale(1.2);
  padding-bottom: 20px;
}

.product-page .flickity-page-dots .dot {
  background-color: var(--main-color);
}
.product-page .badge {
  font-size: 17px !important;
}
.product-det .price {
  font-family: "Rubik", sans-serif;
  font-size: 30px;
}
.product-overview .quantity .dec,
.product-overview .quantity .inc {
  color: #fff;
}
.product-overview .quantity .dec::before,
.product-overview .quantity .inc::before {
  background: #fff;
}
.quantity .dec:hover,
.quantity .inc:hover {
  color: var(--main-color);
}
.social i {
  font-size: 13px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.social i:hover {
  color: var(--main-color) !important;
}
.tabs ul li {
  color: rgba(255, 255, 255, 0.3);
  padding: 5px 30px;
  font-size: 23px;
  cursor: pointer;
  transition: 0.5s ease;
}

.tabs ul li.active,
.tabs ul li:hover {
  color: #fff;
}
.tabs ul li.marker {
  all: unset;
  position: absolute;
  bottom: -16px;
  left: 243px;
  width: 163px;
  height: 3px;
  background: var(--main-color);
  transition: 0.5s ease;
}
</style>

<template>
  <div class="best-seller mt-5">
    <div class="container">
      <div class="seller-header">
        <div class="row">
          <div class="col-12 col-md-6">
            <h1 class="section-title mb-3 mb-md-0">Best Seller</h1>
          </div>
          <div class="col-12 col-md-6 align-self-md-end">
            <ul
              class="tabs d-flex justify-content-md-end justify-content-center"
            >
              <li
                @click="currentTab = 'watches'"
                :class="{ active: currentTab == 'watches' }"
              >
                Watches
              </li>
              <li
                @click="currentTab = 'men'"
                :class="{ active: currentTab == 'men' }"
              >
                Men
              </li>
              <li
                @click="currentTab = 'women'"
                :class="{ active: currentTab == 'women' }"
              >
                Women
              </li>
              <li
                @click="currentTab = 'smartwatches'"
                :class="{ active: currentTab == 'smartwatches' }"
              >
                Smartwatches
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="products mt-5">
        <transition name="filter" mode="out-in">
          <template v-if="currentTab === 'watches'">
            <div class="row">
              <div
                class="col-12 col-md-6 col-lg-3 px-md-0"
                v-for="product in randomWatches"
                :key="product.id"
              >
                <product :product="product" />
              </div>
            </div>
          </template>
        </transition>

        <transition name="filter" mode="out-in">
          <template v-if="currentTab === 'men'">
            <div class="row">
              <div
                class="col-12 col-md-6 col-lg-3 px-md-0"
                v-for="product in menWatches"
                :key="product.id"
              >
                <product :product="product" />
              </div>
            </div>
          </template>
        </transition>

        <transition name="filter" mode="out-in">
          <template v-if="currentTab === 'women'">
            <div class="row">
              <div
                class="col-12 col-md-6 col-lg-3 px-md-0"
                v-for="product in womenWatches"
                :key="product.id"
              >
                <product :product="product" />
              </div>
            </div>
          </template>
        </transition>

        <transition name="filter" mode="out-in">
          <template v-if="currentTab === 'smartwatches'">
            <div class="row">
              <div
                class="col-12 col-md-6 col-lg-3 px-md-0"
                v-for="product in smartWatches"
                :key="product.id"
              >
                <product :product="product" />
              </div>
            </div>
          </template>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Global/Product.vue";
import { mapGetters } from "vuex";

export default {
  components: { Product },
  data() {
    return {
      currentTab: "watches"
    };
  },
  computed: {
    ...mapGetters([
      "randomWatches",
      "menWatches",
      "womenWatches",
      "smartWatches"
    ])
  }
};
</script>

<style scoped>
.tabs li {
  padding-right: 40px;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s ease-in-out;
}
.tabs li.active {
  transform: scale(1.15);
  color: var(--main-color);
}

/* filter transitoin */
.filter-enter,
.filter-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.filter-enter-active {
  transition: all 0.8s ease 0.2s;
}
.filter-leave-active {
  transition: all 0.5s ease;
}
</style>

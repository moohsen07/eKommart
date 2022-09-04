<template>
  <div
    class="nav-mobile d-lg-none"
    v-if="!this.$route.path.includes('account')"
  >
    <!-- Bottom Nav -->
    <div class="bottom-nav fixed-bottom">
      <transition name="search" mode="out-in">
        <div class="search-bar position-absolute" v-if="searchBar">
          <form class="">
            <search-widget v-model="search" />
          </form>
        </div>
      </transition>
      <div class="row">
        <div class="col-4 px-0">
          <div
            class="icons-container text-center border py-1"
            style="cursor: pointer"
          >
            <i class="fas fa-store"></i>
            <span class="d-block">Shop</span>
          </div>
        </div>
        <div class="col-4 px-0">
          <div
            class="icons-container text-center border py-1"
            style="cursor: pointer"
          >
            <i class="far fa-user"></i>
            <span class="d-block">My Account</span>
          </div>
        </div>
        <div class="col-4 px-0">
          <div
            class="icons-container text-center border py-1"
            style="cursor: pointer"
            @click="searchBar = !searchBar"
          >
            <i class="fas fa-search"></i>
            <span class="d-block">Search</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchWidget from "../Global/SearchWidget.vue";
export default {
  data() {
    return {
      searchBar: false,
      search: "",
      slide: false
    };
  },
  components: { SearchWidget },
  created() {
    this.$watch(
      "search",
      val => {
        if (val.length > 0) {
          this.searchBar = true;
        } else {
          this.searchBar = false;
        }
      },
      { immediate: true }
    );
  }
};
</script>

<style>
.bottom-nav {
  background-color: #252525;
  box-shadow: 0px 0px 20px 5px #3a3a3a;
}

.search-bar {
  top: -87px;
  width: 100%;
  background-color: #252525;
  padding: 20px;
}
.icons-container span {
  letter-spacing: 1px;
}

/* slide transition */
.search-enter,
.search-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.search-enter-active,
.search-leave-active {
  transition: all 0.2s ease;
}
</style>

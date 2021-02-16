<template>
  <div class="nav-mobile d-lg-none">
    <!-- Upper Nav -->
    <div class="upper-nav fixed-top py-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-3">
            <div
              class="burger-button"
              @click="openSideNav()"
              style="cursor: pointer"
            >
              <div class="lines"></div>
              <div class="lines"></div>
              <div class="lines"></div>
            </div>
          </div>
          <div class="col-6">
            <div class="logo text-center">
              <router-link to="/"
                ><img
                  class="img-fluid w-75"
                  src="@/assets/images/logo-dark.svg"
                  alt=""
              /></router-link>
            </div>
          </div>
          <div class="col-3">
            <div class="cart-icon text-center">
              <i
                class="fas fa-shopping-basket"
                style="cursor: pointer"
                @click="openCart"
              ></i>
              <span
                class="badge badge-danger rounded-circle position-absolute"
                >{{ carts.length }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Nav -->
    <div class="bottom-nav fixed-bottom">
      <transition name="search" mode="out-in">
        <div class="search-bar position-absolute" v-if="searchBar">
          <form class="form-inline">
            <i class="fas fa-search position-absolute"></i>
            <input
              class="form-control bg-transparent border-0 w-100 pl-4 text-white-50"
              @keypress.enter.prevent=""
              v-model="search"
              placeholder="Search products"
            />
            <router-link
              :to="{ name: 'search-page', params: { search: search } }"
              class="text-white mr-3"
              >Search</router-link
            >
          </form>
        </div>
      </transition>
      <div class="row">
        <div class="col-4 px-0">
          <div
            class="icons-container text-center border py-2"
            style="cursor: pointer"
          >
            <i class="fas fa-store"></i>
            <span class="d-block">Shop</span>
          </div>
        </div>
        <div class="col-4 px-0">
          <div
            class="icons-container text-center border py-2"
            style="cursor: pointer"
          >
            <i class="far fa-user"></i>
            <span class="d-block">My Account</span>
          </div>
        </div>
        <div class="col-4 px-0">
          <div
            class="icons-container text-center border py-2"
            style="cursor: pointer"
            @click="searchBar = !searchBar"
          >
            <i class="fas fa-search"></i>
            <span class="d-block">Search</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Side Links -->
    <transition name="fade" :duration="200">
      <div
        v-if="openNav"
        class="overlay"
        @click.self="
          openNav = false;
          slide = false;
        "
      >
        <div class="side-links" :class="{ slide: slide }">
          <ul>
            <li
              @click="
                linkActive = 'home';
                openNav = false;
              "
            >
              <router-link
                class="text-white"
                :class="linkActive == 'home' ? 'active' : ''"
                to="/"
                >Home</router-link
              >
            </li>
            <li
              @click="
                linkActive = 'about';
                openNav = false;
              "
            >
              <router-link
                class="text-white"
                :class="linkActive == 'about' ? 'active' : ''"
                to=""
                >About</router-link
              >
            </li>
            <li
              @click="
                linkActive = 'shop';
                openNav = false;
              "
            >
              <router-link
                class="text-white"
                to=""
                :class="linkActive == 'shop' ? 'active' : ''"
                >Shop</router-link
              >
            </li>
            <li
              @click="
                linkActive = 'blog';
                openNav = false;
              "
            >
              <router-link
                class="text-white"
                :class="linkActive == 'blog' ? 'active' : ''"
                to=""
                >Blog</router-link
              >
            </li>
            <li
              @click="
                linkActive = 'contact';
                openNav = false;
              "
            >
              <router-link
                class="text-white"
                :class="linkActive == 'contact' ? 'active' : ''"
                to=""
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchBar: false,
      search: "",
      openNav: false,
      slide: false,
      linkActive: "home"
    };
  },
  methods: {
    openCart() {
      this.$emit("openCart");
    },
    openSideNav() {
      this.openNav = true;
      setTimeout(() => (this.slide = true), 100);
    }
  },
  computed: {
    ...mapState(["carts"])
  }
};
</script>

<style>
.nav-mobile .overlay {
  z-index: 1111111;
}
.upper-nav,
.bottom-nav {
  background-color: #252525;
  box-shadow: 0px 0px 20px 10px #202020;
}
.burger-button .lines {
  height: 2px;
  background-color: #fff;
  margin-bottom: 5px;
  transition: 0.5s ease;
}
.burger-button .lines:first-child {
  width: 25px;
}
.burger-button .lines:nth-child(2) {
  width: 15px;
}
.burger-button .lines:last-child {
  width: 5px;
}
.burger-button:hover .lines {
  background: var(--main-color);
}
.cart-icon i {
  font-size: 25px;
}
.cart-icon .badge {
  font-size: 13px;
  font-weight: lighter;
  top: -10px;
}
.search-bar {
  top: -87px;
  width: 100%;
  background-color: #252525;
  padding: 20px;
}

.icons-container i {
  font-size: 21px;
}
.icons-container span {
  letter-spacing: 1px;
}
.side-links {
  background-color: #000;
  height: 100vh;
  width: 40%;
  padding: 50px 20px;
  transform: translateX(-100%);
  transition: 0.3s ease;
}
.side-links.slide {
  transform: translateX(0);
}
.side-links li {
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  letter-spacing: 1px;
  cursor: pointer;
}
.side-links li a {
  transition: 0.5s ease;
}
.side-links li a:hover,
.side-links li a.active {
  color: var(--main-color) !important;
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

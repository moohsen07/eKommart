<template>
  <div class="base-nav">
    <div class="container">
      <div class="base-nav__upper row py-4 align-items-center">
        <!-- burger button -->
        <div class="col-3 d-block d-md-none">
          <button
            class="burger-button bg-transparent border-0"
            @click="baseNavbar = true"
            style="cursor: pointer"
          >
            <div class="lines"></div>
            <div class="lines"></div>
            <div class="lines"></div>
          </button>
        </div>
        <!-- Logo -->
        <div class="col-6 col-md-3">
          <div class="base-nav__logo">
            <router-link :to="{ name: 'Home' }">
              <img
                src="@/assets/images/logo-dark.svg"
                class="img-fluid"
                width="165px"
                alt=""
              />
            </router-link>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="col-md-6 d-none d-md-block">
          <div class="base-nav__search">
            <form class="my-2 my-lg-0">
              <search-widget v-model="search" />
            </form>
          </div>
        </div>
        <!-- Icons -->
        <div class="col-3">
          <div class="base-nav__icons">
            <div
              class="
                shopping-icons
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <i class="far fa-user pr-4 d-none d-md-block"></i>
              <div class="cart-icon d-flex position-relative">
                <i
                  class="fas fa-shopping-basket"
                  style="cursor: pointer"
                  @click="openCart"
                ></i>
                <span
                  class="badge badge-danger rounded-circle position-absolute"
                  >{{ carts.length }}</span
                >
                <div class="subtotal d-none d-md-block pl-3">
                  <span v-if="subTotal > 0">${{ subTotal }}</span>
                  <span v-else>$0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Links -->
    <transition name="fade-in">
      <div
        class="nav base-nav__links-wrapper"
        v-show="baseNavbar"
        @click.self="baseNavbar = false"
      >
        <transition name="slide">
          <ul
            class="
              list-unstyled
              mb-0
              base-nav__links--list
              d-flex
              justify-content-center
              w-100
              position-relative
            "
            v-if="baseNavbar"
          >
            <!-- <li class="close-icon position-absolute d-md-none">
              <i
                class="fas fa-times"
                @click="baseNavbar = false"
                style="cursor: pointer"
              ></i>
            </li> -->
            <li class="nav-item px-3 py-2 p-md-3">
              <router-link class="text-white" to="/">Home</router-link>
            </li>
            <li
              class="
                nav-item
                px-3
                py-2
                p-md-3
                position-relative
                nav-item__collapse
              "
              @click="openCollapseMenu"
            >
              <div class="d-flex justify-content-between align-items-center">
                <router-link class="text-white" to="">Category</router-link>
                <i
                  class="fas fa-chevron-down pl-2"
                  style="transition: 0.3s ease-in-out"
                ></i>
              </div>
              <mega-menu />
            </li>
            <li class="nav-item px-3 py-2 p-md-3">
              <router-link class="text-white" to="">Shop</router-link>
            </li>
            <li class="nav-item px-3 py-2 p-md-3">
              <router-link class="text-white" to="">Blog</router-link>
            </li>
            <li class="nav-item px-3 py-2 p-md-3">
              <router-link class="text-white" to="">Contact</router-link>
            </li>
          </ul>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import SearchWidget from "../Global/SearchWidget.vue";
import MegaMenu from "./MegaMenu.vue";

export default {
  components: { SearchWidget, MegaMenu },
  data() {
    return {
      search: "",
      baseNavbar: false
    };
  },

  methods: {
    openCart() {
      this.$emit("openCart");
    },
    changeBaseNavbarStatus() {
      window.innerWidth < 768
        ? (this.baseNavbar = false)
        : (this.baseNavbar = true);
    },
    openCollapseMenu(e) {
      let target = e.target.closest(".nav-item__collapse");
      target.classList.toggle("open");
    }
  },
  computed: {
    ...mapState(["carts"]),
    ...mapGetters(["subTotal"])
  },
  created() {
    this.changeBaseNavbarStatus();
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.changeBaseNavbarStatus();
    });
  }
};
</script>

<style lang="scss">
form {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 4px 15px;
  i {
    color: var(--main-color);
  }
  input {
    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
  }
  a,
  button {
    background-color: var(--main-color);
    color: #fff;
    padding: 4px 25px;
    border-radius: 4px;
  }
}

.base-nav {
  .base-nav__upper {
    .burger-button {
      .lines {
        height: 2px;
        background-color: #fff;
        margin-bottom: 5px;
        transition: 0.5s ease;
        &:first-child {
          width: 25px;
        }
        &:nth-child(2) {
          width: 15px;
        }
        &:last-child {
          width: 5px;
        }
      }
    }
    .burger-button:hover .lines {
      background: var(--main-color);
    }
    .shopping-icons {
      i {
        font-size: 25px;
      }
      .badge {
        font-size: 13px;
        font-weight: lighter;
        top: -15px;
        left: 20px;
      }
    }
  }

  .base-nav__links-wrapper {
    background-color: var(--main-color);
    .nav-item {
      cursor: pointer;
      > a {
        color: #fff;
        font-size: 17px;
        &:hover {
          text-decoration: none;
        }
      }
      &.open {
        > div > a {
          color: var(--main-color) !important;
        }
        .fas {
          transform: rotate(180deg);
          color: var(--main-color) !important;
        }
        .mega-menu {
          height: 250px;
          margin-top: 16px;
          padding-top: 16px;
          padding-bottom: 16px;
        }
      }
      @media (min-width: 768px) {
        &:hover {
          .mega-menu {
            opacity: 1;
            visibility: visible;
            margin-top: 0;
          }
        }
      }
    }
    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      z-index: 6;
      .base-nav__links--list {
        flex-direction: column;
        background: #252525;
        width: max-content !important;
        justify-content: flex-start !important;
        min-width: 250px;
        box-shadow: 0px 0px 20px 0px #000;
        height: 100vh;
        overflow-y: scroll;
        padding: 24px 0;
        .close-icon {
          top: 0;
          right: 0;
          margin: 16px;
        }
      }
    }
  }
}
.fade-in-enter-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-in-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>

<template>
  <div class="base-nav d-none d-lg-block">
    <div class="container">
      <div class="row">
        <!-- Logo -->
        <div class="col-3">
          <router-link class="navbar-brand" :to="{ name: 'Home' }">
            <img src="@/assets/images/logo-dark.svg" width="165px" alt="" />
          </router-link>
        </div>
        <!-- Search Bar -->
        <div class="col-6">
          <form class="form-inline my-2 my-lg-0">
            <i class="fas fa-search position-absolute"></i>
            <input
              class="
                form-control
                bg-transparent
                border-0
                w-100
                pl-4
                text-white-50
              "
              @keypress.enter.prevent="redirect"
              v-model="search"
              placeholder="Search products"
            />
            <button class="text-white" @click.prevent="redirect">Search</button>
          </form>
        </div>
        <!-- Icons -->
        <div class="col-3 align-self-center">
          <div
            class="
              shopping-icons
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <i class="far fa-user pr-4"></i>
            <div class="cart-icon">
              <i
                class="fas fa-shopping-basket"
                style="cursor: pointer"
                @click="openCart"
              ></i>
              <span
                class="badge badge-danger rounded-circle position-absolute"
                >{{ carts.length }}</span
              >

              <span v-if="subTotal > 0" class="tottal-price pl-3"
                >${{ subTotal }}</span
              >
              <span v-else class="tottal-price pl-3">$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Links -->
    <div class="nav py-3 mt-4">
      <ul class="navbar-nav flex-row m-auto">
        <li class="nav-item active">
          <router-link class="text-white" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-white" to="">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-white" to="">Shop</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-white" to="">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-white" to="">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: ""
    };
  },

  methods: {
    openCart() {
      this.$emit("openCart");
    },
    redirect() {
      if (this.search.length > 0) {
        this.$router.push({
          name: "search-page",
          query: { search: this.search }
        });
      }
    }
  },
  computed: {
    ...mapState(["carts"]),
    ...mapGetters(["subTotal"])
  },
  created() {
    this.$watch(
      () => this.$route.name,
      newVal => {
        if (newVal != "search-page") {
          this.search = "";
        }
      }
    );
  }
};
</script>

<style>
form {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 4px 15px;
}

form i {
  color: var(--main-color);
}
form input:focus {
  outline: none !important;
  box-shadow: none !important;
}
form a,
form button {
  position: absolute;
  right: 25px;
  background-color: var(--main-color);
  color: #fff;
  padding: 4px 25px;
  border-radius: 4px;
}

.shopping-icons i {
  font-size: 25px;
}
.shopping-icons .badge {
  font-size: 13px;
  font-weight: lighter;
  top: -15px;
}
.nav {
  background-color: var(--main-color);
}
.nav a {
  color: #fff;
  padding: 4px 20px;
  font-size: 17px;
}
.nav a:hover {
  text-decoration: none;
}
</style>

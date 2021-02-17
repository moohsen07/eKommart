import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    product: null,
    carts: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_SINGLE_PRODUCT(state, singleProduct) {
      state.product = singleProduct;
    },
    ADD_TO_CART(state, newItem) {
      const index = state.carts.findIndex(item => item.id === newItem.id);
      if (index === -1) {
        state.carts.push(newItem);
      } else {
        state.carts[index] = newItem;
      }
    },
    REMOVE_FROM_CART(state, product) {
      const index = state.carts.findIndex(item => item.id === product.id);
      state.carts.splice(index, 1);
    }
  },
  actions: {
    getProducts({ commit }) {
      axios
        .get("https://ekommart-8b51d-default-rtdb.firebaseio.com/products.json")
        .then(response => {
          commit("SET_PRODUCTS", response.data);
        });
    },
    getSingleProduct({ commit }, productId) {
      axios
        .get(
          `https://ekommart-8b51d-default-rtdb.firebaseio.com/products/${productId -
            1}.json`
        )
        .then(response => {
          commit("SET_SINGLE_PRODUCT", response.data);
        });
    },
    addToCart({ commit }, payload) {
      commit("ADD_TO_CART", payload);
    },
    removeFromCart({ commit }, payload) {
      commit("REMOVE_FROM_CART", payload);
    }
  },
  getters: {
    randomWatches(state) {
      let randomWatches = state.products.slice(0, 4);
      return randomWatches;
    },
    menWatches(state) {
      let menWatches = state.products.filter(product => {
        return product.category == "men";
      });
      return menWatches;
    },
    womenWatches(state) {
      let womenWatches = state.products.filter(product => {
        return product.category == "women";
      });
      return womenWatches;
    },
    smartWatches(state) {
      let smartWatches = state.products.filter(product => {
        return product.category == "smartwatches";
      });
      return smartWatches;
    },
    subTotal(state) {
      let total = state.carts.reduce((accumulator, currentValue) => {
        const sum = accumulator + currentValue.price * currentValue.quantity;
        const str = sum.toString();
        const result = parseFloat(str.slice(0, 6));
        return result;
      }, 0);
      return total;
    }
  }
});

<template>
  <div class="search-widget d-flex align-items-center">
    <i class="fas fa-search"></i>
    <input
      class="
        form-control
        bg-transparent
        border-0
        w-100
        pl-2
        text-white-50
        flex-grow-1
      "
      @keypress.enter.prevent="redirect"
      :value="value"
      @input="updateValue"
      placeholder="Search products"
    />
    <button class="text-white" @click.prevent="redirect">Search</button>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
    redirect() {
      if (this.value.length > 0) {
        this.$router.push({
          name: "search-page",
          query: { search: this.value }
        });
      }
    }
  },
  created() {
    this.$watch(
      () => this.$route.name,
      newVal => {
        if (newVal != "search-page") {
          this.$emit("input", "");
        } else {
          this.$emit("input", this.$route.query.search);
        }
      }
    );
  }
};
</script>

<style></style>

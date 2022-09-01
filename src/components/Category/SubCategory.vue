<template>
  <div class="category-filter">
    <div class="filter-item__title">
      <h4>Category</h4>
    </div>
    <div class="filter-item__body text-capitalize">
      <div class="filter-item__body--categories">
        <ul class="list-unstyled">
          <li
            v-for="cat in categories"
            :key="cat.id"
            class="category-item py-1"
          >
            <router-link to="" class="text-white">
              {{ cat.name }}
            </router-link>
            <ul class="list-unstyled category-subcategory ml-3">
              <li v-for="subcat in cat.subCategory" :key="subcat.id">
                <router-link to="" class="text-secondary">
                  {{ subcat.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories"]
};
</script>

<style lang="scss">
.filter-item__body--categories {
  .category-item {
    .category-subcategory {
      a {
        transition: 0.1s ease-in-out;
        &:hover {
          color: var(--main-color) !important;
        }
      }
    }
  }
}
</style>

<template>
  <div class="category-page">
    <div class="container-fluid">
      <div class="category-page__banner mt-4"></div>
      <div class="category-page__content my-4">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3">
            <div class="category-page__content--filter rounded p-4">
              <sub-category
                :categories="categories"
                class="filter-item border-bottom border-secondary"
              />
              <tags-filter :tags="tags" class="filter-item mt-3" />
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-9 mt-3 mt-md-0">
            <div class="category-page__content--products rounded p-4">
              <div class="content__products--header">
                <div class="category-name">
                  <h3>Men's Fashion</h3>
                </div>
              </div>
              <div class="products-list my-3">
                <div class="row">
                  <div
                    class="col-md-6 col-lg-4 mb-4"
                    v-for="product in 9"
                    :key="product"
                  >
                    <product
                      :product="{
                        category: 'men',
                        id: 1,
                        img1: 'Black_Brown1.png',
                        img2: 'Black_Brown2.png',
                        name: 'Black/Brown Leather Barkeley 38',
                        price: 177.63,
                        quantity: 1,
                        rating: 4
                      }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubCategory from "../components/Category/SubCategory.vue";
import TagsFilter from "../components/Category/TagsFilter.vue";
import Product from "../components/Global/Product.vue";
export default {
  data() {
    return {
      categories: [
        {
          name: "men's fashion",
          id: 1,
          subCategory: [
            {
              name: "men's accessories",
              id: 3
            },
            {
              name: "clothing",
              id: 4
            },
            {
              name: "jewelry",
              id: 1
            },
            {
              name: "bags",
              id: 5
            },
            {
              name: "watches",
              id: 8
            }
          ]
        },
        {
          name: "kids's fashion",
          id: 3
        },
        {
          name: "women's fashion",
          id: 4,
          subCategory: [
            {
              name: "women's accessories",
              id: 3
            },
            {
              name: "clothing",
              id: 4
            },
            {
              name: "jewelry",
              id: 1
            },
            {
              name: "bags",
              id: 5
            },
            {
              name: "watches",
              id: 8
            }
          ]
        },
        {
          name: "baby",
          id: 2
        }
      ],
      tags: ["bestseller", "new", "sale", "top rated", "trending"]
    };
  },
  components: { SubCategory, TagsFilter, Product }
};
</script>

<style lang="scss">
.category-page {
  .category-page__banner {
    background-image: url(../assets/images/bg2.jpg);
    background-size: cover;
    background-position: top;
    height: 20vh;
    overflow: hidden;
    @media (min-width: 768px) {
      height: 40vh;
    }
  }
  .category-page__content {
    .category-page__content--filter,
    .category-page__content--products {
      background-color: #141414;
    }
    @media (min-width: 768px) {
      .category-page__content--filter {
        position: sticky;
        top: 24px;
      }
    }
  }
}
</style>

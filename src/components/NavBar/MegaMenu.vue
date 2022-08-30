<template>
  <div class="mega-menu position-absolute d-flex">
    <div class="mega-menu__item">
      <div class="mega-menu__item--title text-primary text-uppercase">
        <h6>Category</h6>
      </div>
      <div class="mega-menu__item--content">
        <ul class="list-unstyled">
          <li class="py-1">
            <router-link class="text-white" to="/">Category 1</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 2</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 3</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 4</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 5</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="mega-menu__item">
      <div class="mega-menu__item--title text-primary text-uppercase">
        <h6>Category</h6>
      </div>
      <div class="mega-menu__item--content">
        <ul class="list-unstyled">
          <li class="py-1">
            <router-link class="text-white" to="/">Category 1</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 2</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 3</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 4</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 5</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="mega-menu__item">
      <div class="mega-menu__item--title text-primary text-uppercase">
        <h6>Category</h6>
      </div>
      <div class="mega-menu__item--content">
        <ul class="list-unstyled">
          <li class="py-1">
            <router-link class="text-white" to="/">Category 1</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 2</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 3</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 4</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 5</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="mega-menu__item">
      <div class="mega-menu__item--title text-primary text-uppercase">
        <h6>Category</h6>
      </div>
      <div class="mega-menu__item--content">
        <ul class="list-unstyled">
          <li class="py-1">
            <router-link class="text-white" to="/">Category 1</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 2</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 3</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 4</router-link>
          </li>
          <li class="py-1">
            <router-link class="text-white" to="/">Category 5</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mega-menu {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--secondary-color);
  width: max-content;
  z-index: 5;
  padding: 16px 32px;
  gap: 4rem;
  margin-top: 24px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  .mega-menu__item {
    .mega-menu__item--title {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 60%;
        height: 1px;
        background-color: var(--main-color);
      }
    }
  }
}
</style>

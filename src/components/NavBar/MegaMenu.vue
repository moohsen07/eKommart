<template>
  <div class="mega-menu">
    <div class="mega-menu__item">
      <div class="mega-menu__item--title text-uppercase">
        <router-link to="" class="text-primary">Category</router-link>
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
      <div class="mega-menu__item--title text-uppercase">
        <router-link to="" class="text-primary">Category</router-link>
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
      <div class="mega-menu__item--title text-uppercase">
        <router-link to="" class="text-primary">Category</router-link>
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
      <div class="mega-menu__item--title text-uppercase">
        <router-link to="" class="text-primary">Category</router-link>
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
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 0px;
  padding-left: 16px;
  padding-right: 16px;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: 0.3s ease-in-out;

  @media (min-width: 768px) {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--secondary-color);
    width: max-content;
    z-index: 5;
    padding: 16px 32px;
    gap: 4rem;
    margin-top: 24px;
    height: max-content;
    box-shadow: none;
    flex-direction: row;
    opacity: 0;
    visibility: hidden;
  }
  .mega-menu__item {
    .mega-menu__item--title {
      position: relative;
      display: inline-block;
      margin-bottom: 8px;
      &::before {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 60%;
        height: 1px;
        background-color: var(--main-color);
      }
      a {
        &:hover {
          color: var(--main-color) !important;
        }
      }
    }
    .mega-menu__item--content {
      li {
        transition: 0.3s ease-in-out;
        &:hover {
          transform: translateX(8px);
        }
      }
    }
  }
}
</style>

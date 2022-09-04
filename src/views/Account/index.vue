<template>
  <div class="account">
    <transition name="fade">
      <div class="container">
        <main class="rounded shadow">
          <router-view />
        </main>
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.account {
  main {
    margin: 24px auto;
    padding: 24px;
    background: #1c1c1c;
    @media (min-width: 768px) {
      max-width: 750px;
    }
    input.form-control {
      border: 1px solid rgba(255, 255, 255, 0.2);
      &:focus {
        border-color: var(--main-color);
        color: var(--main-color) !important;
      }
    }
  }
}
</style>

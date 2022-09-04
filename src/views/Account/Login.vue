<template>
  <div class="login">
    <div class="login-form">
      <h2 class="text-uppercase font-weight-bold mb-3">Login</h2>
      <!-- don't have account -->
      <div
        class="d-flex align-items-center mb-3"
        style="text-decoration: underline"
      >
        <span class="text-uppercase font-weight-bold mr-2"
          >Don't have an account?</span
        >
        <router-link
          to="/account/register"
          class="text-uppercase font-weight-bold text-primary"
          >Register</router-link
        >
      </div>
      <form @submit.prevent="login" class="px-0 border-0">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control bg-transparent text-white-50"
            id="email"
            placeholder="Enter email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control bg-transparent text-white-50"
            id="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <!-- forget password -->
        <div class="form-group">
          <router-link
            to="forget-password"
            class="forget-password bg-transparent px-0 d-block"
          >
            Forget Password ?
          </router-link>
        </div>
        <button type="submit" class="text-uppercase d-block w-100">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login-form {
  .forget-password {
    text-decoration: underline;
    &:hover {
      color: #fff !important;
    }
  }
}
</style>

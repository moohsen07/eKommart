<template>
  <div class="rigster">
    <div class="rigster-form">
      <h2 class="text-uppercase font-weight-bold mb-3">Register</h2>
      <!-- already have account -->
      <div
        class="d-flex align-items-center mb-3"
        style="text-decoration: underline"
      >
        <span class="text-uppercase font-weight-bold mr-2"
          >Already have an account?</span
        >
        <router-link
          to="/account/login"
          class="text-uppercase font-weight-bold text-primary"
          >Login</router-link
        >
      </div>
      <form @submit.prevent="register" class="px-0 border-0">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control bg-transparent text-white-50"
            id="name"
            placeholder="Enter name"
            required
            v-model="name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control bg-transparent text-white-50"
            id="email"
            placeholder="Enter email"
            required
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
            required
            v-model="password"
          />
        </div>
        <div class="form-group">
          <label for="password">Confirm Password</label>
          <input
            type="password"
            class="form-control bg-transparent text-white-50"
            id="password"
            placeholder="Confirm Password"
            required
            v-model="confirmPassword"
          />
        </div>
        <button type="submit" class="text-uppercase d-block w-100" disabled>
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

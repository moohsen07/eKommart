<template>
  <div class="forget-password">
    <h1 class="text-white">Forget Password</h1>
    <p class="text-white-50">
      Enter your email address or phone to reset your password
    </p>
    <transition-group name="fade" appear mode="out-in">
      <div class="forget-password__enter-cord" key="enter-cord" v-if="!otpForm">
        <form @submit.prevent="forgetPassword" class="px-0 border-0">
          <div class="form-group">
            <label for="email - phone">Email - phone</label>
            <input
              type="email"
              class="form-control bg-transparent text-white-50"
              id="email"
              placeholder="Enter email or phone"
              required
              v-model="email"
            />
          </div>
          <button type="submit" class="text-uppercase d-block w-100">
            Reset Password
          </button>
        </form>
      </div>
      <!-- otp -->
      <div class="forget-password__otp" key="otp" v-else>
        <form @submit.prevent="verifyOtp" class="px-0 border-0">
          <div class="form-group">
            <label for="otp">OTP</label>
            <div class="form-group__otp-inputs d-flex">
              <input
                type="text"
                class="form-control bg-transparent text-white-50"
                id="otp"
                required
                v-model="otp[0]"
              />
              <input
                type="text"
                class="form-control bg-transparent text-white-50"
                id="otp"
                required
                v-model="otp[1]"
              />
              <input
                type="text"
                class="form-control bg-transparent text-white-50"
                id="otp"
                required
                v-model="otp[2]"
              />
              <input
                type="text"
                class="form-control bg-transparent text-white-50 text-center"
                id="otp"
                required
                v-model="otp[3]"
              />
            </div>
          </div>
          <button type="submit" class="text-uppercase d-block w-100">
            Verify OTP
          </button>
        </form>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otpForm: true,
      otp: []
    };
  }
};
</script>

<style lang="scss">
.forget-password {
  .form-group__otp-inputs {
    max-width: 220px;
    margin: auto;
    input {
      height: 52px;
      margin-right: 10px;
      text-align: center;
    }
  }
}
</style>

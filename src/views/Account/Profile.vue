<template>
  <div class="profile">
    <div class="row align-items-center">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="profile__picture">
          <img
            src="../../assets/images/ghost.png"
            class="img-fluid rounded-circle"
            alt="User Profile Picture"
          />
          <div class="profile__change-picture mt-4">
            <!-- upload img -->
            <input
              type="file"
              id="file"
              ref="file"
              style="display: none"
              @change="onFileChange"
            />
            <label
              for="file"
              class="profile__change-picture--box d-flex flex-column"
            >
              <i class="fas fa-upload"></i>
              <span>Upload Image</span>
            </label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-9 mt-3 mt-md-0">
        <div class="profile__info">
          <div class="profile__info--header">
            <h3>Profile Information</h3>
          </div>
          <div class="profile__info--content">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control bg-transparent text-white-50"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control bg-transparent text-white-50"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input
                    type="text"
                    class="form-control bg-transparent text-white-50"
                    id="phone"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    class="form-control bg-transparent text-white-50"
                    id="address"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <!-- city select box -->
                <div class="form-group">
                  <label for="city">City</label>
                  <select
                    class="form-control bg-transparent text-white-50"
                    id="city"
                  >
                    <option value="1">New York</option>
                    <option value="2">Los Angeles</option>
                    <option value="3">Chicago</option>
                    <option value="4">Houston</option>
                    <option value="5">Philadelphia</option>
                    <option value="6">Phoenix</option>
                  </select>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <!-- country select box -->
                <div class="form-group">
                  <label for="country">Country</label>
                  <select
                    class="form-control bg-transparent text-white-50"
                    id="country"
                  >
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
              </div>
            </div>
            <app-button>Save Changes</app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/Global/AppButton.vue";
export default {
  components: {
    AppButton
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      console.log(file);
    }
  }
};
</script>

<style lang="scss">
.profile {
  .profile__picture {
    img {
      display: block;
      @media (max-width: 600px) {
        width: 150px;
        text-align: center;
        margin: 0 auto;
      }
    }
    .profile__change-picture {
      padding: 8px;
      border: 1px dashed#ccc;
      .profile__change-picture--box {
        cursor: pointer;
        color: #ccc;
        text-align: center;
      }
    }
  }
}
</style>

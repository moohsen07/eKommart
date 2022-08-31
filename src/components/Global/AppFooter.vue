<template>
  <footer>
    <hr class="bg-secondary m-0" />
    <div class="container">
      <div class="row py-4">
        <div class="col-12 col-md-3 text-center text-md-left">
          <div class="our-store">
            <span class="text-uppercase font-weight-bold">Our Store</span>
            <div class="row">
              <div class="col-12 col-lg-6">
                <ul>
                  <li class="text-white-50 pt-3">New York</li>
                  <li class="text-white-50 pt-3">London SF</li>
                  <li class="text-white-50 pt-3">Cockfosters BP</li>
                  <li class="text-white-50 pt-3">Los Angels</li>
                </ul>
              </div>
              <div class="col-12 col-lg-6">
                <ul>
                  <li class="text-white-50 pt-3">Chicago</li>
                  <li class="text-white-50 pt-3">Las Vigas</li>
                  <li class="text-white-50 pt-3">Tixas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 align-self-center my-5 my-md-0">
          <div class="det text-center">
            <img
              class="img-fluid w-50"
              src="@/assets/images/logo-dark.svg"
              alt=""
            />
            <div class="tel d-flex justify-content-center mt-4">
              <i
                class="fas fa-phone-volume text-main mr-3 align-self-center"
              ></i>
              <div>
                <span class="d-block text-white-50"
                  >Got Questions ? Call us 24/7!</span
                >
                <span class="tel-num text-main">+633 497-188-8553</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3 text-center text-md-left">
          <div class="info">
            <span class="text-uppercase font-weight-bold">Information</span>
            <div class="row">
              <div class="col-12 col-lg-6">
                <ul>
                  <li class="text-white-50 pt-3">About Us</li>
                  <li class="text-white-50 pt-3">Delivery Information</li>
                  <li class="text-white-50 pt-3">Privacy Policy</li>
                  <li class="text-white-50 pt-3">Terms & Conditions</li>
                </ul>
              </div>
              <div class="col-12 col-lg-6">
                <ul>
                  <li class="text-white-50 pt-3">My Account</li>
                  <li class="text-white-50 pt-3">Order History</li>
                  <li class="text-white-50 pt-3">Wish List</li>
                  <li class="text-white-50 pt-3">My Personal Info</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-2 mb-3 mb-lg-0">
            <div
              class="
                sign-up
                d-flex
                align-items-center
                justify-content-center justify-content-md-start
              "
            >
              <i class="fas fa-envelope-open-text mr-3"></i>
              <span class="text-uppercase">Sign Up To NewSletter </span>
            </div>
          </div>
          <div
            class="
              col-12 col-md-6 col-lg-3
              text-center text-md-left
              mb-3 mb-lg-0
            "
          >
            <span class="text-white-50"
              >Subscribe to the weekly newsletter for all the latest
              updates</span
            >
          </div>
          <div
            class="
              col-12 col-md-6 col-lg-5
              text-center text-md-left
              mb-3 mb-lg-0
            "
          >
            <form class="d-flex justify-content-between">
              <input
                class="form-control bg-transparent border-0"
                type="search"
                placeholder="Your E-mail"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div
            class="
              col-12 col-md-6 col-lg-2
              text-center text-lg-right
              align-self-center
            "
          >
            <div class="social-icons">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest-p"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer li {
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}
footer li:hover {
  color: var(--main-color) !important;
}
footer .tel i {
  font-size: 35px;
}
footer .tel span:not(.tel-num) {
  font-size: 14px;
}
footer .tel .tel-num {
  font-family: "Rubik", sans-serif;
  font-size: 17px;
}
.footer {
  background-color: #1c1c1c;

  border-top: 1px solid rgba(136, 136, 136, 0.226);
  border-bottom: 1px solid rgba(136, 136, 136, 0.226);
}
.footer .sign-up i {
  font-size: 30px;
}
.footer .social-icons i {
  width: 30px;
  height: 30px;
  margin-right: 8px;
  text-align: center;
  line-height: 30px;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
.footer .social-icons i:hover {
  color: var(--main-color);
}
</style>

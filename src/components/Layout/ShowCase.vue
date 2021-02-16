<template>
  <div class="show-case">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-4">
          <div class="cat mb-3 mb-lg-0" id="cat1">
            <div
              class="cat-inner d-flex flex-column justify-content-between h-100"
            >
              <h2 class="text-uppercase font-weight-bold">
                New <br />
                Collection
              </h2>
              <a href="#" class="text-white">Shop Collection</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="cat mb-3 mb-lg-0" id="cat2">
            <div
              class="cat-inner d-flex flex-column justify-content-between h-100"
            >
              <h2 class="text-uppercase font-weight-bold text-dark">
                Simple <br />
                Elegance
              </h2>
              <a href="#" class="text-dark">Shop Collection</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="cat mb-3 mb-lg-0" id="cat3">
            <div
              class="cat-inner d-flex flex-column justify-content-between h-100"
            >
              <h2 class="text-uppercase font-weight-bold text-muted">
                Special <br />
                Edition
              </h2>
              <a href="#" class="text-muted">Shop Collection</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.show-case {
  margin-top: -40px;
}

.cat-inner a {
  text-decoration: underline;
  font-size: 17px;
  transition: 0.5s;
}
.cat-inner a:hover {
  color: var(--main-color) !important;
}
.show-case .cat {
  height: 300px;
  padding: 40px 40px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.show-case #cat1 {
  background-image: url("../../assets/images/cat1.jpg");
}
.show-case #cat2 {
  background-image: url("../../assets/images/cat2.jpg");
}
.show-case #cat3 {
  background-image: url("../../assets/images/cat3.jpg");
}
</style>

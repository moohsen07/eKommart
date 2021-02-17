<template>
  <div class="slider">
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <div class="container">
          <div class="carousel-text text-center rl">
            <h2 class="text-uppercase font-weight-bold">
              The Icon <br />
              Rolex
            </h2>
            <span class="text-uppercase font-weight-bold position-relative"
              >Up to 40% off</span
            >
            <br />
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div class="carousel-bg"></div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <div class="carousel-text text-center ud">
            <h2 class="text-uppercase font-weight-bold">
              Grand <br />
              Sale
            </h2>
            <span class="text-uppercase font-weight-bold position-relative"
              >Up to 40% off</span
            >
            <br />
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div class="carousel-bg"></div>
      </div>
      <div class="carousel-cell">
        <div class="container">
          <div class="carousel-text text-center rl">
            <h2 class="text-uppercase font-weight-bold">
              Camaro <br />
              Heuer
            </h2>
            <span class="text-uppercase font-weight-bold position-relative"
              >Up to 40% off</span
            >
            <br />
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div class="carousel-bg"></div>
      </div>
    </flickity>
  </div>
</template>

<script>
import Flickity from "vue-flickity";
export default {
  components: { Flickity },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: 3000
      }
    };
  }
};
</script>

<style>
.carousel-cell {
  width: 100vw;
  height: 80vh;
  overflow: hidden;
}
.carousel-text {
  position: absolute;
  top: 50%;
  z-index: 1;
  opacity: 0;
  transition: 1s ease 0.3s;
}
.rl {
  transform: translate(-100%, -50%);
}
.carousel-cell.is-selected .rl {
  transform: translate(0, -50%);
  opacity: 1;
}
.ud {
  left: 50% !important;
  transform: translate(-50%, -100%);
}
.carousel-cell.is-selected .ud {
  transform: translate(-50%, -50%);
  opacity: 1;
}
.carousel-cell .carousel-text h2 {
  color: #fff;
  font-size: 100px;
}
.carousel-cell .carousel-text span {
  color: #fff;
  font-size: 25px;
}
@media (max-width: 992px) {
  .carousel-text {
    left: 0;
    width: 100%;
  }
}
@media (max-width: 768px) {
  .carousel-cell .carousel-text h2 {
    font-size: 80px;
    text-align: center;
  }
}
.carousel-text span::before {
  content: "";
  position: absolute;
  top: 65%;
  left: -60px;
  width: 50px;
  height: 2px;
  background-color: #fff;
}
.carousel-text span::after {
  content: "";
  position: absolute;
  top: 65%;
  right: -60px;
  width: 50px;
  height: 2px;
  background-color: #fff;
}
.carousel-text a {
  background-color: #fff;
  color: #000;
  font-size: 15px;
  display: inline-block;
  text-decoration: none;
  margin-top: 30px;
  padding: 8px 30px;
  border-radius: 5px;
  transition: 0.5s;
}
.carousel-text a:hover {
  text-decoration: none;
  background-color: var(--main-color);
  color: #000;
}
.carousel-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transform: scale(1.5);
  transition: 0.5s;
}
.carousel-cell:first-of-type .carousel-bg {
  background-image: url("../../assets/images/bg1.jpg");
}
.carousel-cell:nth-of-type(2) .carousel-bg {
  background-image: url("../../assets/images/bg2.jpg");
}
.carousel-cell:last-of-type .carousel-bg {
  background-image: url("../../assets/images/bg3.jpg");
}
.carousel-cell.carousel-cell.is-selected .carousel-bg {
  transform: scale(1);
}
.flickity-button {
  background-color: transparent;
  color: #fff;
}
.flickity-button:hover {
  background-color: transparent;
  color: #fff;
}
.flickity-button svg {
  width: 40px;
  height: 40px;
}
.flickity-button path {
  d: path("M 10,50 L 60,100 L 60,95 L 15,50  L 60,5 L 60,0 Z");
}
</style>

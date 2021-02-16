<template>
  <div class="coming-soon my-5 py-4 pt-lg-0 text-center text-md-left">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <span class="text-main text-uppercase">Sale Up to 75% off%</span>
          <h1 class="font-weight-bold text-uppercase">Platinum Design</h1>
          <span class="text-muted"
            >Give Her a Symbol of your never – Ending love</span
          >
          <div
            class="d-flex align-items-center flex-column flex-md-row mt-4 flex-wrap"
          >
            <div class="count-down d-flex mb-4 mb-lg-0">
              <div class="count-down-item text-center mr-5">
                <span class="count-down-digit text-main d-block">{{
                  days
                }}</span>
                <span class="count-down-label">days</span>
              </div>
              <div class="count-down-item text-center mr-5">
                <span class="count-down-digit text-main d-block">{{
                  hours
                }}</span>
                <span class="count-down-label">hours</span>
              </div>
              <div class="count-down-item text-center mr-5">
                <span class="count-down-digit text-main d-block">{{
                  minutes
                }}</span>
                <span class="count-down-label">minutes</span>
              </div>
              <div class="count-down-item text-center mr-5">
                <span class="count-down-digit text-main d-block">{{
                  seconds
                }}</span>
                <span class="count-down-label">seconds</span>
              </div>
            </div>
            <a href="#" class="shop-now bg-main text-white">Shop now</a>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <img class="img-fluid" src="@/assets/images/plat_watch.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    };
  },
  created() {
    let countDownDate = new Date("Mar 1, 2022").getTime();
    setInterval(() => {
      let now = new Date().getTime();
      let diff = countDownDate - now;
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);
      if (days < 10) days = "0" + days;
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;
      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    }, 1000);
  }
};
</script>

<style scoped>
.coming-soon {
  background-image: url("../../assets/images/platinume_cover.jpg");
  background-position: center;
  overflow: hidden;
}
.coming-soon h1 {
  font-size: 60px;
}
.coming-soon h1 + span {
  font-size: 17px;
  letter-spacing: 2px;
}
.count-down-digit {
  font-family: "Rubik", sans-serif;
  font-size: 30px;
  font-weight: bold;
}
.count-down-label {
  font-size: 14px;
}
.shop-now {
  padding: 10px 30px;
}
img {
  transition: 0.3s ease-in-out;
}
img:hover {
  transform: scale(1.05) rotate(5deg);
}
@media (max-width: 962px) {
  .coming-soon h1 {
    font-size: 40px;
  }
  .coming-soon h1 + span {
    font-size: 13px;
  }
}
</style>

<template>
  <div class="reviews-overview">
    <div class="row">
      <!-- reviews -->
      <div class="col-lg-6">
        <transition-group name="list">
          <div class="row" v-for="(review, index) in reviews" :key="index">
            <div class="col-2">
              <img
                class="img-fluid rounded-circle"
                :src="require(`../../assets/images/${review.img}`)"
                alt=""
              />
            </div>
            <div class="col-10">
              <div class="d-flex justify-content-between">
                <span class="name">{{ review.name }}</span>
                <star-rating
                  :read-only="true"
                  :rating="review.rating"
                  :star-size="12"
                  :increment="0.1"
                  :fixed-points="2"
                  :show-rating="false"
                />
              </div>
              <span class="date text-white-50">{{ review.date }}</span>
              <p class="text-white-50 mt-3">
                {{ review.comment }}
              </p>
            </div>
          </div>
        </transition-group>
      </div>
      <div class="col-lg-6">
        <div class="form m-lg-4" ref="form">
          <h1 class="mb-4">Give Us Your Review</h1>
          <form @submit.prevent="handleSubmit" @keypress.enter="handleSubmit">
            <div class="rating mb-4">
              <label class="mb-0">Your Rating</label>
              <star-rating
                :read-only="false"
                :rating="0"
                :star-size="17"
                :increment="0.1"
                :fixed-points="2"
                :show-rating="false"
                v-model="clientReview.rating"
              />
            </div>
            <div class="review-area mb-4">
              <label>Your review</label>
              <textarea
                class="w-100 bg-transparent p-2 text-white-50"
                rows="7"
                v-model="clientReview.comment"
              ></textarea>
              <transition name="slide">
                <span v-if="commentError" class="error text-danger">{{
                  commentError
                }}</span>
              </transition>
            </div>
            <div class="d-flex mb-4">
              <div class="name-field flex-grow-1">
                <label>Name</label>
                <input
                  type="text"
                  v-model="clientReview.name"
                  class="d-block w-100 bg-transparent border p-2 text-white-50"
                />
                <transition name="slide">
                  <span v-if="nameError" class="error text-danger"
                    >Name Is Required</span
                  >
                </transition>
              </div>
              <div class="email-field ml-3 flex-grow-1">
                <label>Email</label>
                <input
                  type="email"
                  v-model="email"
                  class="d-block w-100 bg-transparent border p-2 text-white-50"
                />
                <transition name="slide">
                  <span v-if="emailError" class="error text-danger"
                    >Email Is Required</span
                  >
                </transition>
              </div>
            </div>
            <button
              class="bg-main text-white border-0 px-5 py-2 position-static"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: { StarRating },

  data() {
    return {
      clientReview: {
        name: "",
        rating: 0,
        date: "",
        comment: "",
        img: "ghost.png"
      },
      reviews: [
        {
          name: "Duc Pham",
          rating: 5,
          date: "December 29, 2020",
          comment:
            "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
          img: "review1.jpg"
        },
        {
          name: "Kenneth R. Myers",
          rating: 3,
          date: "Abril 29, 2020",
          comment:
            "The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop",
          img: "review2.jpg"
        },
        {
          name: "Ervin Arlington",
          rating: 4,
          date: "August 29, 2020",
          comment:
            "My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!",
          img: "review3.jpg"
        },
        {
          name: "Patrick M. Newman",
          rating: 3.5,
          date: "February 29, 2020",
          comment:
            "Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware",
          img: "review4.jpg"
        }
      ],
      email: "",
      commentError: "",
      nameError: "",
      emailError: ""
    };
  },
  methods: {
    handleSubmit() {
      this.commentError =
        this.clientReview.comment.length < 40
          ? "Comment Must Be More Than 40 Letters"
          : "";
      this.nameError = this.clientReview.name ? "" : "Name Is Required";
      this.emailError = this.email ? "" : "Email Is Required";

      if (
        this.clientReview.comment.length > 40 &&
        this.clientReview.name &&
        this.email
      ) {
        this.reviews = [...this.reviews, this.clientReview];
        this.email = "";
        return (this.clientReview = {
          name: "",
          rating: 0,
          date: "",
          comment: "",
          img: "ghost.png"
        });
      } else {
        let form = this.$refs.form;
        form.classList.add("shake");
        setTimeout(() => form.classList.remove("shake"), 500);
      }
    }
  },
  created() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const day = new Date().getDate();
    const month = months[new Date().getMonth()];
    const year = new Date().getFullYear();
    this.clientReview.date = `${month} ${day} ${year}`;
  }
};
</script>

<style>
.date {
  font-size: 14px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.form form {
  all: unset;
}
.form.shake {
  animation: shake 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}
@keyframes shake {
  0% {
    transform: translateX(10px);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(10px);
  }
}
.form label {
  color: #ddd;
  position: relative;
}
.form label::before {
  content: "*";
  position: absolute;
  top: 0;
  right: -10px;
  color: red;
}
.form input:focus,
.form textarea:focus {
  outline: none;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}
</style>

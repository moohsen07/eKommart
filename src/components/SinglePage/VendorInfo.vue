<template>
  <div class="vendor-info">
    <ul>
      <li class="mb-2">
        Store Name: <span class="text-white-50">Online Store</span>
      </li>
      <li class="mb-2">Vendor: <span class="text-main">admin</span></li>
      <li class="mb-2">
        Adress: <span class="text-white-50">New Zealand<br />New Zealand</span>
      </li>
      <li class="mb-2">
        <star-rating
          :read-only="true"
          :rating="rating"
          :star-size="15"
          :increment="0.1"
          :fixed-points="2"
          :show-rating="false"
          class="d-inline-block mr-2"
        />
        <span class="text-white-50">{{ rating }} rating from 706 reviews</span>
      </li>
    </ul>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  props: ["rating"],
  components: { StarRating }
};
</script>

<style></style>

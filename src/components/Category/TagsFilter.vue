<template>
  <div class="tags-filter">
    <div class="filter-item-title mb-3">
      <h4>Tags</h4>
    </div>
    <div class="tags-chips-wrapper d-flex align-items-center flex-wrap">
      <div
        class="
          tags-chip
          border
          py-1
          px-3
          text-primary
          rounded-pill
          text-capitalize
        "
        v-for="tag in tags"
        :key="tag"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tags"]
};
</script>

<style lang="scss">
.tags-chips-wrapper {
  gap: 0.5rem;
  .tags-chip {
    transition: 0.3s ease-in-out;
    border-color: var(--main-color) !important;
    cursor: pointer;
    &:hover {
      background-color: var(--main-color);
      color: #000 !important;
    }
  }
}
</style>

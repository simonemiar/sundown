<template>
  <div class="inline-flex">
    <img
      class="w-40 h-40 m-2"
      :src="image.img_src"
      @click="clickImage(image)"
      alt="space image"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    clickImage(image) {
      this.$emit("click-image", image);
    },
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport;
    },
  },
};
</script>

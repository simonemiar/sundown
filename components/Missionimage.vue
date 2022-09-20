<template>
  <div class="flex">
    <img
      class="w-40 h-40 m-2"
      :src="image.image"
      @click="updateMissionimage(image)"
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
    updateMissionimage(image) {
      console.log("test input remove");
      this.$emit("click-image", image);

      console.log(image);
    },
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport;
    },
  },
};
</script>

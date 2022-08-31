<template>
  <div class="flex">
    <img class="w-40 h-40 m-2 grid" :src="image.img_src" alt="space image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      missionimages: '',
    }
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

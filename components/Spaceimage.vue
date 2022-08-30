<template>
  <div>
    <img class="w-full" :src="image.img_src" alt="space image" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

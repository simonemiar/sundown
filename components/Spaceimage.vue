<template>
  <div class="flex">
    <img
      @click="handleImg"
      class="w-40 h-40 m-2 grid"
      :src="image.img_src"
      alt="space image"
    />
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
  methods: {
    handleImg() {
      console.log('images test')
    },
  },
}
</script>

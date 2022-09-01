<template>
  <div class="flex">
    <img
      class="w-40 h-40 m-2"
      :src="image.img_src"
      @click="
        updateMissionimage(image)
        updateInput()
      "
      alt="space image"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      missionimages: [],
    }
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    updateMissionimage(image) {
      console.log('test input')
      this.missionimages = image.img_src
      console.log(image.img_src)
    },
    updateInput() {
      console.log('test input')
      this.$store.commit('setSpacereport', {
        key: 'missionimages',
        value: this.missionimages,
      })
    },
  },
}
</script>

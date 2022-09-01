<template>
  <div class="flex">
    <img
      class="w-40 h-40 m-2"
      @click="updateMissionimages"
      :src="image.img_src"
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
    updateMissionimages(e) {
      console.log(this.missionimages)
      this.missionimages = e.target.value
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

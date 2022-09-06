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
    return {
      // newmissionimages: ['fakenewjohn'],
    }
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async updateMissionimage(image) {
      console.log('test input')
      this.$emit('push-image', image)
      // this.newmissionimages.push(image.image)
      // console.log(this.newmissionimages)
    },
    // updateInput() {
    //   console.log('test input')
    //   this.$store.commit('setSpacereport', {
    //     key: 'newmissionimages',
    //     value: this.newmissionimages,
    //   })
    // },
  },
  computed: {
    spacereports() {
      return this.$store.getters.spacereports
    },
  },
}
</script>

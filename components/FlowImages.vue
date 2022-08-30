<template>
  <div>
    <h3 class="text-center">space images</h3>
    <!-- creating a loading... with fetch hook -->

    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2 h-80">
        <p class="font-bold">space mission images</p>
        <div
          id="report_container"
          class="border border-gray-900 overflow-scroll h-full"
        >
          <div v-if="!$fetchState.pending">
            <Spaceimage
              v-for="spaceimage in spaceimages"
              :key="spaceimage.img_src"
              :image="spaceimage"
            />
          </div>
          <div v-else>Loading...</div>
        </div>
      </div>
      <div class="m-2">
        <p class="font-bold">Selected images to report</p>
        <div id="select_container" class="border border-gray-900 h-full"></div>
      </div>
    </section>
    <div class="flex place-content-between">
      <Button text="back" />
      <Button @click.native="clickHandle" text="forward" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spaceimages: [],
    }
  },
  // needs to loop though array to get to img
  async fetch() {
    const data = await fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=15'
    ).then((res) => res.json())
    console.log(data)
    this.spaceimages = data.photos
  },
  methods: {
    clickHandle() {
      this.$emit('toggle-flow-map')
    },
  },
}
</script>

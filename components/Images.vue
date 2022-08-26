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
          <!-- https://www.youtube.com/watch?v=KOAJPmnMTEY&ab_channel=DebbieO%27Brien -->
          <!-- <div v-if="!$fetchState.pending">{{ images }}</div> -->
          <div v-if="!$fetchState.pending">
            <Spaceimages
              v-for="spaceimage in spaceimages"
              :key="spaceimage.img_src"
              :product="spaceimages"
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
      <nuxt-link to="/"> <v-button>back</v-button></nuxt-link>
      <v-button>forward</v-button>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  data() {
    return {
      spaceimages: [],
    }
  },
  // needs to loop though array to get to img
  components: { 'v-button': Button },
  async fetch() {
    this.spaceimages = await fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=15'
    ).then((res) => res.json())
  },
}
</script>

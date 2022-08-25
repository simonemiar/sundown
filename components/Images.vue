<template>
  <div>
    <h3>space images</h3>
    <!-- creating a loading... with fetch hook -->

    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2">
        <p>space reports created by [user.name]</p>
        <div id="report_container" class="border border-gray-900">
          <div v-if="!$fetchState.pending">{{ images }}</div>
          <div v-else>Loading...</div>
        </div>
      </div>
      <div class="m-2">
        <p class="font-bold">Selected images to report</p>
        <div id="select_container" class="border border-gray-900 h-20"></div>
      </div>
    </section>
    <v-button>black</v-button>
    <v-button>forward</v-button>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  data() {
    return {
      images: [],
    }
  },
  components: { 'v-button': Button },
  async fetch() {
    this.images = await fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=15'
    ).then((res) => res.json())
  },
}
</script>

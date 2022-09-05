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
            <Missionimage
              v-for="missionimage in missionimages"
              :key="missionimage.img_src"
              :image="missionimage"
            />
          </div>
          <div v-else>Loading...</div>
        </div>
      </div>
      <div class="m-2">
        <p class="font-bold">Selected images to report</p>
        <div id="select_container" class="border border-gray-900 h-full">
          <img :src="missionimages" alt="john" />
          {{ spacereports.missionimages }}
        </div>
      </div>
    </section>
    <div class="flex place-content-between">
      <Button text="back" />
      <Button
        @click.native="
          clickHandle()
          updateInput()
        "
        text="forward"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      missionimages: '',
      missionlongitude: '',
      missionlatitude: '',
    }
  },
  // needs to loop though array to get to img
  async fetch() {
    const data = await fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=15'
    ).then((res) => res.json())
    console.log(data)
    this.missionimages = data.photos
  },
  created() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.longitude)
        this.missionlongitude = data.longitude
        console.log(data.latitude)
        this.missionlatitude = data.latitude
      })
      .catch((e) => console.log(e))
  },
  methods: {
    clickHandle() {
      this.$emit('toggle-flow-map')
    },
    updateInput() {
      console.log('test input')
      this.$store.commit('setSpacereport', {
        key: 'missionlongitude',
        value: this.missionlongitude,
      })
      this.$store.commit('setSpacereport', {
        key: 'missionlatitude',
        value: this.missionlatitude,
      })
    },
  },
  computed: {
    spacereports() {
      return this.$store.getters.spacereports
    },
  },
}
</script>

<template>
  <div>
    <Header />
    <h3 class="text-center">space overview</h3>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2">
        <p class="font-bold">Mission name:</p>
        <p>{{ spacereports.missionname }}</p>
        <div>
          <p class="font-bold">Mission Descripton</p>
          <p>{{ spacereports.missiondesc }}</p>
        </div>
        <div>
          <p class="font-bold">Mission start date</p>
          <p>{{ spacereports.missiondate }}</p>
        </div>
        <div>
          <p class="font-bold">Lat:</p>
          <p>{{ coordinates.missionlatitude }}</p>
        </div>
        <div>
          <p class="font-bold">Long:</p>
          <p>{{ coordinates.missionlongitude }}</p>
        </div>
      </div>
      <div class="m-2 h-80">
        <div>
          <p class="font-bold">Images</p>
          <Missionimage
            v-for="image in spacereports.newmissionimages"
            :key="image.id"
            :image="image"
          />
        </div>
      </div>
    </section>
    <div class="flex place-content-between">
      <NuxtLink to="/flow/map" class="secondary-button"
        ><button>back</button></NuxtLink
      >
      <NuxtLink to="/" class="primary-button">
        <button @click="finaliseReport">Finalise report</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  data() {
    return {
      reports: [],
    }
  },
  methods: {
    finaliseReport() {
      console.log('test report')
    },
  },
  computed: {
    spacereports() {
      return this.$store.getters.spacereports
    },
    coordinates() {
      return this.$store.getters.spacereports.coordinates
    },
  },
}
</script>

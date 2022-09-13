<template>
  <div>
    <Header />
    <h3 class="text-center">space overview</h3>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2">
        <p class="font-bold">Mission name:</p>
        <p>{{ spacereport.missionname }}</p>
        <div>
          <p class="font-bold">Mission Descripton</p>
          <p>{{ spacereport.missiondesc }}</p>
        </div>
        <div>
          <p class="font-bold">Mission start date</p>
          <p>{{ spacereport.missiondate }}</p>
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
            v-for="image in spacereport.newmissionimages"
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
      spacereports: JSON.parse(localStorage.getItem('reports')),
    }
  },
  methods: {
    finaliseReport() {
      if (this.spacereports === null) {
        this.spacereports = []
      }
      this.spacereports.push(this.spacereport)

      this.updateLocalstorage()
      this.resetReport()
    },
    updateLocalstorage() {
      localStorage.setItem('reports', JSON.stringify(this.spacereports))
    },
    resetReport() {
      console.log('test reset')
      this.$store.dispatch('resetReport') // calling my action in the store
    },
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport
    },
    coordinates() {
      return this.$store.getters.spacereport.coordinates
    },
  },
}
</script>

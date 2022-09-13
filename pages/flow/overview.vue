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
      spacereports: [],
    }
  },
  methods: {
    finaliseReport() {
      console.log('test push')
      console.log(this.spacereport)
      this.spacereports.push(this.spacereport)

      this.updateLocalstorage()
      this.updateStore()
      this.resetReport()
    },
    updateLocalstorage() {
      localStorage.setItem('reports', JSON.stringify(this.spacereports))
      const outputreports = localStorage.getItem('reports')
      console.log(outputreports)
    },
    updateStore() {
      // this is actually not needed, when working with localstorage
      this.$store.commit('setSpacereports', {
        key: 'spacereports',
        value: this.spacereports,
      })
    },
    resetReport() {
      console.log('reset test')
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

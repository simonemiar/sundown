<template>
  <div>
    <h3 class="text-center">space map</h3>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2">
        <p class="font-bold">Current position over earth:</p>
        <div id="map_container" class="border border-gray-900 h-full"></div>
      </div>
      <div class="m-2 h-80">
        <div>
          <p class="font-bold">Lat:</p>
          <input
            id="lat"
            class="border border-gray-900 overflow-scroll w-full"
            required
          />
          <p>{{ spacereports.missionlongitude }}</p>
        </div>
        <div class="h-full">
          <p class="font-bold">Long:</p>
          <input
            id="long"
            class="border border-gray-900 overflow-scroll w-full"
            required
          />
          <p>{{ spacereports.missionlatitude }}</p>
          <button @click="findISS">find iss</button>
          <button @click="updateInput">find update</button>
        </div>
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
  name: 'FlowDetails',
  data() {
    return {
      missionlongitude: '',
      missionlatitude: '',
    }
  },
  // needs to loop though array to get to img
  methods: {
    clickHandle() {
      this.$emit('toggle-flow-overview')
    },
    findISS() {
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

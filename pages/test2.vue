<template>
  <div>
    <!-- <input type="text" v-model="test" class="border" />
    <h1>{{ test }}</h1> -->
    <div id="map" class="h-[300px] w-[600px]"></div>
    <div class="m-2 h-80">
      <div>
        <p class="font-bold">Lat:</p>
        <!-- <p
          class="border border-gray-900 w-full h-full"
          v-model="missionlongitude"
        ></p> -->
        <div
          class="border border-gray-900 w-full h-full"
          :missionlongitude="missionlongitude"
        >
          {{ missionlongitude }}
        </div>
      </div>
      <div class="h-full">
        <p class="font-bold">Long:</p>
        <!-- <p class="border border-gray-900 w-full" v-model="missionlongitude"> -->
        <div
          class="border border-gray-900 w-full"
          :missionlatitude="missionlongitude"
        >
          {{ missionlatitude }}
        </div>
      </div>
      <button @click="updateMapAndMarker">test latitude</button>
    </div>
  </div>
</template>

<script>
// implementing the CSS from the mapbox marker !!!! very important
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: 'Map',
  data() {
    return {
      test: 'Test',
      map: null,
      marker: null,
      missionlongitude: '',
      missionlatitude: '',
      mapCreated: false,
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css',
      },
    ],
  },
  async mounted() {
    await this.fetchData()
    this.createMap()
    setInterval(this.updateMapAndMarker, 5000)
    // first we call the function updateFetch which call and sets the data and ends with creating the map
    // then we call the interval, without the () from the function because if we use them, then it will run the function twice
    console.log('mmounted', this.mapCreated)
    this.mapCreated = true
    // const executed = false;
    // if (!executed) {
    //   executed = true
    //   console.log('create map function')
    //   this.createMap()
    // } else {
    //   console.log('update marker function')
    //   this.updateMarker()
    // })
  },
  methods: {
    async fetchData() {
      let currentTimestamp = Math.floor(Date.now() / 1000)
      const response = await fetch(
        `https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=${currentTimestamp}`
      )
      const data = await response.json()
      this.missionlongitude = data[0].longitude
      this.missionlatitude = data[0].latitude
    },
    createMap() {
      const mapboxgl = require('mapbox-gl')
      this.map = new mapboxgl.Map({
        accessToken:
          'pk.eyJ1Ijoic2ltb25lbWlhciIsImEiOiJjbDdybG5ndWowNWFoM3dxcmQwM2Fkd2p6In0.Sz0xWuvcc431FpZdXOwBsQ',
        container: 'map', // <div id="map"></div>
        style: 'mapbox://styles/mapbox/streets-v11', // default style
        center: [this.missionlongitude, this.missionlatitude], // starting position as [lng, lat]
        zoom: 2,
      })
      // Create a default Marker and add it to the map.
      this.marker = new mapboxgl.Marker()
        .setLngLat([this.missionlongitude, this.missionlatitude])
        .addTo(this.map)
    },
    updateMarker() {
      this.marker.setLngLat([this.missionlongitude, this.missionlatitude])
    },
    updateMap() {
      this.map.setCenter([this.missionlongitude, this.missionlatitude])
    },
    updateMapAndMarker() {
      console.log(this.mapCreated)
      this.fetchData()
      this.updateMap()
      this.updateMarker()
    },
  },
  computed: {
    coordinates() {
      return this.$store.getters.spacereports.coordinates
    },
  },
  // watch: {
  //   test() {
  //     console.log(this.test)
  //   },
  // },
}
</script>

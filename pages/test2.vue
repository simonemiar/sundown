<template>
  <div>
    <!-- <input type="text" v-model="test" class="border" />
    <h1>{{ test }}</h1> -->
    <div id="map" class="h-80 w-80"></div>
    <div class="m-2 h-80">
      <div>
        <p class="font-bold">Lat:</p>

        <p class="border border-gray-900 w-full h-full">
          {{ coordinates.missionlongitude }}
        </p>
      </div>
      <div class="h-full">
        <p class="font-bold">Long:</p>
        <p class="border border-gray-900 w-full">
          {{ coordinates.missionlatitude }}
        </p>
      </div>
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
      map: '',
      marker: '',
      coordinates: {
        missionlongitude: '',
        missionlatitude: '',
      },
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
  created() {
    let currentTimestamp = Math.floor(Date.now() / 1000)
    console.log(currentTimestamp)
    //https://www.youtube.com/watch?v=jKQUHGpOHqg&ab_channel=TheCodingTrain
    fetch(
      `https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=${currentTimestamp}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.coordinates.missionlongitude = data.longitude
        this.coordinates.missionlatitude = data.latitude
        console.log(this.coordinates.missionlatitude)
      })
      .catch((e) => console.log(e))
  },
  mounted() {
    this.createMap()
  },
  methods: {
    createMap() {
      const mapboxgl = require('mapbox-gl')
      const map = new mapboxgl.Map({
        accessToken:
          'pk.eyJ1Ijoic2ltb25lbWlhciIsImEiOiJjbDdybG5ndWowNWFoM3dxcmQwM2Fkd2p6In0.Sz0xWuvcc431FpZdXOwBsQ',
        container: 'map', // <div id="map"></div>
        style: 'mapbox://styles/mapbox/streets-v9', // default style
        center: [
          this.coordinates.missionlongitude,
          this.coordinates.missionlatitude,
        ], // starting position as [lng, lat]
        zoom: 3,
      })
      // Create a default Marker and add it to the map.
      const marker1 = new mapboxgl.Marker()
        .setLngLat([
          this.coordinates.missionlatitude,
          this.coordinates.missionlatitude,
        ])
        .addTo(map)
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

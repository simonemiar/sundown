<template>
  <div>
    <h3 class="text-center">space map</h3>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2">
        <p class="font-bold">Current position over earth:</p>
        <div id="map_container" class="border border-gray-900 h-full">
          <div id="map" class="h-full w-full"></div>
        </div>
      </div>
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
            :missionlatitude="missionlatitude"
          >
            {{ missionlatitude }}
          </div>
        </div>
      </div>
    </section>
    <div class="flex place-content-between">
      <NuxtLink to="/flow/images" class="secondary-button"
        ><button>back</button></NuxtLink
      >
      <NuxtLink to="/flow/overview" class="primary-button">
        <button @click="updateStore">forward</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
// implementing the CSS from the mapbox marker !!!! very important
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  name: "Map",
  layout: "flow",
  data() {
    return {
      test: "Test",
      map: null,
      marker: null,
      missionlongitude: "",
      missionlatitude: "",
    };
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css",
      },
    ],
  },
  async mounted() {
    await this.fetchData();
    this.createMap();
    setInterval(this.updateMapAndMarker, 10000);
    // first we call the function updateFetch which call and sets the data and ends with creating the map
    // then we call the interval, without the () from the function because if we use them, then it will run the function twice
  },
  methods: {
    async fetchData() {
      let currentTimestamp = Math.floor(Date.now() / 1000);
      const response = await fetch(
        `https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=${currentTimestamp}`
      );
      const data = await response.json();
      this.missionlongitude = data[0].longitude;
      this.missionlatitude = data[0].latitude;
    },
    createMap() {
      const mapboxgl = require("mapbox-gl");
      this.map = new mapboxgl.Map({
        accessToken:
          "pk.eyJ1Ijoic2ltb25lbWlhciIsImEiOiJjbDdybG5ndWowNWFoM3dxcmQwM2Fkd2p6In0.Sz0xWuvcc431FpZdXOwBsQ",
        container: "map", // <div id="map"></div>
        style: "mapbox://styles/mapbox/streets-v11", // default style
        center: [this.missionlongitude, this.missionlatitude], // starting position as [lng, lat]
        zoom: 2,
      });
      // Create a default Marker and add it to the map.
      this.marker = new mapboxgl.Marker()
        .setLngLat([this.missionlongitude, this.missionlatitude])
        .addTo(this.map);
    },
    updateMarker() {
      this.marker.setLngLat([this.missionlongitude, this.missionlatitude]);
    },
    updateMap() {
      this.map.setCenter([this.missionlongitude, this.missionlatitude]);
    },
    updateMapAndMarker() {
      this.fetchData();
      this.updateMap();
      this.updateMarker();
    },
    updateStore() {
      console.log("test input");
      this.$store.commit("setCoordinates", {
        key: "missionlongitude",
        value: this.missionlongitude,
      });
      this.$store.commit("setCoordinates", {
        key: "missionlatitude",
        value: this.missionlatitude,
      });
    },
  },
  computed: {
    coordinates() {
      return this.$store.getters.spacereport.coordinates;
    },
  },
};
</script>

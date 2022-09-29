<template>
  <div class="bg-blue-50 w-screen h-screen">
    <section id="section_layout" class="sm:grid sm:grid-cols-2">
      <div class="m-2">
        <p class="font-bold">Current position over earth:</p>
        <div
          id="map_container"
          class="border rounded border-gray-300 bg-white h-5/6"
        >
          <div id="map" class="w-full h-60 sm:h-full sm:w-full"></div>
        </div>
      </div>
      <div class="m-2 h-80">
        <div>
          <p class="font-bold">Lat:</p>
          <div
            class="border border-gray-300 bg-white p-2 w-full h-full rounded"
            :missionlongitude="missionlatitude"
          >
            {{ missionlatitude }}
          </div>
        </div>
        <div class="h-full">
          <p class="font-bold">Long:</p>
          <div
            class="border border-gray-300 bg-white p-2 w-full rounded"
            :missionlatitude="missionlongitude"
          >
            {{ missionlongitude }}
          </div>
        </div>
      </div>
    </section>
    <div class="flex px-8 place-content-between max-w-screen-lg sm:m-auto">
      <NuxtLink to="/flow/images" class="secondary-button"
        ><button>BACK</button></NuxtLink
      >

      <button class="primary-button" @click="updateStore()">FORWARD</button>
    </div>
  </div>
</template>

<script>
// implementing the CSS from the mapbox marker !!!! very important
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

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
      ismapcompleted: this.$store.state.spacereport.iscompleted.ismapcompleted,
      currentreport: {},
      allCoordinates: [],
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
    this.createMap();
    this.populateMapWithOldCoordinates();
    await this.fetchData();
    console.log("fetch baby");
    setInterval(this.fetchData, 60000);
    this.setLocalStorage();
  },
  methods: {
    setLocalStorage() {
      if (localStorage.currentReport) {
        let getCurrentReport = localStorage.getItem("currentReport");
        let parseCurrentReport = JSON.parse(getCurrentReport);
        let realCurrentReport = Object.assign(
          this.currentreport,
          parseCurrentReport
        );

        // set currentreport to spacereport
        this.$store.commit("setCurrentReport", this.currentreport);
      } else {
        this.currentreport = this.$store.state.spacereport;
      }
    },
    async fetchData() {
      let currentTimestamp = Math.floor(Date.now() / 1000);
      const response = await fetch(
        `https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=${currentTimestamp}`
      );
      const data = await response.json();
      let missionlongitude = data[0].longitude;
      let missionlatitude = data[0].latitude;

      this.missionlongitude = missionlongitude;
      this.missionlatitude = missionlatitude;

      this.allCoordinates.push({
        missionlongitude: missionlongitude,
        missionlatitude: missionlatitude,
      });
      this.marker = new mapboxgl.Marker()
        .setLngLat([missionlongitude, missionlatitude])
        .addTo(this.map);

      this.map.setCenter([missionlongitude, missionlatitude]);
    },
    populateMapWithOldCoordinates() {
      const oldCoordinates = this.$store.state.spacereport.allCoordinates;
      if (oldCoordinates.length) {
        oldCoordinates.forEach((coordinateSet) => {
          new mapboxgl.Marker()
            .setLngLat([
              coordinateSet.missionlongitude,
              coordinateSet.missionlatitude,
            ])
            .addTo(this.map);
        });
      }
    },
    createMap() {
      this.map = new mapboxgl.Map({
        accessToken:
          "pk.eyJ1Ijoic2ltb25lbWlhciIsImEiOiJjbDdybG5ndWowNWFoM3dxcmQwM2Fkd2p6In0.Sz0xWuvcc431FpZdXOwBsQ",
        container: "map", // <div id="map"></div>
        style: "mapbox://styles/mapbox/streets-v11", // default style
        zoom: 3,
      });
    },

    updateStore() {
      this.$store.commit("setCompleted", {
        key: "ismapcompleted",
        value: true,
      });
      this.$store.commit("setCoordinates", {
        key: "missionlongitude",
        value: this.missionlongitude,
      });
      this.$store.commit("setCoordinates", {
        key: "missionlatitude",
        value: this.missionlatitude,
      });

      this.$store.commit("setAllCoordinates", this.allCoordinates);

      this.updateLocalstorage();
      this.$router.push("/flow/overview");
    },
    updateLocalstorage() {
      let getCurrentReport = localStorage.getItem("currentReport");
      let parseCurrentReport = JSON.parse(getCurrentReport);
      console.log("parse report", parseCurrentReport);
      let currentReport = {
        ...parseCurrentReport,
        allCoordinates: this.allCoordinates,
        ...{
          coordinates: {
            missionlongitude: this.missionlongitude,
            missionlatitude: this.missionlatitude,
          },
          allCoordinates: this.allCoordinates,
          iscompleted: {
            ...parseCurrentReport.iscompleted,
            ismapcompleted:
              this.$store.state.spacereport.iscompleted.ismapcompleted,
          },
        },
      };
      localStorage.setItem("currentReport", JSON.stringify(currentReport));
    },
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport.spacereport;
    },

    iscompleted() {
      return this.$store.getters.spacereport.iscompleted;
    },
  },
};
</script>

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

export default {
  name: "Map",
  layout: "flow",
  data() {
    return {
      test: "Test",
      map: null,
      marker: null,
      // missionlongitude: "",
      // missionlatitude: "",
      // coordinates: this.$store.state.spacereport.coordinates,
      ismapcompleted: this.$store.state.spacereport.iscompleted.ismapcompleted,
      currentreport: {},
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
    setInterval(this.updateMapAndMarker, 60000);

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
        zoom: 3,
      });

      const oldcoordinates = this.$store.state.spacereport.oldcoordinates;
      const oldcoordinatesLength =
        this.$store.state.spacereport.oldcoordinates.length;

      // Create a default Marker and add it to the map.
      if (!oldcoordinatesLength) {
        console.log("first marker");
        this.marker = new mapboxgl.Marker()
          .setLngLat([this.missionlongitude, this.missionlatitude])
          .addTo(this.map);
        this.$store.commit("oldCoordinates", this.coordinates);
      } else {
        console.log("load in old coordinates");
        for (let i = 0; i < oldcoordinatesLength; i++) {
          new mapboxgl.Marker()
            .setLngLat([
              oldcoordinates[i].missionlongitude,
              oldcoordinates[i].missionlatitude,
            ])
            .addTo(this.map);
          console.log("first new marker");
          this.marker = new mapboxgl.Marker()
            .setLngLat([this.missionlongitude, this.missionlatitude])
            .addTo(this.map);
        }
        //oldcoordinates.forEach((location) => {
        //const el = document.createElement("div");
        // add marker to map
        //console.log("location", location);
        // new mapboxgl.Marker()
        //   .setLngLat([location.missionlongitude, location.lamissionlatitudet])
        //   .addTo(this.map);

        // this.oldcoordinates.push(this.marker);
        //});
      }
    },
    updateMarker() {
      this.marker.setLngLat([this.missionlongitude, this.missionlatitude]);
      this.$store.commit("oldCoordinates", this.coordinates);
      console.log("the coordi", this.coordinates);

      const mapboxgl = require("mapbox-gl");
      const oldcoordinates = this.$store.state.spacereport.oldcoordinates;
      const oldcoordinatesLength =
        this.$store.state.spacereport.oldcoordinates.length;
      for (let i = 0; i < oldcoordinatesLength; i++) {
        // console.log("test marker", oldcoordinates);
        new mapboxgl.Marker()
          .setLngLat([
            oldcoordinates[i].missionlongitude,
            oldcoordinates[i].missionlatitude,
          ])
          .addTo(this.map);
      }
    },
    updateMap() {
      this.map.setCenter([this.missionlongitude, this.missionlatitude]);
    },
    updateOldMarker() {},
    updateMapAndMarker() {
      this.fetchData();
      this.updateMap();
      this.updateMarker();
    },
    updateStore() {
      this.$store.commit("setCompleted", {
        key: "ismapcompleted",
        value: true,
      });
      // this.$store.commit("setCoordinates", {
      //   key: "missionlatitude",
      //   value: this.missionlatitude,
      // });
      // this.$store.commit("setCoordinates", {
      //   key: "missionlongitude",
      //   value: this.missionlongitude,
      // });
      this.$store.commit("setSpacereport", {
        key: "oldcoordinates",
        value: this.$store.state.spacereport.oldcoordinates,
      });
      this.updateLocalstorage();
      this.$router.push("/flow/overview");
    },
    updateLocalstorage() {
      let getCurrentReport = localStorage.getItem("currentReport");
      let parseCurrentReport = JSON.parse(getCurrentReport);
      console.log("actual current", parseCurrentReport);
      let currentReport = {
        ...parseCurrentReport,
        ...{
          coordinates: {
            missionlongitude: this.missionlongitude,
            missionlatitude: this.missionlatitude,
          },
          oldcoordinates: this.$store.state.spacereport.oldcoordinates,
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
    coordinates() {
      return this.$store.getters.spacereport.coordinates;
    },
    iscompleted() {
      return this.$store.getters.spacereport.iscompleted;
    },
    missionlongitude: {
      get() {
        return this.$store.getters.spacereport.coordinates.missionlongitude;
      },
      set(newValue) {
        return this.$store.commit("setCoordinates", {
          key: "missionlongitude",
          value: newValue,
        });
      },
    },
    missionlatitude: {
      get() {
        return this.$store.getters.spacereport.coordinates.missionlatitude;
      },
      set(newValue) {
        return this.$store.commit("setCoordinates", {
          key: "missionlatitude",
          value: newValue,
        });
      },
    },
  },
};
</script>

<template>
  <div>
    <Header />
    <h3 class="text-center">space map</h3>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2">
        <p class="font-bold">Current position over earth:</p>
        <div id="map_container" class="border border-gray-900 h-full">
          <GmapMap
            :center="center"
            :zoom="7"
            map-type-id="terrain"
            class="w-full h-full"
            :options="{
              zoomControl: true,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: false,
              fullscreenControl: false,
              disableDefaultUi: false,
            }"
            ref="mapRef"
          >
            <GmapMarker
              v-for="(marker, index) in markers"
              :key="index"
              :position="marker.position"
              :clickable="true"
              @click="center = marker.position"
            />
          </GmapMap>
        </div>
      </div>
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
    </section>
    <div class="flex place-content-between">
      <NuxtLink to="/flow/images" class="secondary-button"
        ><button>back</button></NuxtLink
      >
      <NuxtLink to="/flow/overview" class="primary-button">
        <button>forward</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlowDetails',
  data() {
    return {
      center: { lat: 10, lng: 10 },
    }
  },
  computed: {
    coordinates() {
      return this.$store.getters.spacereports.coordinates
    },
    markers() {
      return [
        {
          position: { lat: 1.58, lng: -28.7 },
        },
      ]
    },
  },
}
</script>

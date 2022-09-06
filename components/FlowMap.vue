<template>
  <div>
    <h3 class="text-center">space map</h3>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2">
        <p class="font-bold">Current position over earth:</p>
        <div id="map_container" class="border border-gray-900 h-full">
          <GmapMap
            :center="{ lat: missionlatitude, lng: missionlongitude }"
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
            {{ spacereports.missionlongitude }}
          </p>
        </div>
        <div class="h-full">
          <p class="font-bold">Long:</p>
          <p class="border border-gray-900 w-full">
            {{ spacereports.missionlatitude }}
          </p>
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
      center: { lat: 10, lng: 10 },
    }
  },
  methods: {
    clickHandle() {
      this.$emit('toggle-flow-overview')
    },
  },
  computed: {
    spacereports() {
      return this.$store.getters.spacereports
    },
    markers() {
      return [
        {
          position: { lat: 1.58, lng: -28.7 },
        },
      ]
    },
  },
  mounted() {},
}
</script>

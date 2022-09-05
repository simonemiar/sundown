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
    return {}
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
  },
}
</script>

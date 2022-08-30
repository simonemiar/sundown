<template>
  <div>
    <h3 class="text-center">space map</h3>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2">
        <p class="font-bold">Current position over earth:</p>
        <div
          id="calender_container"
          class="border border-gray-900 h-full"
        ></div>
      </div>
      <div class="m-2 h-80">
        <div>
          <p class="font-bold">Lat:</p>
          <input
            id="mission_name"
            class="border border-gray-900 overflow-scroll w-full"
            required
          />
        </div>
        <div class="h-full">
          <p class="font-bold">Long:</p>
          <input
            id="mission_name"
            class="border border-gray-900 overflow-scroll w-full"
            required
          />
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
  methods: {
    clickHandle() {
      this.$emit('toggle-flow-overview')
    },
  },
}
</script>

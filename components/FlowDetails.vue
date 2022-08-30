<template>
  <div>
    <h3 class="text-center">space details</h3>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2 h-80">
        <div>
          <label class="font-bold">Mission name</label>
          <input
            v-model="missionname"
            id="missionname"
            class="border border-gray-900 overflow-scroll w-full"
            name="missionname"
            required
          />
        </div>
        <div class="h-full">
          <label class="font-bold">Mission description</label>
          <textarea
            :value="missiondesc"
            @input="updateMissiondesc"
            id="missiondescription"
            name="missiondesc"
            class="border border-gray-900 overflow-scroll h-5/6 w-full"
            required
          />
        </div>
      </div>
      <div class="m-2">
        <p class="font-bold">Mission start date (calender)</p>
        <div
          id="calender_container"
          class="border border-gray-900 h-full"
        ></div>
      </div>
    </section>
    <div class="flex place-content-between">
      <nuxt-link to="/"><Button text="back" /></nuxt-link>
      <Button @click.native="clickHandle()" text="forward" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlowDetails',
  data() {
    return {}
  },
  computed: {
    missiondesc() {
      return this.$store.state.missiondesc
    },
  },
  methods: {
    clickHandle() {
      this.$emit('toggle-flow-images')
    },

    updateMissiondesc(e) {
      this.$store.commit('updateMissiondesc', e.target.value)
    },
  },
}
</script>

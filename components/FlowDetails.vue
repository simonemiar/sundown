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
            v-model="missiondesc"
            id="missiondesc"
            name="missiondesc"
            class="border border-gray-900 overflow-scroll h-5/6 w-full"
            required
          />
        </div>
      </div>
      <div class="m-2">
        <p class="font-bold">Mission start date (calender)</p>
        <div id="calender_container" class="border border-gray-900 h-full">
          <div>
            <v-date-picker
              mode="range"
              v-model="selectedDate"
              :min-date="new Date()"
              show-caps
            />
          </div>
        </div>
      </div>
    </section>
    <div class="flex place-content-between">
      <nuxt-link to="/"><Button text="back" /></nuxt-link>
      <Button
        @click.native="
          clickHandle()
          updateInput()
        "
        text="forward"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlowDetails',
  data() {
    return {
      missionname: '',
      missiondesc: '',
      missiondate: '',
      selectedDate: {
        start: new Date(2018, 10, 9),
        end: new Date(2018, 10, 10),
      },
    }
  },
  methods: {
    clickHandle() {
      this.$emit('toggle-flow-images')
    },
    updateInput() {
      console.log('test input')
      this.$store.commit('setSpacereport', {
        key: 'missionname',
        value: this.missionname,
      })
      this.$store.commit('setSpacereport', {
        key: 'missiondesc',
        value: this.missiondesc,
      })
    },
  },
}
</script>
